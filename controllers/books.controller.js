const db=require("../models");
const Book = db.book;
const User = db.user;

exports.create=async (req,res)=>{

    const {name,author}=req.body;
    const {userId} = req.params;


    const user= await User.findByPk(userId);

    if(!user){
        return  res.status(400).send({message:"Invalid user"});
    }

    if(!user.isAdmin){
        return res.status(403).send({message:"Only admin users are allowed to perform this operation"});
        
    }

    const book={
        name,author,addedOn:Date.now()
    }

    console.log(book);

    const response = await Book.create(book);
    res.status(201).send(response);
}

exports.findAll=async (req,res)=>{

    const books=await Book.findAll();
    res.send(books);
}

exports.performAction= async (req,res)=>{

    const {bookId,userId} =req.params;

    //get the book by bookId 

    const book= await Book.findByPk(bookId);
    const user= await User.findByPk(userId);

    if(!book || !user){
        return res.status(400).send({message:"Invalid details"});
    }


    if(req.query.rent)
    {
 
    if(book.userId){
        return res.send({message:"Books is already rented"});
    }
    
    await Book.update({userId:userId},{
        where:{isbnNumber:bookId}
    })

    return res.send("Book rented successfully");
    }

    if(req.query.return){

        if(book.userId!=userId){
            return res.status(400).send("The user doensot hold the return book");
        }

        await Book.update({userId:null},{
            where:{isbnNumber:bookId}
        })

        res.send("Book returned successfully");
    }

}

exports.findAllRentedBooks=async (req,res)=>{

    const userId= req.params.userId;

    const books = await Book.findAll();

    const userBooks = books.filter((book)=>{
        return book.userId==userId;
    })

    res.send(userBooks);

}