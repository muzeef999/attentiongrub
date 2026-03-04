import express from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 4000);


app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Gateway running on port ${PORT}`);
});