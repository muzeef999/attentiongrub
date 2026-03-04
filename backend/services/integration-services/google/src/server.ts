import express from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 5002);


app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Google service running on port ${PORT}`);
});