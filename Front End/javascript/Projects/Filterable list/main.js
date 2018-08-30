// Get input element
let filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  // Get value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();

  // Get names ul
  let ul = document.getElementById('names');
  // Get lis from ul
  let li = ul.querySelectorAll('li.collection-item');
  let head = ul.querySelectorAll('li.collection-header');

  // Loop through collection-item lis
  for(let i = 0;i < li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
    // If matched
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }

  // Loop through collection-headers lis
  for(let i = 0;i < head.length;i++){
    let b = head[i].getElementsByTagName('h5')[0];
    
    if(document.getElementById('filterInput').value == "") //Checking if form is empty
    {
      head[i].style.display = '';
    }
    // If matched
    else if(b.innerHTML.toUpperCase().indexOf(filterValue[0]) > -1){
      head[i].style.display = '';
      


    }else {
      head[i].style.display = 'none';
    }
  }

}





