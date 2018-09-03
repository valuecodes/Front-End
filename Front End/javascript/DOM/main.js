// Examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText='Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Hello</h3>'
// headerTitle.style.borderBottom='solid 3px #000';

// // GETELEMENTSBYCLASSNAME
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="hello 2";
// items[1].style.fontWeight='bold';
// items[2].style.backgroundColor='yellow';


// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor="#f4f4f4"
// }

// // GETELEMENTSBYTAGNAME

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].style.textContent="hello 2";
// li[1].style.fontWeight='bold';
// li[2].style.backgroundColor='yellow';


// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor="#f4f4f4"
// }

// // QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input = document.querySelector('input');
// input.value ='hello world';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";


// QUERYSELECTORALL
// var titles =document.querySelectorAll('.title');

// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="#f4f4f4";
// }

// ----------------------------------------------------------------------------------------------------------------------

// // TRAVERSING THE DOM

// var itemList=document.querySelector('#items');
// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);

// // parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// // childNodes
// console.log(itemList.childNodes);

// // Use this
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// // FirstChild
// console.log(itemList.firstChild);

// // Use this
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello1';

// CREATE ELEMENT-------------------------------------------------------------------------------------

// var newDiv = document.createElement('div');

// // Add class
// newDiv.className='hello';

// // Add id
// newDiv.id='hello1';

// // Add attr
// newDiv.setAttribute('title','hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container=document.getElementById('main-header');

// container.appendChild(newDiv);
// console.log(container);



