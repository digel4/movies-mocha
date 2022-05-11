const express = require ("express");
const app = express();


app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.send(index)
});

app.listen(process.env.PORT, process.env.IP);
// if (process.env.port && process.env.ip) {
//     app.listen(process.env.PORT, process.env.IP);
// } else {
//     app.listen(3000, () => {
//         console.log("server listening on port 3000");
//     });
// }
