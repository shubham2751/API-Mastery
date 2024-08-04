import express from "express";

const app = express();

// Routes

app.get("/", (req, res, next) => {
  res.json({
    message: "EBook APIS",
  });
});

export default app;
