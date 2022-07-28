// // function to convert exponential to decimal

// let a = 1234567890987654321234567890
// function e_to_dec(n){
//     let a = String(n);
//     let arr = a.split("e");
//     let arr1 = arr[0].split(".");
//     console.log(arr);
//     console.log(arr1);
//     let n1=Number(arr[1]);
    
//     if(n1>=0){
//         let n2 =arr1[1].length;
//         let temp = arr1[1]
//         if(n1>n2){
//             for(let i=1;i<=n1-n2;i++)
//                 temp+="0";
//             console.log(arr1[0]+temp);
//         }
//         else if(n2>n1){
//             temp=temp.split("");
//             temp.splice(n2-n1,0,".");
//             let temp1=""
//             for(let i=0;i<temp.length;i++) temp1+=temp[i];
//             // console.log(temp1);
//             console.log(arr1[0]+temp1);
//         }
//     }
//     else{
//         let l = Math.abs(n1);
//         let temp = '0.'
//         let n2 = arr1[0].length;
//         let temp1=Number(arr1[0]);
//         if(l>=n2){
//             for(let i=1;i<=l-n2;i++) temp+="0";
//             if(temp1>=0)
//             console.log(temp+temp1+arr1[1]);
//             else{
//                 temp1=Math.abs(temp1);
//                 console.log("-"+temp+"0"+temp1+arr1[1]);
//             }
//         }
//         else{
//             let temp = arr1[0];
//             temp = temp.split("");
//             temp.splice(-l,0,".");
//             let temp1=""
//             for(let i=0;i<temp.length;i++) temp1+=temp[i];
//             console.log(temp1+arr1[1]);

//         }
//     }
// }
// e_to_dec("-4.65661287307739e-10");

// //2. closures 1

// let user = (function(name,age,id){
//     let executed = false
//     return function(){ if(!executed) {this.name=name;this.age=age;this.id=id;executed=true} else{console.log("this function cannot be called twice")}};
// })("Chandresh",45,4562);

// let b = new user();
// console.log(b);
// let a1 = new user("deepak",24,4561);
// console.log(a1);


// // closures 2
// function User(){
//     let count=0;
//     return ()=>{return ++count;}
// };
// let user1 = User();
// console.log(user1());
// console.log(user1());
// console.log(user1());


// 3 object cloning
let id1 = Symbol("Value");
let user2 = {
    name:"deepak",
    age:"23",
    department:{
        dept:"IT",
        id:123
    },
    counter(){
        console.log("COunter funtion is called");
    },
   
    [id1]:123452,
    arr : [1.2,3,4,5]

}
// let user3 = Object.fromEntries(Object.entries(user2));
// console.log(user3);
// console.log(user3.department.dept);
// user3.department.dept="CSE";
// console.log(user3.department.dept);
// console.log(user2.department.dept);

// let user3 = JSON.parse(JSON.stringify(user2));
// console.log(user3);
// console.log(user2[id1]);
// user3.department.dept = "CSE";
// user3.department.id = 456;
// console.log(user3.department.dept );
// console.log(user2.department.dept );
// user2.itself = user2;
// let user3 = structuredClone(user2);
// console.log(user2);
// console.log(user3);

// let arr = [1.2,3,4,5];
// // let arr1 = Object.assign({},arr)
// // console.log(arr);
// // console.log(arr1);

// let arr1=[].concat(arr);
// console.log(arr==arr1);
// console.log(typeof arr);


function superclone(object){
    if(object===null)   return null;
    let clone = {};
    Object.keys(object).map(pro=>{
        if(Array.isArray(object[pro])){
            clone[pro]=[].concat(object[pro]);
        }
        else if(typeof object[pro]==='object'){
            clone[pro]=superclone(object[pro]);
        }
        else{
            clone[pro]=object[pro];
        }
    })
    return clone;
}
let user3 = superclone(user2);
console.log(user3);