import express from 'express';

const app = express();
app.get("/", (req, res) => { res.send("sended");})
app.listen(4000, () => console.log("start"));