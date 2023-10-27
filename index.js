import express from 'express';
import ReviewController from './src/controllers/reviews.controller.js';
import path from 'path';

const app = express();

app.set("view engine", 'ejs');
app.set("views", path.join(path.resolve(),'src','views'));
// creating an instaance for  review controller 

const reviewController = new ReviewController();

app.use(express.static('src/views'));
app.get('/', reviewController.getReviews);


app.listen(7000);
console.log("EVR app is running on port 7000")