import app from './app.js';
import connectDB from './helpers/connectDB.js'

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
};

startServer().then(() => {
  console.log('Served')
}).catch((err) => {
  console.error(err);
})