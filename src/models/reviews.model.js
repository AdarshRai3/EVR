
export default class ReviewModel {
    constructor(id, name, department, position, performanceGoals, taskCompletion, skillsAndCompetencies, attendance, feedback, trainingAndDevelopment, overallRating,photo) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.position = position;
        this.performanceGoals = performanceGoals;
        this.taskCompletion = taskCompletion;
        this.skillsAndCompetencies = skillsAndCompetencies;
        this.attendance = attendance;
        this.feedback = feedback;
        this.trainingAndDevelopment = trainingAndDevelopment;
        this.overallRating = overallRating;
        this.photo = photo;
    }

    static get() {
        return reviews;
    }

    static add(reviewObj) {
        let newReview = new ReviewModel(
            reviews.length + 1,
            reviewObj.name,
            reviewObj.department,
            reviewObj.position,
            reviewObj.performanceGoals,
            reviewObj.taskCompletion,
            reviewObj.skillsAndCompetencies,
            reviewObj.attendance,
            reviewObj.feedback,
            reviewObj.trainingAndDevelopment,
            reviewObj.overallRating,
            reviewObj.photo
        );
        reviews.push(newReview);
    }
     // function to fetch the product by its id and change data 
    static getById(id) {
        return reviews.find((r) => r.id == id);
    }
   
   // function to update the data and put back in the list
   static update(reviewObj) {
     const index = reviews.findIndex(
      (r) => r.id == reviewObj.id
     );
     reviews[index] = reviewObj;
   }
   static delete(id){
    const index = reviews.findIndex(
      (r) => r.id == id
    );
    reviews.splice(index,1);
   }
}

var reviews = [
    new ReviewModel(
        1,
        "John Doe",
        "Sales",
        "Sales Manager",
        "Increase sales by 10%",
        "Completed 8 out of 10 tasks",
        "Excellent communication skills, good team player",
        "Absent 2 days in the last month",
        "Positive feedback from team members",
        "Completed leadership training",
        4.2
    )
]
