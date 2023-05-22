require("dotenv").config();
const connectDB = require("./config/dbConnection");
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/crops", require("./routes/farmFolioRoutes"));

app.listen(port, () => console.log("listening on port " + port));
