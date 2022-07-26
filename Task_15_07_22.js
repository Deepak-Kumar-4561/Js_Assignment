//1. Funtion to find the factorial of a number

function factorial(n){
    if(isNaN(n)||n<0||!Number.isInteger(n))  return -1;
    let res=1;
    for(let i=1;i<=n;i++)   res*=i;
    return res;
}
let result=factorial(1);
console.log(result)

//2. Funtion to print Fibonacci Series separated by comma

function Fibonacci(n){
    if(isNaN(n)||n<=0||!Number.isInteger(n))  return -1;
    let a1 = 0;
    let a2 = 1;
    let arr = [];
    arr.push(a1);
    if(n==1) return arr;
    arr.push(a2);
    if(n==2) return arr;
    for(let i = 2;i<n;i++){
        let temp = a1+a2;
        arr.push(temp);
        a1=a2;
        a2=temp;
        
    }
    return arr.toString();
}
result = Fibonacci(1.5);
console.log(result)

//3. Funtion to check whether a given number is prime or not

function isprime(n){
    if(isNaN(n)||!Number.isInteger(n)) return -1;
    let flag = 0;
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            flag = 1;
            break;
        }
    }
    return (flag==0)?true:false;
}
result = isprime(117);
console.log(result);

//4. Function to calculate the sum of two numbers

function sum(a,b){
    if(isNaN(a)&&isNaN(b)) return "Numbers are invalid";
    else    return a+b;
}

result = sum(2,3);
console.log(result);

//5. Function to calculate the multiplication of two numbers

function mul(a,b){

    return a*b;
}
result = mul(2,3);
console.log(result);

//6. Function to find the largest number in the array

function findlargest(arr){
    let res = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++){
        if(res<arr[i])  res=arr[i];
    }
    return res;

}
let arr = [2,4,1,4,5,6];
console.log(findlargest(arr));

//7. Function to find the smallest number in the array

function findsmallest(arr){
    // let res = Number.MAX_SAFE_INTEGER;
    // for(let i=0;i<arr.length;i++){
    //     if(res>arr[i])  res=arr[i];
    // }
    // return res;
    let res=arr.reduce((a,b)=>{return(a<b)?a:b});
    return res;

}
console.log(findsmallest(arr));
console.log(arr.join())
//8. Function to find the a given number in an array

function searchnum(n,arr){
    // for(let i=0;i<arr.length;i++){
    //     if(n==arr[i]) return true;
    // }
    // return false;
    return arr.includes(n);
}
console.log(searchnum(3,arr));

//9. Function to find the length of a string

function stringlength(str){
    if(str==undefined||str==''||str==null) return 0;
    let res =0;
    let i=0;
    while(str[i]!==undefined) {res++;i++};
    return res;
}
console.log(stringlength('Deepak'))
let a = null
console.log(stringlength(a));
a = undefined
console.log(stringlength(a));

//10. Function to find the length of an array

function arraylength(arr){
    let res=0;
    for(let value of arr)   res++;
    return res;
}
console.log(arraylength(arr));

//11. Function to reverse an string

function stringreverse(str){
    
    return str.split('').reverse().join("");
}
console.log(stringreverse("Hello"));
function reversearray(arr){
    let l=0;
    let r=arraylength(arr)-1;
    while(l<=r){
        let temp = arr[l];
        arr[l]=arr[r];
        arr[r]=temp;
        l++;
        r--;
    }
    return arr;
}
console.log(reversearray(arr).join());
//12. Function to find the area of triangle

function trianglearea(a,b,c){
    if(a<b+c||b<a+c||c<a+b||!isFinite(a)||!isFinite(b)||!isFinite(c)) return -1;
    let s = (a+b+c)/2;
    let res = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return res.toFixed(2);
}
console.log(trianglearea(3,2,1));

//13. Function to find prime numbers till the given number

function prime_till_n(n){
    let arr = []
    if(n<=1) return arr;
    for(let i=2;i<=n;i++){
        if(isprime(i))  arr.push(i);
    }
    return arr.toString();
}
console.log(prime_till_n(11));
//14. Function to find the square root of a given number

function rootfun(n){
    // let n=4;
    let a=n/2;
    let temp;
    do{
        temp=a;
        a=(temp + (n/temp))/2;
        console.log(a)
    } while((temp-a)!=0);
    console.log(a);
  }
  rootfun(144);
//15. Function to sort an array

function sort_array(arr1){
    for (let i = 0; i < arr1.length - 1; i++) {
        for (let j = 0; j < arr1.length - i - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                let swap = arr1[j + 1];
                arr1[j + 1] = arr1[j];
                arr1[j] = swap;
            }
        }
    }
    return arr1;

    // arr.sort((a,b)=>{return a-b}); // sorted in ascending order
    // return arr.toString();

}
console.log(sort_array(arr));