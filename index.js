import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import ReviewController from './src/controllers/reviews.controller.js';
import EmployeeController from './src/controllers/employee.controller.js';
import UserController from './src/controllers/user.controller.js';
import session from 'express-session';
import { auth } from './src/middlewares/auth.middleware.js';
import path from 'path';
import { uploadFile } from './src/middlewares/fileupload.middleware.js';

const app = express();

app.use(session({
   secret:'SecretKey',
   resave: false,
   saveUninitialized: true,
   cookie:{secure:false},
 }));

app.use(express.static("public"));
app.set("view engine", 'ejs');
app.set("views", path.join(path.resolve(),'src','views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static("src/views"));
app.use(expressEjsLayouts);
// creating an instaance for  review controller 

const reviewController = new ReviewController();
const employeeController = new EmployeeController();
const usersController = new UserController();

app.get('/register', usersController.getRegister);
app.get('/login', usersController.getLogin);
app.post('/login', usersController.postLogin);
app.get('/logout', usersController.logout);
app.post(
  '/register',
  usersController.postRegister
);

 app.get
    (
        '/', 
        auth,
       reviewController.getReviews
    );
 app.get
    (
        '/new', 
         auth,
        reviewController.getAddForm
    );
 app.post
    (
        '/',
        auth,
      // adding validation middleware before the controller function
       uploadFile.single('photo'),
      // validationMiddleware, 
       reviewController.postNewReviews
    );
 app.get
    (
       '/update-review/:id', 
        auth,
        reviewController.getUpdateReview
        
    );
 app.post
    (
         "/update-review/", 
          auth,
         uploadFile.single('photo'),
         reviewController.postUpdateReview
     );

    
 app.get(
        "/delete-review/:id", 
         auth,
         reviewController.deleteReview
      );

 app.get(
      "/employee/:id",
       auth, 
      employeeController.getEmployeeReview
   );


 app.listen(7000);
 console.log("EVR app is running on port 7000")