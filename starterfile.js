function evaluateAcademicStanding(GPA, major) {
    
//**************DO NO WRITE ABOVE THIS LINE********************

// 1. Inside the function, declare a variable called academicStanding.

// 2. Use conditional statements to determine the academic standing based on the GPA:
// - If GPA is greater than 3, set academicStanding to "Good".
// - If GPA is between 2 and 3, set academicStanding to "Average".
// - If GPA is less than or equal to 2, set academicStanding to "Probation".

// 3. Based on the academicStanding:
// - If academicStanding is "Good", use a switch statement to provide advice based on the major:
//   - For "Computer Science", suggest taking advanced courses.
//   - For "Engineering", suggest focusing on core courses.
//   - For "Business", suggest exploring internship opportunities.
//   - For any other major, suggest planning the course schedule accordingly.
//   - Additionally, if GPA is greater than or equal to 3.5, suggest eligibility for honors program consideration.

// - If academicStanding is "Average", use a switch statement to provide advice based on the major:
//   - For "Computer Science", suggest seeking help from tutors.
//   - For "Engineering", suggest attending review sessions.
//   - For "Business", suggest focusing on improving grades in core courses.
//   - For any other major, suggest reviewing study habits and seeking academic advising if needed.

// - If academicStanding is "Probation", suggest prioritizing grade improvement and seeking academic support.


//**************DO NO WRITE BELOW THIS LINE********************

    return academicStanding; 
}

//Change values within the bracket below to check different cases for your code
evaluateAcademicStanding(3.2, "Engineering"); //evaluateAcademicStanding(GPA, "major");

module.exports = evaluateAcademicStanding;
