// Function to hide email addresses to protect from unauthorized user.

var hideEmailAddress=(email)=>{
    len=email.length;
    email=email.split("");
    for(var i=0;i<len;i++){
        if(email[i]=="_"){

            // Adds 3 dots and rest are empty
            var count=3;
            while(email[i]!=="@"){    
                if(count>0){
                    email[i]=".";
                    count--;
                    i++;
                }else{
                    email[i]="";
                    i++;
                }
            }
        }
    }

    for(var j=0;j<len;j++){
        console.log(email[j]);
    }

    return email.join("");


    
}

console.log("robin_singh@example.com\n"+hideEmailAddress("robin_singh@example.com"));