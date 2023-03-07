import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import rateLimit from 'express-rate-limit';
import bodyParser from 'body-parser';
import albumRoutes from './routes/album.js';
import artistRoutes from './routes/artist.js';
import musicRoutes from './routes/music.js'
import generRoutes from './routes/gener.js';
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import * as dotenv from 'dotenv' 

const app = express();

// Middlewares
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use('/uploads', express.static('uploads'));

//registering cors
app.use(cors({ origin: '*' }));
//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// configire morgan
app.use(morgan("dev"));


const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/', limiter);

// Routes
app.get("/", (req, res) => { res.json("Start APIs on working") }); // define first route
app.use("/album", albumRoutes)
app.use("/music", musicRoutes)
app.use("/gener", generRoutes)
app.use("/artist", artistRoutes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = {
    name: "NotFound",
    message: req.originalUrl + " Routing Not Found"
  };
  res.status(404).json(err);
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;