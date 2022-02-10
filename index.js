String.prototype.myHawking = function(separator) {
  const arr = [];
  let text = '';
  if (separator === '') {
    for (let i = 0; i < this.length; i ++) {
      arr.push(this[i]);
    }
  }

  for (let i = 0; i < this.length; i++) {
    if (this[i] === separator || i === this.length) {
      arr.push(text)
      text = '';
    }
      if (this[i] === separator) {
      continue
    }
    text += this[i];
  }
  return arr;
}
Array.prototype.myJoin = function () {
  let str = ''
  for (let i = 0; i < this.length; i ++) {
    str += this[i];
  }
  return str;
}

Array.prototype.mySort = function () {
  for (let j = this.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
  }
  return this;
}


// t1
function isAnagram(word1, word2) {
  if (!(typeof word1 === 'string' && typeof word2 === 'string')) {
    throw new Error ('enter the text');
  }
  if (word1.length !== word2.length) {
    return false;
  }

  for (let i = 0; i < word1.length; i++) {
    if (getAmounLetter(word1[i], word1) !== getAmounLetter(word1[i], word2)) {
      return false;
    }
  }
  return true;
}

function getAmounLetter(letter, string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      counter++;
    }
  }
  return counter;
}

// t3 without recursionu
function amountIntInNum(num) {
  if (!(num instanceof Number)) {
    throw new Error ('Enter the number');
  }
  let counter = 0;
  while (num !== 0) {
    num = parseInt(num / 10);
     counter++
  }
  return counter;
}

// t3 recursion
function amountIntInNum(num, count) {
  if (!(num instanceof Number)) {
    throw new Error ('Enter the number');
  }
  count = count || 0;
  if (parseInt(num / 10) === 0) {
    return count + 1;
  }
  return amountIntInNum(parseInt(num / 10), count++);
}

// t4
function isSrtingPaliandrom (str) {
  if (!(typeof str === 'string')) {
    throw new Error ('enter the text');
  }
  const leters = str.myHawking('');
  const reversStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
      reversStr.push(str[i]);
  }
  if (str === reversStr.myJoin()) {
      return true;
  }
    return false;
}

// t5
function AmoutUniqueWords (str) {
  if (!(typeof str === 'string')) {
    throw new Error ('enter the text');
  }
  const words = str.myHawking(' ');
  const list = {};
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    if (!(list.hasOwnProperty(words[i]))) {
      list[words[i]] = 0;
    }
    ++list[words[i]];
  }
  for (let word in list) {
    if (list[word] === 1) {
      counter++
    }
  }
  return counter;
}

// t6
function AmoutUniqueWords (str) {
  if (!(typeof str === 'string')) {
    throw new Error ('enter the text');
  }
  const words = str.myHawking(' ');
  const list = {};
  const unique = [];
  for (let i = 0; i < words.length; i++) {
    if (!(list.hasOwnProperty(words[i]))) {
      list[words[i]] = 0;
    }
    ++list[words[i]];
  }
  return list;
}
// t7
function Rectangle (width, heigth) {
  if (!(width instanceof Number && heigth instanceof Number)) {
    throw new Error ('Enter the number');
  }
  this.width = width;
  this.heigth = heigth;
  this.perimeter = (this.width + this.heigth) * 2;
  this.square = this.width * this.heigth;
}

function Triangle (sideA, sideB, sideC) {
  if (!(width instanceof Number && sideB instanceof Number && sideC instanceof Number)) {
    throw new Error ('Enter the number');
  }
  this.sideA = sideA;
  this.siceB = sideB;
  this.sideC = sideC;
  this.semiPerimeter = (sideA + sideB + sideC) / 2;
  this.perimeter = a + b + c;
  this.square = Math.sqrt(this.semiPerimeter * (this.semiPerimeter - sideA) * (this.semiPerimeter - sideB) * (this.semiPerimeter - sideC));
}

function Circle (radius) {
  if (!(radius instanceof Number)) {
    throw new Error ('Enter the number');
  }
  this.radius = radius;
  this.perimeter = 2 * Math.PI * radius;
  this.square = Math.PI * (radius * radius);
}

// t8
const factorial = (function () {
        let memo = {};
        return function fact(num){
          if (!(num instanceof Number)) {
            throw new Error ('Enter the number');
          }
            if (num === 0) {
                return 1;
            }

            if(memo[num] === undefined) {
                memo[num] = fact(num - 1);
            }

            return num * memo[num];
        };
    })();

// t9 without recursion
function getSumMultiplesInt(arr, callback) {
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
  let res = 0;

  for (let int of arr) {
    if (callback(int)) {
      res += int;
    }
  }
  return res;
}

// t9 recursion
function getSumMultiplesInt (arr, callback, index, res) {
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
  res = res || 0;
  index = index || 0;

  if (arr.length <= index) {
    return res;
  }
  if (callback(arr[index])){
    res += arr[index];
  }
  return getSumMultiplesInt(arr, callback, ++index, res);
}


// t10
function amountTypesInt(arr) {
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
  let couterForPrime = 0;
  let couterForPositive = 0;
  let couterForZero = 0;
  let couterForNegative = 0;
    for (let int of arr) {
      if (!(int % i - 2 === 0)) {
        couterForPrime++;
      }      if (int > 0) {
        couterForPositive++;
      }      if (int === 0) {
        couterForZero++;
      }      if(int < 0){
        couterForNegative++;
      }
    }
    const lists = [
        `Negative: ${couterForNegative}`,
        `Positive: ${couterForPositive}`,
        `Zero: ${couterForZero}`,
        `Prime: ${couterForNegative}`
      ]

  return lists;
}

// t10 with recursion
function amountNumericTypes (arr, index, lists, couterForPrime ,couterForPositive, couterForZero, couterForNegative) {
  lists = lists || [];
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
  index = index || 0;
  couterForPrime = couterForPrime || 0;
  couterForPositive = couterForPositive || 0;
  couterForZero = couterForZero || 0;
  couterForNegative = couterForNegative || 0;
      if (!(arr[index] % arr[index - 2] === 0)) {
        couterForPrime++;
      }      if (arr[index] > 0) {
        couterForPositive++;
      }      if (arr[index] === 0) {
        couterForZero++;
      }      if(arr[index] < 0){
        couterForNegative++;
      }
     lists = [
        `Negative: ${couterForNegative}`,
        `Positive: ${couterForPositive}`,
        `Zero: ${couterForZero}`,
        `Prime: ${couterForNegative}`
      ];
      if (index === arr.length) {
        return lists;
      }

  return amountTypesInt (arr, ++index, lists, couterForPrime ,couterForPositive, couterForZero, couterForNegative);
}

// t11
function convertInBinary (num) {
  if (!(num instanceof Number && num >= 0)) {
    throw new Error ('Enter the number');
  }
  let binary = [];
  while(num / 2) {
    binary.push(num % 2);
    num = parseInt(num / 2);
  }
  return parseInt(binary.reverse().myJoin())
}

function binaryToDecimal(bin) {
  if (!(num instanceof Number && num >= 0)) {
    throw new Error ('Enter the number');
  }
  let num = bin;
  let res = 0;
  let int = 1;
  let temp = num;
  while (temp !== 0) {
      let lastDigit = temp % 10;
      temp = Math.floor(temp / 10);
      res += lastDigit * int;
      int = int * 2;
  }
  return res;
}

// t12
function getSumMultiplesInt(arr, callback) {
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
  let res = 0;
  for(let i = 0; i < arr.length; i++) {
   for(let j = 0; j < arr[i].length; j++) {
     if(callback(arr[i][j])) {
      res += arr[i][j];
     }
   }
  }
  return res;
}

// t13
function getSunFromMinUbtilMax(min, max, callback) {
  if (!((min instanceof Number && min >= 0) && (max instanceof Number && max >=0))) {
    throw new Error ('Enter the number');
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    if (callback(i)) {
      sum += i;
    }
  }
  return sum;
}

// t13 recursion
function getSunFromMinUbtilMax(min, max, callback, index, sum) {
  if (!((min instanceof Number && min >= 0) && (max instanceof Number && max >=0))) {
    throw new Error ('Enter the number');
  }
  index = index || 0;
  sum = sum || 0
  if (index === max) {
    return sum;
  }
    if (callback(min)) {
      sum += min;
    }
  return getSunFromMinUbtilMax(++min, max, callback, ++index, sum);
}

// t14
function getMean(arr, callback) {
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
  let sum = 0;
  let counter = 0;
  for (let int of arr) {
    if (callback(int)) {
      sum += int;
      counter++
    }
  }
  return sum / counter
}

function getMeanForTwoDimensional(arr, callback) {
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++){
      if (callback(arr[i][j])) {
        sum += arr[i][j];
        counter++;
      }
    }
  }
  return sum / counter;
}

// t15
function transposeArray(arr, arrLength){
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
    let matrix = [];
    for (let i = 0; i < arr.length; i++){
      newArray.push([]);
    }
    for(let i = 0; i < arr.length; i++){
      for (let j = 0; j < arrLength; j++){
        newArray[j].push(arr[i][j]);
      }
    }
    return matrix;
}

function sumMat (arr, arr2) {
  if (!(arr instanceof Array && arr2 instanceof Array)) {
    throw new Error ('Enter the array');
  }
  let sumMart = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++){
      if(sumMart[i] === undefined) {
        sumMart[i] = [];
      }
      if(sumMart[i][j] === undefined) {
        sumMart[i][j] = [];
      }
        sumMart[i][j] = arr[i][j] + arr2[i][j];
    }
  }
  return sumMart;
}

// t16
function deleteRow (arr) {
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        arr.splice(i, 1);
        j = 0;
        if (i !== 0) {
          i--
        }
      }
    }
  }
  return arr;
}

function deleteClom (arr) {
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        for (let k = 0; k < arr.length; k++) {
          arr[k].splice(j, 1);
        }
        j--;
      }
    }
  }
  return arr;
}
// t17
function countZeroElems(arr) {
  if (!(arr instanceof Array)) {
    throw new Error ('Enter the array');
  }
  let counterUpperLine = 0;
  let counterUnderLine = 0;
  let counterMainLine = 0;
  let sumUpperLine = 0;
  let sumUnderLine = 0;
  let sumMainLine = 0;
  let counterMeanUpperLine = 0;
  let counterMeanUnderLine = 0;
  let counterMeanMainLine = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i < j){
        arr[i][j] === 0 && counterUpperLine ++;
        sumUpperLine += arr[i][j];
        counterMeanUpperLine++;
      }
    }
  }


  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr.length - 2; j >= 0; j--) {
      if (i > j) {
        arr[i][j] === 0 && counterUnderLine ++;
        sumUnderLine += arr[i][j];
        counterMeanUnderLine++;
      }
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (i === j) {
        arr[i][j] === 0 && counterMainLine ++;
        sumMainLine += arr[i][j];
        counterMeanMainLine++;
      }
    }
  }

  let meanUpperLine = sumUpperLine / counterMeanUpperLine;
  let meanUnderLine = sumUnderLine / counterMeanUnderLine;
  let meanMainLine = sumMainLine / counterMeanMainLine;
  lists = [
    `zero items in upper:${counterUpperLine}`,
    `zero items on under:${counterUnderLine}`,
    `zero items on main:${counterMainLine}`,
    `mean items in upper:${meanUpperLine}`,
    `mean items on under:${meanUnderLine}`,
    `mean items on main:${meanMainLine}`
  ];
  return lists;
}
// t18
let objectFibonacci = {
  i: 0,
  set setTo(to) {
    this.setTo = to;
  },
  *[Symbol.iterator]() {
    let intFib = 0;
    let intFibSecond = 1;
    let fibonacci = 0;
    while (++this.i <= this.to) {
      yield (fibonacci += a);
      intFib = intFibSecond;
      intFibSecond = fibonacci;
    }
  },
};

function* generatorFibonacci(num) {
  if (!(num instanceof Array)) {
    throw new Error ('Enter the number')
  }
  let fibonacci = 0;
  let intFib = 0;
  let intFibSecond = 1;
  let counter = 0;
  while (++counter <= number) {
    yield (fibonacci += intFib);
    intFib = intFibSecond;
    intFibSecond = fibonacci;
  }
}


function createMemoiz() {
  const memo = {};
  return function pushFibonacci(number, arrayFibonacci) {
    arrayFibonacci = arrayFibonacci || [];
    function getFibonacciNumber(number) {
      let result = 0;

      if (memo[number] !== undefined) {
        result = memo[number];
        return result;
      }

      if (number <= 1) {
        memo[number] = number;
        result = number;
        return result;
      } else {
        result +=
          getFibonacciNumber(number - 1) + getFibonacciNumber(number - 2);
        memo[number] = result;
      }
      return result;
    }

    if (--number >= 0) {
      arrayFibonacci.unshift(getFibonacciNumber(number));
      pushFibonacci(number, arrayFibonacci);
    }

    return arrayFibonacci;
  };
}

function arrayOfFibonacciWithRecursia(number, index, arrayFibonacci) {
  if (!(num instanceof Number)) {
    throw new Error ('Enter the number')
  }
  index = index || 1;
  arrayFibonacci = arrayFibonacci || [0, 1].splice(0, number);

  if (++index < number) {
    arrayFibonacci.push(arrayFibonacci[index - 1] + arrayFibonacci[index - 2]);
    arrayOfFibonacciWithRecursia(number, index, arrayFibonacci);
  }

  return arrayFibonacci;
}

// t19
function* generateSequence() {
  while(true) {
    yield 'green';
    yield 'yellow';
    yield 'red';
    yield 'yellow';
  }
}

let generator = generateSequence();
