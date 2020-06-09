// H-Tree Construction
// An H-tree is a geometric shape that consists of a repeating pattern resembles the letter “H”.

// It can be constructed by starting with a line segment of arbitrary length, drawing two segments of 
// the same length at right angles to the first through its endpoints, and continuing in the same vein, reducing (dividing) the length of the line segments drawn at each stage by √2.

// Write a function drawHTree that constructs an H-tree, given its center (x and y coordinates), a starting length, and depth. Assume that the starting line is parallel to the X-axis.

// Use the function drawLine provided to implement your algorithm. In a production code, a drawLine function would render a real line between two points. However, this is not a real 
// production environment, so to make things easier, implement drawLine such that it simply prints its arguments (the print format is left to your discretion).

function drawHTree (x, y, length, depth) {

    //Draw 1 H
     drawLine(x, y, x + length, y)
     drawLine(x, y + length/2, x, y - length/2)
     drawLine(x + length, y + length/2, x + length, y - length/2);
    
    
       if(depth === 0){
       return;
     }
    
    let newLength = length/Math.sqrt(2)
    //NW  
    let UWx = x - (newLength/2)
    let UWy = y + (length/2)
    drawHTree(UWx, UWy, newLength, depth - 1)//1 //2
    //NE
    let UEx = (x + length) - (newLength/2)
    let UEy = y + (length/2)
    drawHTree(UEx, UEy, newLength, depth-1)
    //SW
    let LWx = x - newLength/2
    let LWy = y - length/2
    drawHTree(LWx, LWy, newLength, depth-1)
    //SE
    let LEx = x + length - newLength/2
    let LEy = y - length/2
    drawHTree(LEx, LEy, newLength, depth-1)
    
    
  }
  
  function drawLine(x1,y1,x2,y2){
     console.log(x1,y1,x2,y2); //assuming this function draws line
     return;
  }
  