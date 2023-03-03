function pow(number, step) {
    if (step == 1) 
        return number;
     else 
      return number * pow(number, step - 1);
  }
  
  console.log(pow(10, 5));