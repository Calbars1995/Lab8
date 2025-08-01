//Creating the object
let student = {
    name: "Chris",
    age: 30,
    enrolled: true,
    courses: ["JavaScript" , "WebProgramming" , "DatabaseDesign" , "Algorithms", ],
    studentInfo: function(){
        console.log(`${student.name} is ${student.age} years old. They are enrolled?: ${student.enrolled}.` +
        `\nAnd they are attending courses: ${student.courses}`);
    }
}
//Displaying the object's properties, and calling the method
console.log(`The student's name is: ${student.name}, they are ${student.age} years old.`)
student.studentInfo();

//JSON time
let studentJSON = JSON.stringify(student);
console.log(studentJSON);