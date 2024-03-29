const express = require('express');
const PORT = process.env.PORT || 4000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/db");
const app = express();

//configure database and mongoose
mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });


//registering cors
app.use(cors());

//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configure body-parser ends here
app.use(morgan("dev")); // configire morgan


app.use('/uploads', express.static('uploads'));

// define first route
app.get("/", (req, res) => {
  res.json("Start APIs on working");
});


// album URI routes
const albumRoutes = require("./api/routes/album"); 
app.use("/album", albumRoutes)
// music URI routes
const musicRoutes = require("./api/routes/music"); 
app.use("/music", musicRoutes)
// gener URI routes
const generRoutes = require("./api/routes/gener"); 
app.use("/gener", generRoutes)
// artist URI routes
const artistRoutes = require("./api/routes/artist"); 
app.use("/artist", artistRoutes)


//API listen PORT (4000)
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});