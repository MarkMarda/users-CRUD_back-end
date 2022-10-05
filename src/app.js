const express = require("express");

const app = express();

const usersRouter = require("./users/users.router");

app.use(express.json());

app.use("/", usersRouter);

app.get("/", (req, res) => {
  res.status(200).json({message: "Server is OK"});
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});