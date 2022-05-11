const express = require ("express");
const app = express();


// router.get("/hello", (req, res) => {
//     res.send("hello");
// });
app.use(express.static('public')); 
app.get('/', (req, res) => {
    res.send(index)
});


app.listen(3000, () => {
 	console.log("server listening on port 3000");
 });

// app.listen(process.env.PORT, process.env.IP);