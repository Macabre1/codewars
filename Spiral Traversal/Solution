spiralTraversal (matrix) {
 var result = [];
 var myTricks = [];
 for (var k=0; k < matrix.length; k++) {
   myTricks[k] = matrix[k].slice();
 }

 var circles = function(myTricks) {
   if (myTricks.length === 0) {
     return;
   }

   result = result.concat(myTricks.shift());
   if (!(Array.isArray(myTricks[0]))) {
     console.log("yes", myTricks)
     return;
   }
   for (var i=0; i < myTricks.length - 1; i++) {
     if (myTricks[i].length === 0) {
       return;
     }
     result.push(myTricks[i].pop());
   }
   result = result.concat(myTricks.pop().reverse());

   for (var j=myTricks.length - 1; j > 0; j--) {
     if (myTricks[j].length === 0) {
       return;
     }
     result.push(myTricks[j].shift());
   }
   return circles(myTricks);
 }
 circles(myTricks);
 return result;
};
