// function f(n){
//      if(n>0){
        
//         f(n-1);
//         console.log(n);
//      }else{
//         return
//      }
// }
// f(6);

// function f(n){
//     if(n>0){
//         console.log(n);
//         f(n-1);
       
//     }else{
//        return
//     }
// }
// f(5);


// function sum(n){
//     if (n===0){
//         return 0;

//     } else {
//         return sum(n-1)+n;

//     }
   
   
// }
//console.log(sum(6));



//  function sum(n){
//      let total = 0;
//      for(let i = 0 ;i<n ; i++){
//            total+=i;
          

//      }
//      return total;
     
     
     
     
//  }
//  console.log(sum(10));


// function factorial(n) {
//     let result = 1;  // Start with 1 because factorial of 0 is 1

//     // Use a for loop to multiply result by each number from 1 to n
//     for (let i = 1; i <= n; i++) {
//         result *= i;  // result = result * i
//     }

//     return result;
// }

// console.log(factorial(5));  // Output: 120




// function fact(n){
//     if(n===0||n===1){
//         return 1;
//     }else{
//         return fact(n-1)*n;

//     }
// }

// console.log(fact(5));




// function pow(m,n){
//     let result=1;
//     for(let i = 0 ; i < n ; i++){
//         result*= m

//     }
//     return result;
// }
// console.log(pow(2,3));





// function pow(m,n){
//     if(n===0){
//         return 1;


//     } else{
//         return pow (m, n-1)*m;
//     }
// }
// console.log(pow(2,3));




// function is_palindrom(str){
//     let p1=0;
//     let p2=str.length-1;
//     while(p1!==p2){
//         if(str[p1]!==str[p2]){
//             return false;
//         }
//         p1++;
//         p2--;

//     }
//     return true;
// }
// console.log(is_palindrom('madam'));





// function isNumberPalindrome(num) {
//     // Convert number to string
//     const str = num.toString();
    
//     // Reverse the string and compare it to the original
//     return str === str.split('').reverse().join('');
// }

// console.log(isNumberPalindrome(121));  // Output: true
// console.log(isNumberPalindrome(123));  // Output: false




function fib(n){
    let result=[0,1];
    for(let i=2 ; i<=n ; i++){
        result.push(result[i-2]+result[i-1]);
    }
     return result;


}
console.log(fib(5));






