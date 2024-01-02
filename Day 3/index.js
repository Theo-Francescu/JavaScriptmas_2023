function calcTotalCandies(children, candy) {
    const totalCandiesEaten = Math.floor(candy / children)
    console.log(totalCandiesEaten * children) 
   }
   
   calcTotalCandies(3, 10) // expected output: 9
   calcTotalCandies(4, 20) // expected output: 20
   calcTotalCandies(6, 25) // expected output: 24