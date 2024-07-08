// const http = require("http");

// // Define the server
// const server = http.createServer((req, res) => {
//   // Set the response status code
//   res.statusCode = 200;

//   // Set the response content type
//   res.setHeader("Content-Type", "application/json");

//   // Set the response body
//   const responseBody = {
//     message: "Hello, World!",
//     timestamp: new Date().toISOString(),
//   };

//   // Send the response
//   res.end(JSON.stringify(responseBody));
// });

// // Start the server on port 3000
// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
