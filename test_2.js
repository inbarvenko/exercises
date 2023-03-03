function oneModalArray(arr){
    for(let i=0; i < arr.length; i++) {
      if (arr[i] instanceof Array) 
        arr.splice(i, 1, ...arr[i]);
    }
    
    return arr;
}

console.log(oneModalArray([1,2,3, 3,[4,5,6,[7,8,9]]]));