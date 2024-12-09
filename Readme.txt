Academic Standing Evaluation - Instructions
Project Setup
Clone the Repository:

Clone this repository to your local machine using the following command:
bash
Copy code
git clone https://github.com/your-repository-name
Navigate to the Project Folder:

After cloning, navigate to the project directory:
bash
Copy code
cd your-repository-name
Install Dependencies:

Install the necessary dependencies to run the project:
bash
Copy code
npm install
How to Use the evaluateAcademicStanding Function
Function Signature:
javascript
Copy code
evaluateAcademicStanding(GPA, major)
Arguments:
GPA: A number representing the student's GPA (Grade Point Average).
major: A string representing the student's major (e.g., 'Computer Science', 'Engineering', 'Business').
Output:
The function will return one of the following academic standings:

"Good"
"Average"
"Probation"
It will also log personalized advice to the console, based on the student's GPA and major.

Example Usage:
To manually test the function, change the values inside the evaluateAcademicStanding function call as shown below in the code:

javascript
Copy code
evaluateAcademicStanding(3.2, 'Engineering');
Expected Output:
Standing: "Good"
Advice:
"Your academic standing is good. Focus on your core engineering courses."
If GPA is greater than or equal to 3.5, the advice will also include eligibility for honors program consideration.
How to Test Manually:
Change Values for Different Test Cases:
You can modify the values inside the evaluateAcademicStanding(GPA, major) call to simulate different scenarios, such as:
High GPA: evaluateAcademicStanding(3.8, 'Computer Science')
Average GPA: evaluateAcademicStanding(2.5, 'Engineering')
Low GPA: evaluateAcademicStanding(1.9, 'Business')
Run the Function:
Once you've changed the values, save the file and run it with the following command:
bash
Copy code
node evaluateAcademicStanding.js
This will output the academic standing and provide the corresponding advice based on the student's GPA and major.