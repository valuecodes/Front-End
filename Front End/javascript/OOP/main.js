//Constructor
function Company(name,sector,sectorname){
    this.name=name;
    this.sector=sector;
    this.sectorname=sectorname;
}

// Declaring array of 10 objects
var n=10;
var company= new Array();
for(var i=0;i<n;i++)
{
    company.push({})
}

// Company data
company[0]=new Company('Admicom',1,'Software',);
company[1]=new Company('Ahola Transport',6,'Logistics');
company[2]=new Company('BBS-Bioactive Bone Substitutes',3,'Biotech');
company[3]=new Company('Detection Technology',1,'Software');
company[4]=new Company('Efecte',2,'Technology');
company[5]=new Company('Elite Varainhoito',4,'Finance');
company[6]=new Company('Enersense',2,'Technology');
company[7]=new Company('FIT Biotech',3,'Biotech');
company[8]=new Company('Fondia',5,'Law');
company[9]=new Company('Gofore',1,'Software');


//Constructor
function Sectors(sectors,total){
    this.sectors=sectors;
    this.total=total;
}
// Declaring array of 4 objects
var n=4;
var sectors= new Array();
for(var i=0;i<n;i++)
{
    sectors.push({})
}

// Sector data
sectors[1]=new Sectors('Software',3);
sectors[2]=new Sectors('Technology',2);
sectors[3]=new Sectors('Biotech',2);
sectors[4]=new Sectors('Finance',1);
sectors[5]=new Sectors('Law',1);

for(i=0;i<sectors.length;i++)
{
    console.log(sectors[i].total);
    
}

// ------------------------------------
// let sectorp = document.getElementById('items');
// let sectorps = sectorp.querySelectorAll('h1.list-group-header');

// console.log(sectorps[2]);

for(i=1;i<6;i++)
{       
        // Display sector name
        var h = document.createElement("h1");        
        var th = document.createTextNode(sectors[i].sectors);
        h.className='list-group-header';               
        h.appendChild(th);
        items.appendChild(h);
        
        // Create ul for the companies
        var ul = document.createElement("ul");
        ul.className='companiesList';
        items.appendChild(ul);

        // Display companies
        for(b=0;b<company.length;b++){
            // Check if company sector is right
            if(company[b].sector == i){
                // Create new element
                var a = document.createElement("li");        
                var t = document.createTextNode(company[b].name);
                a.className='list-group-item';                  
                a.appendChild(t);                               
                ul.appendChild(a);
            }
             
        }
}


let filterInput = document.getElementById('filterInput');
console.log(1);
filterInput.addEventListener('keyup', filterNames);

// Filter

function filterNames(){
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    //Get all company names
    let items = document.getElementById('items');
    let li = items.querySelectorAll('li.list-group-item');


    // Get all sectors
    let sector = ul.querySelectorAll('ul.items');
    let sectors = items.querySelectorAll('h1.list-group-header');

    // Testing
    // let a = items.getElementsByTagName('li')[2];
    // li[1].style.display = 'none';
    
    // console.log(a);
    // console.log(sectors[1]);
    // li[1].style.display = 'none';

    // Loop through company name lis
    for(let i = 0;i < li.length;i++){
        let a = items.getElementsByTagName('li')[i];
        // let a = li[i].getElementsByTagName('li')[0];
        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        li[i].style.display = '';
        } else {
        li[i].style.display = 'none';
        }
    }
    
    // Display Sectors----------------------------------
    // for(let i=0;i<sector.length;i++){
    //     let cnt=0;
    //     for(let y=0;y<company.length;y++)
    //     {
    //         if(sector[i].style.display == 'none')
    //         {
    //             sector.total--;
    //         }
    //     }
    //     if(sector.total==0){
    //         sectors[i].style.display = 'none';
    //     }
    //     for(i=0;i<sectors.length;i++)
    //     {
    //         console.log(sectors[i].total);
    //     }
    // }
}






// Displaying company list





