function sumTogether(arr1, arr2) {
   let arr3 = [];

   for(let i = 0; i < arr1.length; i++) {
       arr3.push(arr1[i] + arr2[i]);
   }
   return arr3
}

module.exports = sumTogether;
