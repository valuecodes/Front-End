// Identity matrix

function createMatrix(n){
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            if(j==i){
                console.log(1);
            }else{
                console.log(0);
            }
        }
    }
}

createMatrix(6);

