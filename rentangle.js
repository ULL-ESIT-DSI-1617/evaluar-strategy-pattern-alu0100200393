





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