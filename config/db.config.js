/*
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Sk!lpad05",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  */

  const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Sk!lpad05",//"Sk!lpad05",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
  
  export default dbConfig;