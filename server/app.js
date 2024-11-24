const mysql = require("mysql2");
const express = require("express");
const server = express();
const cors = require("cors")
const connection = mysql.createConnection({
  user: "myDBuser",
  password: "group4",
  database: "myDB",
  host: "localhost",
});
connection.connect((err) => {
  if (err) console.log(err);
  else {
    console.log("successfully connected");
  }
});
server.use(cors())

server.use(
  express.urlencoded({
    extended: true,
  })
);



server.get("/data",(req,res)=>{
  let kebede = `SELECT * from Product_Table join Product_Description_Table join Product_Price_Table  on Product_Table.Product_id = Product_Description_Table.product_id and Product_Table.Product_id = Product_Price_Table.Product_id `;
  connection.query(kebede,(err,result,fields) =>{
    if(err) console.log(err);
    res.send(result)
  })

})
// createTable()
server.listen(4999, (err) => {
  if (err) console.log(err);
  else {
    console.log("bedenb eyesemahu nw");
  }
});
