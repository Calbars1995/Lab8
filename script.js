let student = {
    name: "Chris",
    age: 30,
    enrolled: true,
    courses: ["JavaScript" , "WebProgramming" , "DatabaseDesign" , "Algorithms", ],
    studentInfo: function(){
        console.log(`${student.name} is ${student.age} years old.`)
    }
}
student.studentInfo(); //just a test