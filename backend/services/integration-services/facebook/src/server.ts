import express from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 5001);


app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Facebook service running on port ${PORT}`);
});