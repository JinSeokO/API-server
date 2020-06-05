import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("sended");
});
app.listen(4000, () => console.log("start"));

function f() {
  console.log("tt");
  const b = 4;
  const a = b
    ? {
        c: "c",
      }
    : {};
  console.log(a);
}

f();
