module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;
  const User = sequelize.define('User', {
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: "India"
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
    },
    isAdmin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
      }
  });
  return User;
};

/*
create table users(
  name varchar(50), 
  email varchar(50), 
  password varchar(50), 
  location varchar(100), 
  date datetime, 
  createdAt datetime, 
  updatedAt datetime, 
  id int auto_increment,
  primary key(id)
  );
*/