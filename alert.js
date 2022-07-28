
// // // let admin;
// // // var name;
// // // name="John";
// // // admin=name;
// // // alert(admin);



// // // let name="ILYA"
// // // alert(`Hello" ${"name"}`);

// // // let name=prompt("Enter your name","placeholder");
// // // alert(`Your name is ${name}`);

// // // let num = "ss1ss"
// // // // alert(typeof num);
// // // alert(Number(num))
// // // alert(typeof num)

// // // floating point numbers

// // // let a =0.1
// // // let b=0.2
// // // let c=a+b
// // // let d = c.toFixed(1);
// // // alert(c)
// // // if(d==0.3){
// // //     alert(true)
// // // }
// // // else
// // // alert(false)

// // // let a=1,b=1;
// // // let c=++a;
// // // let d=b++;
// // // alert((a,b,c,d));

// // // let a=2
// // // let x = 1+(a*=2)
// // // console.log(a,x)


// // // alert(""+1+2)
// // // alert(""-1+0)
// // // alert(true-false)
// // // alert(null+1)
// // // alert(undefined+1)
// // // alert("3e"-2)


// // // let b=prompt("Enter a number")
// // // let c=prompt("Enter second number")
// // // alert(+c + +b)

// // // let i =10
// // // while(i--)
// // // {

// // //     if(i==5)
// // //     continue;
// // //     alert(i)
// // // }
// // // alert(null||2||undefined)
// // // alert(undefined||null||Infinity||1)
// // // alert(alert(4))
// // // alert(null||alert(null||undefined||1)||alert(2))
// // // alert("1"==1)
// // // alert(null===null)

// // // alert(.2+.3)

// // // let i =3;
// // // // while(i)
// // // // alert(i--)

// // // function and(){
// // //     alert(i)
// // //     let i=4

// // // }
// // // alert(i);
// // // and()
// // // alert(i)
// // // var yes=()=>
// // // {
// // //     alert("YOU agreed")
// // // }
// // // var no = ()=>{
// // //     alert("You don't agreed")
// // // }

// // // var ask= (question,yes,no)=>
// // // {
// // //     if(confirm(question))
// // //     yes();
// // //     else
// // //     no();
// // // }
// // // ask("Do you agree",()=>alert("You agreed"),()=>alert("You don't agreed"));


// // // let user = {
// // //     name : 23,
// // //     surname:34
// // // }
// // // // delete user.name
// // // // user.name="Lucy"
// // // let sum=null;
// // // for(key in user){
// // // // alert(user[key])
// // // sum+=user[key]
// // // }
// // // // alert(sum)
// // // // alert(user.name+user.surname)

// // // let menu = {
// // //     width:200,
// // //     width:400,
// // //     height:300,
// // //     title:"My menu"

// // // }
// // // alert(menu.width)

// // // for(let key in menu)
// // // alert(menu[key])
// // // function multiply(menu){
// // //     for(let key in menu)
// // //     {
// // //     if(typeof(menu[key])=='number'){
// // //         menu[key]*=2;
// // //         }   
// // //     }
// // // }
// // // multiply(menu);
// // // for(let key in menu)
// // // {
// // //     alert(menu[key])
// // // }
// // // alert()


// // // function makeUser() {
// // //     return {
// // //       name: "John",
// // //       ref(){return this}
// // //     };
// // //   }

// // //   let user = makeUser();

// // //   alert( user.ref().name);

// // // const andn=23;
// // // // alert(andn)
// // // alert(123)

// // // let id = Symbol("id")
// // // let id1= Symbol("id")
// // // alert(id.description)
// // // alert(id1.description)

// // // let id = Symbol("id");

// // // let user = {
// // //   name: "John",
// // //   [id]: 123 // not "id": 123
// // // };
// // // alert(user[id])

// // // let id = Symbol("id")
// // // let o = {x:1,y:2,z:4,[id]:3,
// // // toString(){
// // //   return "An object is written";
// // // }}
// // // alert(o+1)
// // // let o1=o;
// // // console.log(o1.x,o1.y,o1[id])

// // // alert(1+ +"2")
// // // let user = {
// // //   name: "John",
// // //   age: 30,

// // //   sayHi() {
// // //     alert( this.name ); // leads to an error
// // //   }

// // // };


// // // let admin = user;
// // // user = null;
// // // admin.sayHi()

// // // let user = {
// // //   name: "Admin"
// // // }
// // // let acer=user
// // // delete user.name
// // // alert(acer.name)

// // // let str = "Hello";

// // // alert( str.toUpperCase() );
// // // alert(str)
// // // let a = new Array(10,)
// // // alert(a.length)


// // // let a = Array.of(10)
// // // // alert(a[0])
// // // a['s']="Hello"
// // // // alert(a['s'])
// // // console.log(a);

// // // for(let value in a)
// // // alert(a[value])
// // // a[1]={s:"hello"};
// // // console.log(a);
// // // console.log(a[1]);
// // // console.log(a.length)


// // // let a =[4,33,111,222]
// // // a.sort((x,y)=>{return x-y})

// // // a.forEach(x=>{alert(x)})

// // // function x(){
// // //   let a = 7;
// // //   function y(){
// // //     console.log(a);
// // //   }
// // //   a=100;
// // //   return y();
// // // }
// // // // let i = x();
// // // // console.log(x());
// // // // let i = x();
// // // // i();

// // // x();

// // // let arr = [,2,,4];
// // // let res=0;
// // // // for(let i in arr)
// // // // res++;
// // // // console.log(res);
// // // res =0;
// // // arr.forEach((number)=>{res++;})
// // // console.log(res);
// // // res =0;
// // // for(let value of arr) {res++; console.log(value);}
// // // console.log(res);
// // // let a = "Hello";
// // // // console.log(a.codePointAt(1));
// // // let b = "hello";
// // // // console.log(a.toLowerCase);
// // // // console.log(a.toLowerCase());
// // // // console.log(a.localeCompare(b));
// // // function lower(str){
// // //   console.log(str.toLocaleUpperCase());
// // // }
// // // lower(a);
// // // console.log(a.toLowerCase());
// // // console.log(a);
// // // letters=[..."Hello World"];
// // // let everyother = "";
// // // for(let [letter,index] of letters.entries()) {
// // // // if (index % 2 === 0) everyother += letter; // letters at even indexes
// // // console.log(letter,index);
// // // }

// // // arr = [1,2,3];
// // // console.log(arr+1);

// // // let data = [1,2,3,4,5], sum = 0;
// // // // Compute the sum of the elements of the array
// // // data.forEach(value => { sum += value; });
// // // console.log(sum);
// // // // sum == 15
// // // // Now increment each array element
// // // data.forEach((v,i, a)=> { a[i] = v + 1; });
// // // console.log(data.toString())

// // // let a = [1, 2, 3];
// // // console.log(a.map(x => x*x).join());
// // // console.log(...a)

// // // let a = [5, 4, 3, 2, 1];
// // // console.log(a.filter(x => x < 3));
// // // console.log(a);


// // // let o = {
// // //   name:"Deepak",
// // //   age:21,

// // // }
// // // let arr = [1,2,4,,6,]
// // // let o1 = {...arr}
// // // console.log(o1);
// // // let a = {...o};
// // // console.log(a);
// // // a.name = "Chandresh";
// // // console.log(o.name);
// // // for(let value in a)
// // // console.log(value);

// // // function outer(){
// // //   function inner(){
// // //     console.log("Inner function is called");
// // //   }
// // //   return inner;
// // // }
// // // outer()();

// // // let a = ()=>{return this};
// // // console.log(a);
// // // const strict = a();
// // // console.log(strict);

// // // function xyz(name,age){
// // // this.n = name;
// // // this.a = age;
// // // }
// // // let abc = new xyz("Deepak",23);
// // // console.log(abc.n)
// // // console.log(typeof abc)

// // // o = {
// // //   name:"deepak",
// // //   age:22,
// // //   m:function(){
// // //     this.school = "devasthaly"
// // //     return o;
// // //   }
// // // }
// // // let a = new o.m();
// // // console.log(a)
// // // let scope = "global scope";
// // // function checkscope() {
// // // let scope1 = "local scope";
// // // function f() { return scope; };
// // // return f();
// // // }
// // // console.log(checkscope());

// // // let uniqueInteger = function() { // Define and invoke
// // //   let counter = 0;
// // //   // Private state of function
// // //   return counter++;

// // //   };
// // //   console.log(uniqueInteger())// => 0
// // //   // console.log(typeof uniqueInteger)
// // //   // console.log(uniqueInteger)
// // // let uniqueInteger = (function() { // Define and invoke
// // //   let counter = 0;
// // //   // Private state of function
// // //   return ()=> { return counter++; };
// // //   }());
// // //   console.log(uniqueInteger()) // => 0
// // //   console.log(uniqueInteger()) 



// // // function User(){
// // //   this.a="deepak"
// // //   return {
// // //     b:a
// // //   }
// // // };
// // // let user= new User();
// // // console.log(user.b);


// // // const a =10
// // // function fun(){
// // //   console.log(a);
// // // };
// // // var a=5;
// // // // fun();
// // // let arr =['deepak'];
// // // let user = {
// // //   name:"deepak"
// // // }
// // // console.log(arr[0]==user.name)
// // let str = "border-left-width";
// // // console.log(str.split("-").map((v,i)=>(i==0)?v:v[0].toUpperCase()+v.slice(1)).join(''));
// // let a =[5,-2,44,22,46,0,-1,-4];
// // let arr=a.filter(x=>{if(x>5||x<0) return x;});
// // console.log(arr.join());




// // // function a(){
// // //   let b = 12;
// // //   return(b);
// // // }
// // // console.log(a());


// // // let a=function fun(){

// // // };


// // // let a=function(){

// // // };



// // function fun(){
// //   function fun(){  
// //   console.log("dljasflj");

// //   };
// // };











// // // let user={
// // //   name:"Shitanshu",
// // //   age:23
// // // }
// // // let arr1 = [1,2,3];
// // // let arr2 = arr1
// // // console.log(arr1==arr2)
// // // arr1[1]=4;
// // // console.log(arr2[1]);

// // let john = { name: "John", surname: "Smith", id: 1 };
// // let pete = { name: "Pete", surname: "Hunt", id: 2 };
// // let mary = { name: "Mary", surname: "Key", id: 3 };

// // let users = [ john, pete, mary ];
// // let User = users.map(x=>({id:x.id,fullname:`${x.name} ${x.surname}`}))
// // for(let i in User)
// // console.log(i,User[i]);

// // let john = { name: "John", age: 25 };
// // let pete = { name: "Pete", age: 30 };
// // let mary = { name: "Mary", age: 28 };

// // let arr = [ pete, john, mary ];
// // // for(let i in arr)
// // // console.log(arr[i].name,arr[i].age);
// // // arr.sort((a,b)=>{return a.age-b.age});
// // // for(let i in arr)
// // // console.log(arr[i].name,arr[i].age);

// // let sum=0;
// // for(let i in arr){

// // }

// function fun(name){
//   return {
//     name:name,
//     age:23,
//     toal:function(){
//     console.log(name);
//     }
//   }
// };

// let a=fun("deepak");
// let b=fun("shitanshu");
// console.log(a['name']);
// console.log(b.name);
// a.toal();
// console.log(a.__proto__);



// function fun(n){
//   // let n=4;
//   let a=n/2;
//   let temp;
//   do{
//       temp=a;
//       a=(temp + (n/temp))/2;
//       console.log(a)
//   } while((temp-a)!=0);
//   console.log(a);
// }
// fun(144);

// // let arr=[1,2,3,4];
// // arr.forEach(function(x){if(x===2) throw new Error() ; else console.log( x*2);})

// s=100;
// console.log(s)
// delete s;
// console.log(s);
// var s=12
// console.log(s)

// s=100;
// console.log(s)
// delete s;
// console.log(s);
// s=12
// console.log(s)


// function fun(){};
// let f=function fun(){};
// let a=function(){};
// lt a=()=>{};


// var s;
// console.log(s)
// var s=12; 


// console.log(s)
// s=10



// s=10;
// console.log(s);
// function fun(){
//     console.log(s);
//     s=20;
//     console.log(s);
// };
// fun();



// var a=1;
// console.log(a);
// delete a;

// // console.log(s)
// // s=12
// // console.log(s);
// // 'use strict'
// // let s=11;
// // console.log(s);
// delete s;

// s = 12
// console.log(s)
// delete s;
// console.log(s);

// showMessage()
// function showMessage() {
//   console.log( 'Hello everyone!' );
// }
// console.log(a);
// var a= showMessage
// a();
// console.log(a)
// a=10;
// var b=12;
// console.log(a)
// console.log(window.a)
// let c=15
// showMessage()
// window.a = "var-scoped a";
// let a = "lexically-scoped a";
// console.log(a);         // "lexically-scoped a"
// console.log(window.a);

// let user ={
//     name:"deepak",
//     age:23
// }
// console.log(user);
// delete user.name;
// console.log(user);

// const user={


// }
// const obj = {
//     prop: 42,
//     name:"deepak"
//   };

// Object.defineProperty(obj,"name",{configurable: false, writable: false });
// console.log(obj.name);
// obj.name="shitanshu"
// console.log(obj.name)

// function User(){
//     (function abc(){
//         name="shitanshu"
//     })();

// };
// let user=new User();
// user.name="deepak"
// console.log(user.name);
// let n= undefined
// console.log(typeof n);
// let a =null;
// console.log(typeof a)

// let user = new Object();
// console.log(typeof user);
// user.name="Deepak";
// user.age=23;
// for(let i in user){
//     console.log(user[i]);
// }

// let userF = function(){
//     let user = {
//         id : 342,
//         name : 'chan'
//     };
//     return function(){
//         return {...user};
//     };
// }();
// function userF(){
//     this.name="chan";
//     this.id=342;

//     return Object.freeze({
//         name:"Deepak",
//         id:23,

//     })

// }
// let obj1= userF();
// console.log(obj1);
// obj1.id=3333;
// console.log(obj1);
// let obj2=new userF();
// console.log(obj2);
// let user = {

//     4:"4",

//     name:"Deepak",
//     0:45,
//     e:"jsadlfkj",
//     user1:{},
//     "":"this is an empty string",
// }
// let user = new Object();
// for(let i in user)
// {
//     console.log(user[i]);
// }
// console.log(user);



//   rand = (Math.random()*10).toFixed(0),
//   anotherObj = {};

// Now, creating additional properties.
// myObj['type']              = 'Dot syntax for a key named type';
// myObj['date created']   = 'This key has a space';
// var str = 'myString';
// myObj[str]              = 'This key is in variable str';
// myObj[rand]             = 'A random number is the key here';
// myObj[anotherObj]       = 'This key is object anotherObj';
// myObj['']               = 'This key is an empty string';
// const myObj = {};
// myObj.zebra="animal";
// myObj[21]="deepak";
// myObj[1]=23;
// myObj[123]="zero";
// myObj.age=222;

// console.log(myObj);
// for(let keys in myObj){
//     console.log(keys,myObj[keys]);
// }
// for(let i in myObj)
// console.log(i,myObj[i]);
// var str = 'myString';
// console.log(Object.keys(myObj));

// let o = { x: "don't change this value" };
// library.function(Object.create(o));
// console.log(o);

// const user = {
//     name:"Deepak",
//     age:23,
//     id:243
// }
// let {name,age}=user;
// console.log(name);
// console.log(age);
// const groupByCategory = [
//     { name: "Mathematics", category: "Subject" },
//     { name: "Cow", category: "Animal" },
//     { name: "Science", category: "Subject" },
// ];
// groupBy = groupByCategory.reduce((groupc,obj)=>{
//     const {category}=obj;
//     groupc[category]=(groupc[category]===undefined) ? []:groupc[category];
//     groupc[category].push(obj);
//     return groupc

// },{});
// const groupBy = groupByCategory.group(({category})=>category);

// console.log(groupBy);
// for(const [key,value] of Object.entries(groupBy)){
//     console.log(key);
//     for(const entries of value){
//         console.log(entries,value[entries]);
//     }
// }

// const dogs = [
// {
//     name: 'Groucho Barks',
//     breed: 'German Shepherd',
//     age: 1
// },
// {
//     name: 'Pepper',
//     breed: 'Shih Tzu',
//     age: 3
// },
// {
//     name: 'Bark Twain',
//     breed: 'Dachshund',
//     age: 5
// },
// {
//     name: 'Jimmy Chew',
//     breed: 'Shih Tzu',
//     age: 10
// },
// {
//     name: 'Pup Tar',
//     breed: 'Dachshund',
//     age: 2
// },
// ]
// const byBreed = dogs.groupBy(dog => {
// return dog.breed;
// });
// console.log(byBreed);
// import groupBy from 'lodash.groupby';
// const inventory = [
// { name: 'asparagus', type: 'vegetables' },
// { name: 'bananas',  type: 'fruit' },
// { name: 'goat', type: 'meat' },
// { name: 'cherries', type: 'fruit' },
// { name: 'fish', type: 'meat' }
// ];
// const abc = groupBy(inventory,obj=>{return obj.type});

// let user = [1,3,5,7,9];
// user['s']=42;
// let obj = {...user};
// for(const i in obj)
// {
//     console.log(i,obj[i]);
// }
// let arr = [];
// let num = ""
// do {
//     num = prompt("Enter a number");
//     if(num===''||num===null||isNaN(num)) 
//     break;
//     arr.push(num)
// } while (true);
// console.log(arr);

// let arr1 = [];
// let num1 = ""
// do {
//     num1= prompt("Enter a number");
//     if(num1!==''||num1!==null||!isNaN(num1)) 
//     arr1.push(num1);
//     else break;
// } while (false);
// console.log(arr1);

// let arr2 = [];
// let num2 = ""
// do {
//     num2= prompt("Enter a number");
//     if(num2!==''&&!isNaN(num2)&&num2!==null)
//     arr2.push(num2);
//     else break;
// } while (true);
// console.log(arr2);

// let arr = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(-1, 0, 3, 4);

// let foo = {key1:12,toString(){return this.key1}};
// let bar = {key2:24,toString(){return this.key2}};
// let user1 = {};
// user1[foo]="value1";
// console.log(user1[bar]);
// user1[bar]="priya";
// console.log(user1[foo]);
// for(let i in user1)
// {
//     console.log(i, user1[i]);
// }
// console.log(JSON.stringify())
// console.log(foo)
// console.log(user1.foo);
// let user2={};
// user2[bar]="odd";
// console.log(JSON.stringify(Object.keys(user1)))
// console.log(JSON.stringify(Object.keys(user2)));
// console.log(JSON.stringify(Object.keys(user1))==JSON.stringify(Object.keys(user2)));
// console.log(JSON.stringify(Object.keys(barr)));

// uniqueInteger.counter = 0;
// This function returns a different integer each time it is

// function uniqueInteger() {
// return uniqueInteger.counter++; // Return and increment

// }
// uniqueInteger() // => 0
// uniqueInteger()
// console.log(uniqueInteger.counter)
// console.log(uniqueInteger.counter)

// const original = new Map([
//     [1, 'one']
//   ])
  
//   const clone = new Map(original)
  
// //   console.log(clone.get(1))       // one
// //   console.log(original === clone) 
// clone.set(1,"zero");
// console.log(clone.get(1));
// console.log(original.get(1));

// let arr = [];
// arr[200] = 16;
// console.log(arr.length);
// let a = '1234567890987654321234567890';

// let b = '9876543212345678909876543210';
// console.log((a+b));       //11111111103333333231111111100n
// console.log(typeof b);
// console.log(a);
// console.log(b);

// let x = 999999999999999;
// let y = 9999999999999999;
// console.log(x);
// console.log(y);
// // let a = Number.MAX_SAFE_INTEGER;

// console.log(a);
// console.log(JSON.stringify(a));
// let a = '1234567890987654321234567890';
// let b = '9876543212345678909876543210';

// function add27(a,b){
//     let s1 = a;
//     let s2 = b;
//     let n1 = s1.length-1;
//     let n2 = s2.length-1;
//     let carry =0;
//     let arr=[]
//     while(n1>=0&&n2>=0){
//         let num = carry+Number(s1[n1])+Number(s2[n2]);
//         carry = parseInt(num/10);
//         let res = num%10;
//         arr.push(res);
//         n1--;n2--;
//     }
//     if(n1>0)
//     {
//         let num = carry+Number(s1[n1]);
//         carry = parseInt(num/10);
//         let res = num%10;
//         arr.push(res);
//         n1--;
//     }
//     else if(n2>0)
//     {
//         let num = carry+Number(s2[n2]);
//         carry = parseInt(num/10);
//         let res = num%10;
//         arr.push(res);
//         n2--;
//     }
//     if(carry>0) arr.push(carry);
//     return arr.reverse().join('');
// }
// console.log(add27(a,b));     //11111111103333333231111111100

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// let setarr = new Set(values);
// console.log(setarr);

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// arr.sort();
// console.log(arr)
// let resset = new Set();
// for(let i in arr)
// {
//     let tempset = new Set(arr[i]);
//     resset.add(tempset);
// }
// let resarr = [];
// for(let i in resset)
// {
//     resarr.push(resarr.get(i).join(''));
// }
// console.log(resarr);
// let map = new Map();
// for(let i in arr){
//     let sorted = arr[i].toLowerCase().split("").sort();
//     let sorted1 = sorted.join('');
    
//     map.set(sorted1,arr[i]);
// }
// // for(const entries of map.entries()){
// //     console.log(entries,map.get(entries));
// // }
// let arr1 = map.keys();
// console.log(typeof arr1);
// let arr2 = Array.from(arr1);
// // console.log(typeof arr2);
// arr2.push("keie");
// console.log(arr2);

// let date =(new Date(2012,1,20,3,12,0,0));
// console.log( date.getDay() );

// now add 24 hours, get 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// alert( Jan02_1970 );

// let a = (n)=>{
//    return (n==1)? 1: n+a(n-1);
// }
// console.log(a(3));

// let sum =0;
// let a1 = (n)=>{
//     if(n==1) return 1;
//     else{
//          sum =n+a1(n-1);
//     }
//     return sum;
// }
// console.log(a1(4));

// function factorial(n){
//     return (n==0||n==1)?1:n*factorial(n-1);
// }
// console.log(factorial(5));
// let sum=[0,1];
// let fibonacci =(n,sum)=>{
//     if(n<2) return n;
//     let temp = fibonacci(n-1)+fibonacci(n-2)
//     sum.push(temp);
// }
// // ;
// console.log(fibonacci(5));

// let arr = [1,3,[4,5]];
// // console.log(toString.call(arr)==='[object Array]');
// let arr1=Array.of(arr);
// // console.log(arr1.toString());

// let n=025468;

// let arr = [...n.toString()]
// for(let i =1;i<arr.length;i++){
//     if(arr[i]%2==0&&arr[i-1]%2==0){
//         arr.splice(i,0,"-");
//     }
// }
// console.log(arr.join(""));
// console.log(NaN==NaN);


// let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let map = new Map();
// for(const v of arr1){
//     map[v]=(map[v]===undefined)?1:map[v]+1;
//     map.set(v,(map.get(v)===undefined)?1:map.get(v)+1);
// }
// console.log(map)
// for(const v of map){
//     console.log(v,map[v]);
// }
// console.log(map.get(6))
// arr1.sort();
// // console.log(arr1.join());
// let res = 0;
// let count = 1;
// for (let i =1;i<arr1.length;i++){
//     if(arr1[i]==arr1[i-1]){
//         count++;
//         res = Math.max(res,count);
//     }
//     else
//     count =1;
// }
// console.log(res);
// let res ='';
// let str = 'The Quick Brown Fox';
// for(let i =0;i<str.length;i++){
//     if(str[i]===str[i].toUpperCase())
// {
//     res+=str[i].toLocaleLowerCase();
// }
// else{
//     res+=str[i].toLocaleUpperCase();
// }
// }
// console.log(res);

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// for(let i=0;i<a.length;i++){
//     console.log(`row ${i}`);
//     for(let j=0;j<a[j].length;j++)
//         console.log(a[i][j]);
// }



// console.log('0'==true); //False
// // console.log(Boolean('0'));
// console.log(undefined==false);//False
// console.log(Boolean(undefined));

// let ar=[1,2,3,4,1,3,2,1]
// let m=new Map();
// for(let value of ar){
//     if(m.has(value)){
//         m.set(value,m.get(value)+1)
//     }
//     else{
//         m.set(value,1)
//     }
    
// }
// // console.log(m);
// console.log("1"==true)
// console.log(undefined==false)
// console.log(0==false)
// let res =0;
// let arr=[1, [2], [3, [[4]]],[5,6]];
// function flatDeep(arr, d = 1) {
//     return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
//                  : arr.slice();
//  };
//  console.log(flatDeep(arr,-1));
// let arr = [1, 2, 3],arr1=[100, 2, 1, 10]
// let res = new Set([...arr,...arr1]);
// console.log(res);


// var library = [ 
//     { author: 'Bill Gates', title: 'Walter Isaacson', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//     ];
// library.sort((a,b)=>{return a.title===b.title?a.libraryID>b.libraryID:a.title>b.title});
// for(const v of library){
//     console.log(v)
// }

// function num_string_range(a,b,c){
//     let res =[];
//     if(!c)  c=1;   
//     if(Number.isInteger(a)){
//         for(let i=a;i<=b;i+=c)
//             res.push(i);
//     }
//     else{
//         let x = a.codePointAt(0);
//         let y = b.codePointAt(0);
//         for(let i=x;i<=y;i+=c){
//             res.push(String.fromCharCode(i));
//         }
//     }
//     return res;
// }
// console.log(num_string_range('a','z',2));

// const unzip = arr =>
//   arr.reduce(
//     (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
//     Array.from({
//       length: Math.max(...arr.map(x => x.length))
//     }).map(x => [])
//   );
//   let res = unzip([['a', 1, true], ['b', 2, false]]);

  
//  let arr=[['a', 1, true,'c'], ['b', 2, false],[1,2,3,4,4]];
//  let s = arr.length;
//  let e =0;
//  for(const v of arr){
//     e = Math.max(e,v.length);
//  }
//  console.log(e);
//  let a = [...new Array(s)].map(x=>new Array(e));

// for(const v of arr){
//     for(const i in v){
//         a[i].push(v[i]);
//     }
// }
// // for(const v of a){
// //     console.log(v.length,v.join())
// //   }

// // setTimeout(() => console.log("never happens"), 1000);
// let user = {
//     firstName: "John",
//     sayHi() {
//       console.log(`Hello, ${this.firstName}!`);
//     }
//   };
//   user.sayHi();


// let a="abababababbvg";
// let arr=Array.from(a);
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==" "){
//         arr.splice(i,1);
//     }
// }
// for(let i=0;i<arr.length;i++){
//     let count=1;
//     let s = arr.length;
//     for(let j=i+1;j<s;j++){
//         if(arr[i]==arr[j]){
//             count++;
//             arr.splice(j,1)
//             j--;
//         }
//     }
//     console.log(`THe character is `+arr[i]+"  have  "+count);
// }



// let a = new Array(5,123,4,5);
// console.log(a.length);
// let a1 = new Array(5, 4, 3, 2, 1, "testing,jldasflds");
// console.log(a1.length);

// let b=new Array()
// console.log(b[0]);

// function user(name ,age,id){
//     return {
//     name : name ,
//     age:age,
//     id:id
// }
// }
// let a =user("deepak",23,4561);




// let ar=[1,2,,4,5]
// let res = ar.forEach((Value) => Value*2);
// console.log(ar);
// console.log(res);

// for(const v of ar)
// console.log(v*2);

// let user = (function(name,age,id){
//     let executed = false
//     return function(){ if(!executed) {this.name=name;this.age=age;this.id=id;executed=true}};
// })("Chandresh",45,4562);
// // let a = new user("deepak",24,4561);
// let b = new user();
// console.log(b);


//Working with class

// class range{
//     constructor(from,to){
//         this.from = from;
//         this.to = to;
//     }
//     includes(n){
//         return (n<=this.from&&n>=this.to);
//     }
//     toString(){
//         return `(${this.from}...${this.to})`;
//     };
// };
// let user = new range(2,5);
// console.log(user);
// console.log(user.toString());
// console.log(typeof user);

// function f(phrase) {
//     return class {
//       sayHi() { console.log(phrase); }
//     };
//   }
  
// class User extends f("Hello"){}
// let user = new User;
// user.sayHi()
// title = "my group";
// title = "my group"
// let group = {
// title: "Our Group",
// students: ["John", "Pete", "Alice"],

// showList() {
//   this.students.forEach(function(student) {
//     // Error: Cannot read property 'title' of undefined
//     console.log(this.title + ': ' + student);
//   });
// }
// };
// group.showList()
// let User = (name, age)=>{
//   this.name=name,
//   this.age=age
// }
// let user = new User("deepak",'age');
// console.log(user);

// function defer(f, ms) {
//   return function(...args) {
//     let ctx = this;
//     console.log(ctx);
//     console.log(args);
//     setTimeout(function() {
//       return f.apply(ctx, args);
//     }, ms);
//   };
// }
// function sayHi(who) {
//   console.log('Hello, ' + who);
// }

// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John");


// class User{
//   static count=0;
//   constructor(name,id){
//     this.name=name;
//     this.id=id;
//     this.count++;
//   }
// }
// let user1 = new User("Deepak",2341);
// let user2 = new User("Chandresh",4561);
// console.log(User.count);

// let  a=(b)=>{
//   b();
//   console.log("function a is called");
// }
// function b(a){
//   a();
//   console.log("function b is called");
// }
// a(b);