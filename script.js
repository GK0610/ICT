// // console.log("Hello World");

// // // Prints numbers from 0 to 10
// // for(let i=0;i<=10;i++){
// //     console.log(i);
// // }
// // // Prints numbers from 10 to 0
// // for(let i=10;i>=0;i--){
// //     console.log(i);
// // }

// // // Print sum of first 10 natural numbers
// // 1+2+3...+10

// // let sum=0
// // for(let i=1;i<=10;i++){
// //     sum=sum+i;
// // }
// // console.log("Sum of first 10 natural number is " +sum);

// // While Loop

// // let i=0;
// // while(i<=10){
// //     console.log(i);
// //     i++;
// // }

// // Do-While Loop

// // let i=2;
// // do {
// //     console.log(i);
// // } while (i>2);

// // For...Of Loop

// let students=['Hari','Ram','Shine']
// for (let student of students) {
//     console.log(`Hello ${student}`)
// }

// // Backtick `

// Challenge 1

for(var i=0; i<=15; i++){
    if(i=== 0){
        console.log(i+" is even");
    }
    else if(i% 2 === 0){
        console.log(i+" is even");   
    }
    else{
        console.log(i+" is odd");
    }
}


// Challenge 2
for ( var i =1;i<=100;i++)
{
  if (i%3===0 && i%5===0)
  {
    console.log(i+"FizzBuzz");
  }
  else if (i%3===0) 
  {
    console.log(i+"Fizz");
  }
  else if (i%5===0) 
  {
    console.log(i+" Buzz");
  }
  else
  {
    console.log(i);
  }
}
