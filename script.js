var m=Math.round((Math.random()*20)+13)
var n=Math.round((Math.random()*20)+13)
 var matrix=[]
 var side=10
 function getRandInt(max){
    return  Math.round(Math.random()*Math.floor(max))
  }
 
 for(var y = 0; y < m; y++){
 	matrix[y]=[]
   for(var x = 0; x <n; x++){


      

 			matrix[y].push(getRandInt(6))
			 
			
 			
 			
	
     }
            
console.log(matrix)




var side = 40;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var arjArr = [];
var ocArr = [];

function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            } else if (matrix[y][x] == 3) {
                var gs = new Gishatich(x, y)
                gishatichArr.push(gs)

            }
            else if (matrix[y][x] == 4) {
                var ar = new Arj(x, y)
                arjArr.push(ar)
            }
            else if (matrix[y][x] == 5) {
                var o = new Oc(x, y)
                ocArr.push(o)
            }
        }
    }
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}





function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("Blue")
            }
            else if (matrix[y][x] == 5) {
                fill("Black")
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
            }

            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in arjArr) {
        arjArr[i].eat()
        arjArr[i].eat1()
        arjArr[i].move()
        arjArr[i].mult()
        arjArr[i].die()
    }
    for (var i in ocArr) {
        ocArr[i].eat()
        ocArr[i].eat1()
        ocArr[i].move()
        ocArr[i].mult()
        ocArr[i].die()
    }
}
 }