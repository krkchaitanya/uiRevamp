const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();


app.get("/api", (req,res) => {
    res.json({
        message: "Welcome to API"
    });
});

app.get("/api/posts", (req,res) => {
    res.json({
        message: "Post created"
    });
});


app.post("/api/login", (req,res) => {
    const mockTempUser = {
        userId: req.userId,
        username: req.userEmail
    };
    jwt.sign({user: mockTempUser}, 'secretkeyhere', (error, token) => {
        if (error) {
            res.sendStatus(403);
        }
        res.json({
            token
        });
    });
});

const port = process.env.PORT || 2990;
app.listen(port, () => {
    console.log(port);
});