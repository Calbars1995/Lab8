//Creating the object
let student = {
    name: "Chris",
    age: 30,
    enrolled: true,
    courses: ["JavaScript" , "WebProgramming" , "DatabaseDesign" , "Algorithms", "OS"],
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

//What I noticed
console.log("\nWhat I noticed:")
console.log("I noticed that JSON can't display in the log as simple as normal JS Object, need to convert first.");
console.log("The JSON converted to JS Object displayed the same as before it was converted.");

//Destructuring
console.log("\nDestructuring:");
let [nameDestruct] = student.name;
let [first, second, third, fourth, fifth] = student.courses;

//Scores Array
let scores = [85, 92, 78, 90, 65, 39, 98];
let [score1, score2] = scores;
console.log(`The First two Scores are: ${score1}, ${score2}`); //displaying scores

//Spread Operator
console.log("\nSpread Operator:");
let clonedStudent = { ...student, graduationYear: 2026 }; //cloning and adding in one line
console.log(`Graduation: ${clonedStudent.graduationYear}`);

//new courses
console.log("\nNew Courses being added:");
let newCourses = ["Math" , "English" , "History"];
let mergedCourses = [ ...student.courses, ...newCourses];
console.log(`Merged courses are: ${mergedCourses}`);

//Object Methods
console.log("\nObject Methods");
student.addCourse = function() {
    student.courses.push("New_Course");
}
console.log("adding a new course, displaying list of courses:");
student.addCourse();
console.log(student.courses);

//Counting courses
console.log("\nCounting courses:");
student.countCourses = function() {
    return this.courses.length;
}
let courseCount = student.countCourses();
console.log(`There are ${courseCount} courses in ${student.name}'s enrollment`);

//Done project
console.log("Done the main part of the lab");