import express from 'express';
import db from "./db/db-connection.js";
import cors from 'cors';


const app = express();
const PORT = 1212;

app.use(cors());
app.use(express.json()); //req.body

app.get('/', async (req, res) =>{

    try{
        const { rows: players } = await db.query('SELECT * FROM players');
        res.send(players);

    } catch(error){
        res.status(400).json({error});
    }    
})

app.put('/:id', async (req, res) => {

    try {

      const { id } = req.params;

      const {nickname, score } = req.body;

      console.log("EDIT: ", id, nickname, score)

      const editedPlayer = await db.query(
        "UPDATE players SET nickname = $1, score = $2 WHERE id = $3 RETURNING *",
        [nickname, score, id]
      );

        if (editedPlayer.rows.length > 0) {
          
            res.json({
                status: 'success',
                message: 'Contact updated!',
                data: editedPlayer.rows[0]
            });

            // console.log(editedContact.rows[0])
        }

    } catch(error){
        console.log(error);
        res.status(400).json({error});
    }  
});

app.post("/new-player", async (req, res) =>  {
    
    try {
        const {nickname } = req.body;

        const newPlayer = await db.query (
            "INSERT INTO players (nickname) VALUES ($1) RETURNING *", [nickname]
        );

        res.json(newPlayer.rows[0])
        
    } catch (error) {
        console.error(error.message)
    }

});

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deletePlayer= await db.query("DELETE FROM players WHERE id = $1", [id]
        );

        res.json("The player was deleted!");

    } catch (error) {
        console.error(error.message)
    }
})

app.get('/top-players', async (req, res) => {
    
    try{
        const { rows: topPlayers } = await db.query('SELECT * FROM players ORDER BY score DESC LIMIT 10');
        res.send(topPlayers);

    } catch(error){
        res.status(400).json({error});
    }   
});




app.listen(PORT, () => console.log(`HELLOO! Server running on Port http://localhost:${PORT}`));


export default app;