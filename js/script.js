/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// variables that store DOM elements that are used throughout the script
const studentsArray = document.querySelectorAll('.student-item');
let totalStudents = studentsArray.length;
const pagesNeeded = Math.ceil(studentsArray.length/10);
const pageRange = getPageRange();

// append pages and display only first page
window.addEventListener('load', ()=>
{
  appendPages();

  if (totalStudents >= 10)
  {
      hideStudents(0,9);
  }

  else if ( (totalStudents > 0) && (totalStudents < 10) )
  {
      hideStudents(0, totalStudents);
  }

  else
  {
    alert("There are no students");
  }
});

// hides students before studentMin and after studentMax
const hideStudents = (studentMin, studentMax) =>
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

// creates and appends pages as pagination links
const appendPages = () =>
{
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

    addFunctionailityToPages();
}

// adds functionality to the pagination buttons so that they show and hide the correct items
const addFunctionailityToPages = () =>
{
    const studentPages = document.querySelectorAll('.pagination ul li a');

    for (let x = 0; x < studentPages.length; x++)
    {
        studentPages[x].addEventListener('click', () =>
        {
            // removes 'active' class from all pages,
            for (let y = 0; y < studentPages.length; y++)
            {
                studentPages[y].classList.remove('active');
            }

            // adds 'active' class to clicked page,
            // and calls the hideStudents() function
            studentPages[x].classList.add('active');

            const studentMin = pageRange[x][0];
            const studentMax = pageRange[x][1];

            hideStudents(studentMin,studentMax);
        });
     }
}

// returns an array of page ranges
function getPageRange()
{
  // creates array of tuple arrays
  const pageRangeArray = [];
  for (let x = 0; x < pagesNeeded; x++)
  {
    const tupleArray = [];
    tupleArray.length = 2;
    pageRangeArray.push(tupleArray);
  }

  // fills the array
  let firstRange;
  let secondRange;

  for (let x = 0; x < pageRangeArray.length; x++)
  {
      // first range
      if (x === 0) // page = 1
      {
        firstRange = 0;
      }

      else
      {
        let previousYPlusOne = pageRangeArray[x-1][1] + 1;
        firstRange = previousYPlusOne;
      }

      pageRangeArray[x][0] = firstRange;

      // second range
      if ((totalStudents - secondRange) < 10 )
      {
          secondRange = totalStudents;
      }

      else
      {
          let previousXPlusNine = pageRangeArray[x][0] + 9;
          secondRange = previousXPlusNine;
      }

      pageRangeArray[x][1] = secondRange;
  }
    return pageRangeArray;
}
