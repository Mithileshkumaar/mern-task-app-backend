const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/taskModule");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoute");
const router = require("./routes/taskRoute");


const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: ["http://localhost:3000/", "http://mern-task-app.onrender.com"] }))

// const logger = (req, res) => {
//       console.log("middleware ran");
//       console.log(req.method);

// }

// app.use(cors());
app.use(taskRoutes);

// app.get("/", (req, res) => {
//       res.send("home page");
// });


//routes
router.get("/", (req, res) => {
      res.send("home page");
});



connectDB();
const PORT = process.env.PORT || 4000;

mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
            app.listen(PORT, () => {
                  console.log(`server running on port ${PORT}`);
            });
      })
      .catch((err) => {
            console.log(err);
      });





//mongodb+srv://mithileshkumaar2015:<password>@cluster0.lfigysj.mongodb.net/?retryWrites=true&w=majority