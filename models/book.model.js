module.exports=(sequelize,Sequelize)=>{

    const Book = sequelize.define("book",{

        isbnNumber:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        author:{
            type:Sequelize.STRING,
            allowNull:false
        },
        publishedOn:{
            type:Sequelize.DATE,

        },
        addedOn:{
            type:Sequelize.DATE,
        },
        userId:{
            type:Sequelize.INTEGER,
            defaultValue:null
        }
    });

    return Book;
}