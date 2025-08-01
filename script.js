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
console.log("Creating Object:"); //making easier to read

//Displaying the object's properties, and calling the method
console.log(`The student's name is: ${student.name}, they are ${student.age} years old.`)
student.studentInfo();

//JSON time
console.log("\nJSON:"); //again, making easier to read
let studentJSON = JSON.stringify(student);
console.log(studentJSON);

//Back to JavaScript Object
console.log("\nComing back to JavaScript Object:"); //easier to read
let studentUnJSON = JSON.parse(studentJSON);
console.log(`Name: ${studentUnJSON.name}, Age: ${studentUnJSON.age}, Enrolled: ${studentUnJSON.enrolled}` +
    `\nCourses: ${studentUnJSON.courses}.`
)
//studentUnJSON.studentInfo(); doesnt seemt to work, so maybe JSON can't contain methods, googled and no it cant