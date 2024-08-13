const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const jwstoken = require("jsonwebtoken")



app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quickly",
});

// Registraction Data
app.post("/user", (req, res) => {
  const sql =
    "INSERT INTO registerform (`fullname`,`email`,`phonenumber`,`gender`,`howdoknow`) VALUES(?)";
  const values = [
    req.body.fullname,
    req.body.email,
    req.body.phonenumber,
    req.body.gender,
    req.body.howdoknow,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return err.json("error");
    } else {
      return res.json("successfylly submi data");
    }
  });
});

//Login Data

app.post("/login", (req, res) => {

  const values = [req.body.email, req.body.password];
    
  const sql = "SELECT * FROM adminlogin WHERE email = ? AND password = ?";

   db.query(sql, values, (err, result) => {

   if (err) {
      res.status(500).json({ message: "server error" });
      console.log(err);
    } else {
      console.log(result.data);

      if (result.length !== 0) {
        const token = jwstoken.sign({username:result[0].email},"securetetoken")
        res.status(200).json({jsonToken:token});
      } else {
        res.status(500).json({ message: "Wrong usernme or password" });
      }
    }
  });
});


//dashboard get data

app.get('/registerdata',(req,res)=>{
  const sql= `SELECT * FROM registerform`;
  db.query(sql,(err,result)=>{
if(err){
  return res.json({message:"error inside server"});
}
return res.json(result);

  })
})

app.listen(4000, () => {
  console.log("successfully running");
});
