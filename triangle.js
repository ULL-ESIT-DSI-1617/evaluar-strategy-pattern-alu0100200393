class triangle {
 constructor (options) {
     this.width = options.width;
     this.height = options.height;
     
 }
getArea () {
    return 0.5 * this.width * this.height;
}

getCircumference () {
    return 2 * Math.PI * this.radius;
    }
}







// (function(shapes) { // triangle.js
//   var Triangle = shapes.Triangle = function(options) {
//     this.width = options.width;
//     this.height = options.height;
//   };
//   Triangle.prototype.getArea = function() {
//     return 0.5 * this.width * this.height;
//   };  
// }(window.shapes = window.shapes || {}));



// function getArea(shape, options) {
//   var Shape = window.shapes[shape], area = 0;

//   if (Shape && typeof Shape === 'function') {
//     area = new Shape(options).getArea();
//   } else {
//     throw new Error('Invalid shape: ' + shape);
//   }