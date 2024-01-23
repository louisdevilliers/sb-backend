import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sk!lpad05',
  database: 'sb_db'
});
 
export default db;