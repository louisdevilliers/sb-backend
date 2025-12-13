import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: "127.0.0.1",//'localhost',
  user: 'root',
  password: 'Sk!lpad05',//'Sk!lpad05',
  database: 'testdb',
  port: 3307
});
 
export default db;