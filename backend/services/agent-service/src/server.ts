import express from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 4001);


app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Agent service running on port ${PORT}`);
});