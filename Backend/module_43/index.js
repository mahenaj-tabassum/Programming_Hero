import express from "express";

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Define a route to handle GET requests to the root path
// Works as an API endpoint
app.get("/", (req, res) => {
  res.send("Hello world from express");
});

app.get("/about", (req, res)=>{
  res.send("This is about page")
})
app.get("/dashboard", (req,res)=>{
  res.send("Dashboard")
})

app.get("/contact", (req, res)=>{
  res.send("Contact")
})

// Start the HTTP server on the specified port
// Express creates an HTTP server and puts it into a listening state
app.listen(PORT, () => {
  console.log(`Express app is running on port: http://localhost:${PORT}`);
});
