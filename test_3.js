function textEquivalent (number){

  let numArray = [
  ['ноль', 'один', 'два ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять '],
  ['', 'десять ', 'двадцать ', 'тридцать ', 'сорок ', 'пятьдесят ', 'шестьдесят ', 'семьдесят ', 'восемьдесят ', 'девяносто ', 
  'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать',],
  [' ', 'сто ', 'двести ', 'триста ', 'четыреста ', 'пятьсот ', 'шестьсот ', 'семьсот ', 'восемьсот ', 'девятьсот '],
  [' ', 'одна тысяча ', 'тысячи ', ' тысяч ']
  ];
  
  let numberStr = '';
  let call = 0, buf, zeroNum = 0;
  
  while(number>=1){
    buf = Math.trunc(number % 10);
    number /= 10;
    
    if(buf == 0){
      zeroNum++;
      call++;
      continue;
    }

    if(call==0 && Math.trunc(number % 10) == 1){
      numberStr = numArray[++call][buf+9] + numberStr;
      call++;
      number /= 10;
      continue;
    }

    if(call == 3 ){
          if(Math.trunc(number % 10) == 1){
            numberStr = numArray[1][buf+9] + numArray[3][3] + numberStr;
            call+=2;
            number /= 10;
          } else if(buf == 1) numberStr = numArray[call++][1] + numberStr;
            else if(buf == 2) numberStr = 'две ' + numArray[call++][2] + numberStr;
            else if(buf == 3 || buf == 4) numberStr = numArray[0][buf] + numArray[call++][2] + numberStr;
            else numberStr = numArray[0][buf] + numArray[call++][3] + numberStr;
      }
    else {
      if(call<4)
        numberStr = numArray[Math.trunc(call++)][buf] + numberStr;
      else{
       if(zeroNum){
        numberStr = numArray[Math.trunc(1 + (call++ % 4))][buf] + numArray[3][3] + numberStr
        zeroNum = -10;
       }
       else 
        numberStr = numArray[Math.trunc(1 + (call++ % 4))][buf] + numberStr
      }
    }

    // console.log(numberStr);
  }
  
  if(numberStr.length == 0) return 'ноль';
  return numberStr;
  }
  
  console.log(textEquivalent(31133));