

var count=0;

function addRows(){
    let node=document.createElement('div');
    let textnode=document.createTextNode('box'+count);
    node.className='box';
    let table=document.getElementById('table');
    document.getElementById('table').style.marginLeft='250px';

    node.appendChild(textnode);
    table.appendChild(node);
    count++;

}

function removeRows(){
    let table=document.getElementById('table');
    table.removeChild(table.children[0]);
    console.log(table.children);
    document.getElementById('table').style.marginLeft='0px';
    // count--;
}