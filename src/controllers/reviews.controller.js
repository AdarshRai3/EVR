import ReviewModel from '../models/reviews.model.js'

export default class ReviewController{
          
    getReviews(req,res){
        let reviews = ReviewModel.get()
        console.log(reviews)
        res.render('reviews',{reviews : reviews})
    }
    getAddForm(req,res){
       return res.render('new-reviews', {
         errorMessage:null
       });
    }
    postNewReviews(req,res){
        console.log(req.body)
       let  reviews = ReviewModel.get()
       ReviewModel.add(req.body)
       res.render("reviews",{reviews:reviews})
    }
    getUpdateReview(req,res){
        const id = req.params.id;
        const reviewFound = ReviewModel.getById(id);
        if (reviewFound) {
          res.render('update-review', {
            review: reviewFound,
            id:id,
            errorMessage: null
          });
        }
        // 2. else return errors.
        else {
          res.status(401).send('Review not found');
        }

    }
    postUpdateReview(req, res) {
        ReviewModel.update(req.body);
        var reviews = ReviewModel.get();
        res.render('reviews', { reviews });
    }
    // method to delete the project in the list
    deleteReview(req, res){
        const id = req.params.id;
        const reviewFound = ReviewModel.getById(id);
          if (!reviewFound){
            return res.status(401).send('Project not found');
        }
        ReviewModel.delete(id);
        var reviews = ReviewModel.get();
        res.render('reviews', { reviews });
    }

}