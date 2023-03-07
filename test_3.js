function isStrNull(str, ...args){
  if(str){
    for (let arg of args){
      str = arg + ' ' + str;
    }
    return str;
  }
  else{
    for (let arg of args){
      str += arg;
    }
    return str;
  }
}

function textEquivalent (number){

    let numArray = [
    ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто', 
    'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать',],
    ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
    ['', 'одна тысяча', 'тысячи', 'тысяч']
    ];
    
    let numberStr = '';
    let call = 0;
    let currentNum;
    let zeroNum = 0;
    
    while(number >= 1){
      currentNum = Math.trunc(number % 10);
      number /= 10;
      
      if(currentNum == 0){
        zeroNum++;
        call++;
        continue;
      }
  
      if(call == 0 && Math.trunc(number % 10) == 1){
        numberStr += numArray[++call][currentNum + 9];
        call++;
        number /= 10;
        continue;
      }
  
      if(call == 3 ){
        if(Math.trunc(number % 10) == 1){
          numberStr = isStrNull(numberStr, numArray[3][3], numArray[1][currentNum + 9]);
          call += 2;
          number /= 10;
        } else{
          if(currentNum == 1){
            numberStr = isStrNull(numberStr, numArray[call++][1])
          } else{
              if(currentNum == 2){
                numberStr = isStrNull(numberStr, numArray[call++][2], 'две');
              } else{
                  if(currentNum == 3 || currentNum == 4){
                    numberStr = isStrNull(numberStr, numArray[call++][2], numArray[0][currentNum]);
                  } else{
                    numberStr = isStrNull(numberStr, numArray[call++][3], numArray[0][currentNum])
                  }
              }
          }
        }
      }
      else {
        if(call < 4){
          zeroNum = 0;
          numberStr = isStrNull(numberStr, numArray[Math.trunc(call++)][currentNum]);
        }
        else{
          if(zeroNum){
            numberStr = isStrNull(numberStr, numArray[3][3], numArray[Math.trunc(1 + (call++ % 4))][currentNum]);
            zeroNum = -10;
          }
          else{
            numberStr = isStrNull(numberStr, numArray[Math.trunc(1 + (call++ % 4))][currentNum]);
           }
        }
      }
    }
    
    if(numberStr.length == 0){
      return 'ноль';
    }
      return numberStr;
  }
    
    console.log(textEquivalent(19219));