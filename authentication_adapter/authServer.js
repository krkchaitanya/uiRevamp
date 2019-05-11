// info
// port : 2990
// Dependencies: jwt
// Methods: jwt.sign(payload, secretKey, callbackFn)     jwt.verify(tkn, callbackFn)

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");

// app initialization
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Default route
app.get("/", (req, res) => {
    res.json({
        title: "Welcome to authentication adapter module",
        description: "iewu viudhv ius iusdio fjweg weug iowejg owue goiweu gwueoi vsd iurewg hjkldsj g9posid o sojuidigosdj"
    });
});

app.get("/api", (req,res) => {
    res.json({
        message: "Welcome to API",
        description: "iewu viudhv ius iusdio fjweg weug iowejg owue goiweu gwueoi vsd iurewg hjkldsj g9posid o sojuidigosdj"
    });
});


//  Protected route
app.post("/api/posts", verifyTokenFn, (req,res) => {
    jwt.verify(req.token , 'secretkeyhere', (error, authData) => {
        if (error) {
            res.send(error);
            res.sendStatus(403);
        } else {
            res.json({
                message: "Post created",
                description: "You have successfully created the post.. Congratulations",
                authData: authData
            });
        }
    });
});

// Enter credentials to generate the token
app.post("/api/login", (req,res) => {
    var userLgnCred = {
        userId: req.body.userId,
        username: req.body.userEmail
    };

    jwt.sign({userLgnCred}, 'secretkeyhere', (error, token) => {
        if (error) {
            res.sendStatus(403);
        }
        res.json({
            token
        });
    });
});


// Token format
// key: Authorization
// value: Bearer <access_token>
// Authorization : Bearer <access_token>


// verifyToken ..  Middleware function
function verifyTokenFn(req, res, next) {
    var bearer = "";
    const bearerHeader = req.headers["authorization"];
    console.log(" --beaderHeader --> " + bearerHeader);
    if (bearerHeader != "undefined" || bearerHeader != "") {
        bearer = bearerHeader.split(" ");
    }    
    const bearerTkn = bearer[1];
    console.log(" -- bearer Tokne --> "+ bearerTkn);
    // Set the token in request
    req.token = bearerTkn;
    next();
}


const port = process.env.PORT || 2990;
app.listen(port, () => {
    console.log("-- App is runing on port --> ", port);
});