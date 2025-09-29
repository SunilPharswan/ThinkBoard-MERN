import express from "express";
import notesRoutes from "./routes/notesRoute.js";

const app = express();

app.use("/api/notes",notesRoutes);

app.listen(5001,()=>{
    console.log("Server Started on PORT: 5001")
});