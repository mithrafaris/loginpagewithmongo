const express = require("express");
const dotenv = require("dotenv"); //security.we will save all our securty files inside it
const morgan = require("morgan"); //in console log it will show what all request have gone
const bodyparser = require("body-parser"); //cerialize the data and access the data using body property
const app = express();
const path = require("path");
const cookieParser=require("cookie-parser");
const session=require("express-session");
// const session=require("express-session")
const connectDB=require('./server/database/connection')
dotenv.config({ path: "config.env" });
const port = process.env.PORT || 3001;
const route = require("./server/routes/router");
//Middleware
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:true}))
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600000 }
}));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
});


//log requests
app.use(morgan("tiny")); //morgon formate,token
//parse request to body-parser
//mongodb connection
connectDB()
app.use(bodyparser.urlencoded({ extended: true }));
//set view engin
app.set("view engine", "ejs");
//load public(static files)
app.use("/css", express.static(path.resolve(__dirname, "public/css"))); //css/style.css
app.use("/img", express.static(path.resolve(__dirname, "public/img"))); //img
app.use("/js", express.static(path.resolve(__dirname, "public/js"))); //
//load routers
app.use("/", route);
app.use("*",(req,res)=>{
  res.send("Page not found")
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  