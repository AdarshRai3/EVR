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
    postNewReviews(req,res,next){
        console.log(req.body)
       let  reviews = ReviewModel.get()
       ReviewModel.add(req.body)
       res.render("reviews",{reviews:reviews})
    }
 

}