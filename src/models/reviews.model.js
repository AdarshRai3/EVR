export default class ReviewModel{
    constructor(id,name,goalsSet,goalsAch,rating,feedback){
        this. id = id
        this. name = name
        this. goalsSet = goalsSet
        this. goalsAch = goalsAch
        this. rating = rating
        this. feedback = feedback
    }
    static get (){
        return reviews;
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
