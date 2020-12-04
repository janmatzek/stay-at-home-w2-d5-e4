// exercise 1
let printNumbersTill = (n) => {
    for (let i = 1; i<=n; i++)
    {console.log(i)}
  }
 
  printNumbersTill(20)

//   exercise 2
  let getGreetingTo = (name) => {
      return('Hello '+name+'!')
  }

  getGreetingTo('Mark')

  console.log(getGreetingTo('Mark'))

//   the other exercise 1

let values = [0,3,6,7,9]

console.log(values)

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printValues(values)

// for each

values.forEach( number => { console.log(number)})
