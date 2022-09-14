
const express =require("express");
const bodyParser = require('body-parser');
const { response } = require("express");


const app = express();
app.use(express.static("public"));


app.set("views","./views");
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({ extended: false }));

const Response={
    checkValues:{
        status:"Failure",
        massage: "Enter the Value"
    },
    invalidInput: {
        status:"Failure",
        massage: "Invalid data types"
    },
    Overflow: {
        status:"Failure",
        massage: "Overflow"
    },
    Underflow: {
        status:"Failure",
        massage: "Underflow"
    }
};

function invalide(num1,num2)
{
    if(isNaN(num1) || isNaN(num2))
    {
        return false
    }

    return true ;
}

function checkValues(num1,num2)
{
    if(num1== "" || num2== "")
    {
        return false;
    }

    return true ;
}
app.get("/",(req,res)=>{
   
    res.render("index.ejs")
});

app.post("/add" , (req,res)=>{
   
    num1= req.body.num1
    num2= req.body.num2

    let result = Number(num1) + Number(num2)
    if(!invalide(num1,num2)){

        return res.status(400).send(Response.invalidInput)
    }

    if(!checkValues(num1,num2)){

        return res.status(400).send(Response.checkValues)
    }

    if(num1< -1000000 || num2 < -1000000 || result < -1000000)
    {
        return res.status(400).send(Response.Underflow)
    }

    if(num1> 1000000 || num2 > 1000000 || result > 1000000)
    {
        return res.status(400).send(Response.Overflow)
    }

  res.status(200).send({
    status:"success",
    massage: "the sum of given two numbers",
    result: result
  });

});


app.post("/sub",(req,res)=>{
    
    num1= req.body.num1
    num2= req.body.num2

    let result = Number(num1) - Number(num2)
    if(!invalide(num1,num2)){

        return res.status(400).send(Response.invalidInput)
    }

    if(!checkValues(num1,num2)){

        return res.status(400).send(Response.checkValues)
    }

    if(num1< -1000000 || num2 < -1000000 || result < -1000000)
    {
        return res.status(400).send(Response.Underflow)
    }

    if(num1> 1000000 || num2 > 1000000 || result > 1000000)
    {
        return res.status(400).send(Response.Overflow)
    }
    res.status(200).send({
        status:"success",
        massage: "the difference of given two numbers",
        Ruselt: result
      });
});


app.post("/multiply",(req,res)=>{

    
    num1= req.body.num1
    num2= req.body.num2

    let result = Number(num1) * Number(num2)
    if(!invalide(num1,num2)){

        return res.status(400).send(Response.invalidInput)
    }

    if(!checkValues(num1,num2)){

        return res.status(400).send(Response.checkValues)
    }

    if(num1< -1000000 || num2 < -1000000 || result < -1000000)
    {
        return res.status(400).send(Response.Underflow)
    }

    if(num1> 1000000 || num2 > 1000000 || result > 1000000)
    {
        return res.status(400).send(Response.Overflow)
    }



    res.status(200).send({
        status:"success",
        message: "The product of given numbers",
        result: result
      });
});  


app.post("/divide",(req,res)=>{

      
    num1= req.body.num1
    num2= req.body.num2

    let result = Number(num1) / Number(num2)
    if(!invalide(num1,num2)){

        return res.status(400).send(Response.invalidInput)
    }

    if(!checkValues(num1,num2)){

        return res.status(400).send(Response.checkValues)
    }

    if(num1< -1000000 || num2 < -1000000 || result < -1000000)
    {
        return res.status(400).send(Response.Underflow)
    }

    if(num1> 1000000 || num2 > 1000000 || result > 1000000)
    {
        return res.status(400).send(Response.Overflow)
    }

    if ( num2 == 0 ){
        return res.status(400).send({
            status: "Failure",
            massage: "Cannot divide by zero"
        })
    }
    res.status(200).send({
        status:"success",
        message: "The division of given numbers", 
        result: result
      });
});


app.listen(3000, ()=>{
    console.log("server is up")
})





