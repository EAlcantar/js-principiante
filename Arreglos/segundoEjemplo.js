// function getTriangleArea(height, width) {
//     /* My amazing code is here 🚀 */
//     var triangleArea = (width * height) / 2;  //Fórmula para calcular el área de un triángulo  
//     return triangleArea;
// }

// console.log("El área del triángulo es:", getTriangleArea(3, 2));

function arrayOfMultiples(base, times) {
    /* My amazing code is right here 🚀 */

    var resultArray = [];
    for (let i = 0; i < times; i++) {
        resultArray[i] = base * (i+1);
    }
    console.log(resultArray);
    return resultArray;
}
arrayOfMultiples(7, 5);
