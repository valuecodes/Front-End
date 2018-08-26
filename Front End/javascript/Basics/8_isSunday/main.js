// Find 1st January be a Sunday between a range of years

function getSundays(){
    for(var year=2018;year<2100;year++){
        var date=new Date(year,0,1);
        if(date.getDay()===0){
            console.log("1st of january is being a Sunday "+year);
        }
    } 
}

getSundays();