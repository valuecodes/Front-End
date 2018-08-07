//Constructor
function Company(name,sector){
    this.name=name;
    this.sector=sector;
    this.sectorname=name;
}

// Declaring array of 10 objects
var n=10;
var company= new Array();
for(var i=0;i<n;i++)
{
    company.push({})
}


var n=4;
var sector= new Array();
for(var i=0;i<n;i++)
{
    sector.push({})
}

sector[1]='Software';
sector[2]='Technology';
sector[3]='Biotech';
sector[4]='Finance';
sector[5]='Law';


// Company data
// sector 1 = Software
// sector 2 = Technology
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

// for(i=0;i<company.length;i++)
// {
//     console.log(company[i].name);
// }

for(i=1;i<6;i++)
{
        var h = document.createElement("h1");        
        var th = document.createTextNode(sector[i]);
        h.className='list-group-header';                  
        h.appendChild(th);                               
        items.appendChild(h);
        for(b=0;b<company.length;b++){
            if(company[b].sector == i){
                // Create new element
                var a = document.createElement("a");        
                var t = document.createTextNode(company[b].name);
                a.className='list-group-item';                  
                a.appendChild(t);                               
                items.appendChild(a);
            }
             
        }
}

// Displaying company list





