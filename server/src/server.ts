import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Welcome to the I Hand U API!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
