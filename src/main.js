//Вам необхідно використовувати масив нотифікацій з минулих занять. 
//До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор, 
//щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків 
//об'єкта notifications таким чином, немов працюємо з "плоским" масивом.

const arrObj = [
    {sourse: 'Anya', text: 'Hello!!!', date: '01/01/2024'},
    {sourse: 'Danya', text: 'We are here', date: '20/01/2024'},
    {sourse: 'Sanya', text: 'Who is the best of the best?', date: '01/10/2024'},
    {sourse: 'Luna', text: 'First', date: '01/12/2024'},
    {sourse: 'Sanya', text: 'I did it!', date: '28/10/2024'},
    {sourse: 'Luna', text: 'Second', date: '01/12/2024'},
  ]

console.log(arrObj)

function groupObj (arr){

    const resObj = {};

    const result = Object.groupBy(arr, item => item.sourse);
    console.log(result)

   const keysResult = Object.keys(result)

    console.log(keysResult)

   const valuesResult = Object.values(result)

    for(let i = 0; i < keysResult.length; i++){
      const resText = []
      valuesResult[i].forEach(item => resText.push(item.text));
    
        resObj[keysResult[i]] = resText

    } 

    
    //console.log(resObj)

   resObj[Symbol.iterator] = function() {
      let i = 0;
      
      return {
        next:() => {
          if(i < keysResult.length) {
            return {value: keysResult[i++], done: false};
          } else {
            return {done: true}
          }
        }
      }
    }
    return resObj
  }


const groups = groupObj(arrObj);
console.log(groups)


for (let group of groups) {
  console.log(groups[group])
}

//Вам необхідно реалізувати функцію memoize(fn), яка приймає вхід функцію і 
//додає їй можливість кешування результатів виконання, щоб уникнути повторних 
//обчислень. Це означає, що в разі, коли функція викликається з однаковими параметрами, 
//то результат необхідно брати з кешу. 
//(Тільки примітиви у параметрах та використовуйте Map)

const sumNumb = (a, b) => +a + +b;

function memoize(fn) {
  const cashe = new Map();

  return function(...args) {
    const key = args.join(' ')

    if (!cashe.has(key)){
      return cashe.set(key, fn(...args))
    }

    return cashe.get(key)
  }

  
}

const memiizeSumNumb = memoize(sumNumb);

console.log(memiizeSumNumb(7, 10));
console.log(memiizeSumNumb(7, 11));
console.log(memiizeSumNumb(7, 11));
console.log(memiizeSumNumb(10, 11));