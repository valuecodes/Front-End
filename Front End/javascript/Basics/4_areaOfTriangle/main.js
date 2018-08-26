// Calculates triangle area

function triangleArea(side1,side2,side3){
    var area=(side1+side2+side3)/2;
    area=Math.sqrt(area*((area-side1)*(area-side2)*(area-side3)));
    return area;
}

console.log(triangleArea(5,6,7));
