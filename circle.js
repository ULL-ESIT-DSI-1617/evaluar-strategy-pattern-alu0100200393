


class circle {
 constructor (options) {
     this.radius = options.radius;
     
 }
getArea () {
   return Math.PI * Math.pow(this.radius, 2);
}

getCircumference () {
    return 2 * Math.PI * this.radius;
    }
}



// // circle.js
// (function(shapes) {
//   var Circle = shapes.Circle = function(options) {
//     this.radius = options.radius;
//   };

//   Circle.prototype.getArea = function() {
//     return Math.PI * Math.pow(this.radius, 2);
//   };

//   Circle.prototype.getCircumference = function() {
//     return 2 * Math.PI * this.radius;
//   };
// }(window.shapes = window.shapes || {}));



// class AnimalES6 {
//     constructor(name) {
//         this.name = name;
//     }
 
//     doSomething() {
//         console.log("I'm a " + this.name);
//     }
// }
 
// var lionES6 = new AnimalES6("Lion");
// lionES6.doSomething();