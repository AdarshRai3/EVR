import ReviewModel from '../models/reviews.model.js'
import EmployeeModel from '../models/employee.model.js'

export default class EmployeeController{

    getEmployeeReview(req,res){
        const id = req.params.id;
        let reviews = ReviewModel.get()
        const reviewFound = ReviewModel.getById(id);
        // filter by id
        console.log(id)
        reviews = reviews.filter((review)=>review.id == id)
        console.log(reviews)
       

      if (reviewFound) {
        return res.render('employee', {
        review: reviewFound,
        reviews:reviews,
        errorMessage: null,
        layout: false 
      });
    } 
        
     else {
        res.status(401).send('Project not found');
      }
    }

 }   
