export default class ReviewModel{
    constructor(id,name,goalsSet,goalsAch,rating,feedback){
        this. id = id;
        this. name = name;
        this. goalsSet = goalsSet;
        this. goalsAch = goalsAch;
        this. rating = rating;
        this. feedback = feedback;
    }
    static get (){
        return reviews;
    }
    static add (reviewObj){
        let newReviews = new ReviewModel(
        reviews.length + 1,
        reviewObj.name,
        reviewObj.goalsSet,
        reviewObj.goalsAch,
        reviewObj.rating,
        reviewObj.feedback
        );
      reviews.push (newReviews)
    }

}

var reviews = [

    new ReviewModel(
         1,
         "Adarsh Rai",
          10,
          8,
          4.7,
          "Excellent,keep it up"
    )
]
