import pg from 'pg'

const db = new pg.Pool({
  connectionString: "postgresql://localhost/guesgamedb"
});

export default db;