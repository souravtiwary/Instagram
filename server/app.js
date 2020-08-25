const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 5000;

const { MONGOURL } = require("./keys");

// this will connect to mongo db using the link in MONGOURL
mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});
mongoose.connection.on("error", () => {
  console.log("err to mongo ");
});

require("./models/user");
require("./models/post");

app.use(express.json());
//register our auth
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

app.listen(PORT, () => {
  console.log("Server is started");
});

// //3sDFkPQUqfSAgTH

// //this middle is executed before the  / request is made to the server
// const customMiddleWare = (req, res, next) =>{
//     console.log("middleware executed")
//     next() //without this the program will not move further
// }

// //app.use(customMiddleWare) // to start using the middleware
//                           // but this will run for all .get request

// app.get('/', (req, res) => {
//     res.send("Hello world!!")
// })

// // only add middleware to this part
// app.get('/about', customMiddleWare,(req, res) => {
//     console.log("about")
//     res.send("This is about")
// })

// app.listen(PORT, () => {
//     console.log("Server is responding", PORT)
// })
