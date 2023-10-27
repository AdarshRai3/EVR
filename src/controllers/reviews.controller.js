import ReviewModel from '../models/reviews.model.js'

export default class ReviewController{
          
    getReviews(req,res){
        let reviews = ReviewModel.get()
        console.log(reviews)

        res.render('reviews',{reviews : reviews})

    }
}