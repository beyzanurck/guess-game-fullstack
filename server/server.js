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


app.listen(PORT, () => console.log(`HELLOO! Server running on Port http://localhost:${PORT}`));


export default app;