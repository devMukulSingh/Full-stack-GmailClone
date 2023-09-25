import dotenv from "dotenv";
import express from "express";
import db from "./db/db.js";
import routes from "./route/route.js";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json({ extended:true }));
app.use("/",routes); 

app.use(express.static(path.join(__dirname,"./client/build")));


app.get("*", function( _, res) {
    res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
        res.status(500).send(err);
    })
})

const PORT = process.env.PORT || 8000;
db();

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
