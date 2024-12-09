// evaluateAcademicStanding.js

// Function to determine academic standing based on GPA and provide advice based on major
function evaluateAcademicStanding(GPA, major) {
    let academicStanding;

    // Determine academic standing based on GPA
    if (GPA > 3) {
        academicStanding = "Good";
    } else if (GPA > 2 && GPA <= 3) {
        academicStanding = "Average";
    } else if (GPA <= 2) {
        academicStanding = "Probation";
    }

    // Output advice based on academic standing and major
    if (academicStanding === "Good") {
        // Switch-case based on major
        switch (major) {
            case "Computer Science":
                console.log("Your academic standing is good. Consider taking advanced courses in algorithms and data structures.");
                break;
            case "Engineering":
                console.log("Your academic standing is good. Focus on your core engineering courses.");
                break;
            case "Business":
                console.log("Your academic standing is good. Explore internship opportunities in the business field.");
                break;
            default:
                console.log("Your academic standing is good. Plan your course schedule accordingly.");
        }
        // Check GPA for honors consideration
        if (GPA >= 3.5) {
            console.log("With your GPA, you may be eligible for honors program consideration.");
        }
    } else if (academicStanding === "Average") {
        // Switch-case based on major
        switch (major) {
            case "Computer Science":
                console.log("Your academic standing is average. Consider seeking help from tutors for challenging courses.");
                break;
            case "Engineering":
                console.log("Your academic standing is average. Attend review sessions for difficult subjects.");
                break;
            case "Business":
                console.log("Your academic standing is average. Focus on improving your grades in core business courses.");
                break;
            default:
                console.log("Your academic standing is average. Review your study habits and seek academic advising if needed.");
        }
    } else if (academicStanding === "Probation") {
        console.log("Your academic standing is below average. It's important to prioritize improving your grades and seeking academic support.");
    }

    return academicStanding;
}

evaluateAcademicStanding(3.2, "Engineering");


module.exports = evaluateAcademicStanding;
