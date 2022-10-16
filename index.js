const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db=require("./models");
const session = require('express-session');
const bodyParser= require("body-parser");
dotenv.config();


db.sequelize.sync({force:false})
.then(()=>{
  console.log("DB Synced");
})

app.use(bodyParser.json());


//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));

  //manually insert users


  // db.user.create({
  //   name:"adminUser",
  //   email:"admin@amazon.com",
  //   password:"qwerty123",
  //   isAdmin:true
  // })

  db.user.findAll()
  .then(users=>{
    console.log(users);
  })


  

//Routes
app.use("/", require("./routes/login"));


//import book routes 
require("./routes/books.routes")(app);


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server has started at port " + PORT));
