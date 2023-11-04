import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import ReviewController from './src/controllers/reviews.controller.js';
import path from 'path';

const app = express();

app.use(express.static("public"));
app.set("view engine", 'ejs');
app.set("views", path.join(path.resolve(),'src','views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static("src/views"));
app.use(expressEjsLayouts);
// creating an instaance for  review controller 

const reviewController = new ReviewController();

 app.get
    (
        '/', 
       reviewController.getReviews
    );
 app.get
    (
        '/new', 
        reviewController.getAddForm
    );
 app.post
    (
        '/',
      // adding validation middleware before the controller function
      // validationMiddleware, 
        reviewController.postNewReviews
    );
 app.get
    (
       '/update-review/:id', 
        reviewController.getUpdateReview
        
    );
 app.post("/update-review/", reviewController.postUpdateReview);

    
 app.get("/delete-review/:id", reviewController.deleteReview);



 app.listen(7000);
 console.log("EVR app is running on port 7000")