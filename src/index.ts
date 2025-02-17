import express from "express";

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("let's not fall in love");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
