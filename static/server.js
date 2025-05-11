const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());

// Connect to MySQL Database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "smasduq"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

// Get user wallet ballance
app.get("wallet/:user__id", (req, res) => {
    const { user_id } = req.params;
    db.query("SELECT balance FROM wallets WHERE user_id = ?", [user_id], (err, result)  => {
        if (err) throw err;
        res.json(result[0] || { balance: 0.00});
    });
});

// Add money to wallet
app.post("/wallet/withdraw", (req, res) => {
    const { user_id, amount } = req.body;
    db.query("SELECT balance FROM wallets WHERE user_id = ?", [user_id], (err, result) => {
        if (err) throw err;
        if (result[0].balance >= amount) {
            db.query("UPDATE wallets SET balance = balance - ? WHERE user_id = ?", [amount, user_id], (err) =>  {
                if (err) throw err;
                res.json({message: "Payment Succesful" });
            });
        }
    });
});

app.listen(3000, () console.log("Server running on port 3000"));