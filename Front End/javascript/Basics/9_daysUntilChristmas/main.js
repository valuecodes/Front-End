// Days until next Christmas

function daysUntilCristmas(date){
    var month=date.getMonth();
    var year=date.getFullYear();
    var day=date.getDate();

    // Add current month days to the dayCount
    var dayCount=0;
    dayCount+=(getDaysInMonth(month,year)-day);
    
    // Current months days are counted so month +1
    for(month+=1;month<=11;month++){
        // if month is Cristmas days +24
        if(month==11){
            dayCount+=24;
        }else{
            dayCount+=getDaysInMonth(month,year);
        }
    }
    return dayCount;
}

function getDaysInMonth(month,year){
    return new Date(year,month,0).getDate();
}

var currentDate=new Date();
console.log(daysUntilCristmas(currentDate));

// w3Resource answer

today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25){
    cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");

