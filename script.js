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

//Comparing
console.log("\nComparing Time:");
console.log(`JS Name: ${student.name}. JSON Name: ${studentJSON.name}. UnJSON Name: ${studentUnJSON.name}.`);
console.log(`JS Age: ${student.age}. JSON Age: ${studentJSON.age}. UnJSON Age: ${studentUnJSON.age}.`);
console.log(`JS Enrolled: ${student.enrolled}. JSON Enrolled: ${studentJSON.enrolled}. UnJSON Enrolled: ${studentUnJSON.enrolled}.`);
console.log(`JS Courses: ${student.courses}.`);
console.log(`JSON Courses: ${studentJSON.courses}.`);
console.log(`UnJSON Courses: ${studentUnJSON.courses}.`);
console.log("I noticed that JSON can't display in the log as simple as normal JS Object, need to convert first.");
console.log("The JSON converted to JS Object displayed the same as before it was converted.");