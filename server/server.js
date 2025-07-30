import cors from "cors";
import express from "express";
import router from "./routes/routes.js";
import DBconnection from "./database/database.js";

const app = express();
app.use(cors());
DBconnection();

app.use("/", router);
// app.use("/auth", router);
// app.use("/problems", router)

app.listen(5001, () => {
	console.log("Server is running on port 5001");
});
