const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const { createPool } = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pi",
  database: "MatchDatabase",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

// const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "pi",
//   database: "MatchDatabase",
//   connectionLimit: 10,
// });

app.get("/", (re, res) => {
  return res.json("From backend Side");
});

app.get("/match", (re, res) => {
  const sql = `SELECT * FROM MatchTable`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("listening");
});
