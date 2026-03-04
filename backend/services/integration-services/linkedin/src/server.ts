import express from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 5003);


app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ LinkedIn service running on port ${PORT}`);
});