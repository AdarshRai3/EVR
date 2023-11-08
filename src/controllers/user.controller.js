import UserModel from '../models/user.model.js';
import ReviewModel from '../models/reviews.model.js';

export default class UserController {
    getRegister(req, res) {
      res.render('register');
    }
  
    getLogin(req, res) {
      res.render('login', { errorMessage: null });
    }
  
    postRegister(req, res) {
      const { name, email, password } = req.body;
      UserModel.add(name, email, password);
      res.render('login', { errorMessage: null });
    }
  
    postLogin(req, res) {
      const { email, password ,key} = req.body;
      const user = UserModel.isValidUser(
        email,
        password,
      );
      if (!user && !(key== "employee" || key == "boss")) {
        return res.render('login', {
          errorMessage: 'Invalid Credentials',
        });
      }
      else{
        req.session.userEmail=email;
        var reviews = ReviewModel.get();
        if(key == "boss")
        {
            res.render('reviews', { reviews, userEmail: req.session.userEmail });
        }
        else{
            res.render('employee', { reviews, userEmail: req.session.userEmail,layout:false });
        }
       
      }
    
    }
  
    logout(req, res){
      // on logout, destroy the session
      req.session.destroy((err)=>{
        if(err){
          console.log(err);
        } 
        else{
          res.redirect('/login');
        }
      });
    }
  }