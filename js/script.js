/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//temporary for loop, adds index numbers to the students' names
const h3s = document.querySelectorAll('.student-item h3');

for (let x = 0; x < h3s.length;  x++)
{
  const studentName = h3s[x].innerHTML + ' [' + parseInt(x) +']';
  h3s[x].innerHTML = studentName;
}

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentsArray = document.querySelectorAll('.student-item');

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
// hides student before studentMin and after studentMax
const hideStudents = (studentMin, studentMax, pageNumber) =>
{
    hideStudentsHelper(0, studentsArray.length, "block"); // unhides entire array
    hideStudentsHelper(0, studentMin, "none");
    hideStudentsHelper(studentMax + 1, studentsArray.length, "none");
}

const hideStudentsHelper = (param1, param2, action) =>
{
    for (let x = param1; x < param2;  x++)
    {
        studentsArray[x].style.display = action;
    }
}

 // hideStudents(10,15,100);
 // hideStudents(10,21,100);

// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
