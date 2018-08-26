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

// Creates and appends pages as pagination links
function appendPages()
{
    const pagesNeeded = Math.ceil(studentsArray.length/10);

    if (pagesNeeded < 1)
    {
      alert('No list of students was passed to paginationLinks()');
      return;
    }

    let studentPages =  `
    <div class="pagination">
      <ul>
        <li>
          <a class="active" href="#">1</a>
        </li>
        `;

      for (let x = 2 ; x <= pagesNeeded ; x++)
      {
        studentPages +=  `
        <li>
          <a href="#">${x}</a>
        </li>
        `;
      }
     studentPages +=  `
      </ul>
    </div>
    `;

    let newDivChild = document.createElement('div');
    newDivChild.innerHTML = studentPages;
    const pageDiv = document.querySelector('.page');
    pageDiv.appendChild(newDivChild);
}

// temporary function calls

hideStudents(10,15,100);
appendPages();

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
