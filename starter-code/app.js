// nodemon app.js

const myExpress = require("express");
const hbs = require("hbs");
const PORT = 3000;
//here we are creating application
const app = myExpress();
//import students data in app.js so we can use it in the routes
const theData = require("./students-data");


//connect "public/" folder to our express app
// makes everything inside public folder accessible to the rest of the app
app.use(myExpress.static("public"))
//////////////////////////////
// Routes
//////////////////////////
//'/' means localhost:3000
// | callback function
app.get('/', (req, res, next)=>{res.send("hello world")});

//localhost:3000/cool                    we dont have to put the full path here
app.get('/cool', (req, res, next) => res.render("cool-page.hbs"))

//localhost:3000/homepage                               //this is the file to be displayed to users
app.get('/homepage', (req, res, next) => res.sendFile(__dirname + "/views/home.html"));
app.get('/about', (req, res, next) => res.sendFile(__dirname + "/views/about.html"));

app.get('/students', (req, res, next) => {
    const names = theData.map(student => student.name);
    res.render("students-list.hbs", {allStudentsNames: names});
    res.render("students-list.hbs", {theData});

    //"render()" sends the template file as a response
    //(it already knows to look inside "views/")
//////////////////////////////// allStudentss is the variable i will use
// res.render("students-list.hbs", {allStudents: theData});
// res.render("students(if it was in a folder)/students-list.hbs", {allStudents: theData});
})

app.listen(PORT, () => console.log("on port 3000!!"));

