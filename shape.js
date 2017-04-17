
class shape {
 constructor (weight,height) {
     static shapeType {}
     this.height = height
     this.weight = weight
   }
}


class circle extend shape {
 constructor (radius) {
     this.radius = options.radius;
     
 }
getArea () {
   return Math.PI * Math.pow(this.radius, 2);
}

getCircumference () {
    return 2 * Math.PI * this.radius;
    }
}


class triangle extend shape {
 constructor (weight,height) {
     super(weight,height)
     this.width = options.width;
     this.height = options.height;
     shape.shapetype.triangle = triangle
     
 }
getArea () {
    return 0.5 * this.width * this.height;
}
}
//////////////////

shapeType = {
    
   
    t: triangle(),
    s: square(),
    r: rectangle()
    
};
var = new shape.shapetype ['t'](100,100);

// var  = (eval('new' + t + '(options.dato)'));
//     console.log(measures.typeof + "shapee gaaa")

    var result = sharetype.getarea (options.dato);
        console.log(result + "shacccccccpee gaaa")






// try {
//   var t = getArea('Triangle',  { width: 100, height: 100 });
//   console.log(t);
//   var s = getArea('Square',    { width: 100 });
//   console.log(s);
//   var r = getArea('Rectangle', { width: 100, height: 100 });
//   console.log(r);
//   var b = getArea('Bogus');
// }
// catch (e) {
//   console.log(e);
// }