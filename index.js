var tableau = [0, 90, 2, 100, 4];
console.log("Tableau non trié : " + tableau);


for (var i = 0; i < tableau.length - 1; i++) {
  for (var j = i+1; j < tableau.length  ; j++) {
    if (tableau[i] > tableau[j]) {
   
      var temp = tableau[j];
      tableau[j] = tableau[i];
      tableau[i] = temp;
    }
  }
}


console.log("Tableau trié : " + tableau);