module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "qwerty123", // update the db password here
    DB: "library", //add database name here
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };