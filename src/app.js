const express = require("express");
const app = express();
app.use(express.json());

const usersRouter = require("./users/users.router");
const pastesRouter = require("./pastes/pastes.router");

// TODO: Follow instructions in the checkpoint to implement ths API.
const pastes = require("./data/pastes-data");

app.use("/users", usersRouter);
app.use("/pastes", pastesRouter); // Note: app.use

// Not found handler
app.use((req, res, next) => {
  next(`Not found: ${req.originalUrl}`);
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
