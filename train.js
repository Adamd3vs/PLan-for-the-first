// // console.log("Jack Ma maslahatlari");
// // const list = [
// //     "yaxshi talaba buling",
// //     "tugri boshliq tanlang va koproq xato qiling ",
// //     "uzingizga ishlashingizni boshlang",
// //     "siz kuchli bulgan narslarni qiling",
// //     "yoshlarga investitsiya qiling",
// //     "endi dam oling, foydasi yoq",
// // ];
// // function maslahatbering(a, callback) {
// //     if (typeof a !== 'number') callback("pls insert a number", null);
// //     else if (a <= 20) callback(null, list[0]);
// //     else if (a >20 && a<=30) callback(null,list[1]);
// //     else if (a >30 && a<=40) callback(null, list[2]);
// //     else if (a >40 && a<=50) callback(null, list[3]);
// //     else if (a >50 && a<=60) callback(null, list[4]);
// //     else {
// //         setTimeout(function () {callback(null, list[5]);
// // },5000);
// // }
// // }
// // console.log("passed here 0");
// // maslahatbering(65,(err,data) => {
// //     if(err) console.log("error:",err);
// //     else {console.log("javob:",data); 

// const { rejects } = require("assert");

// //     } 

// // });

// console.log("'passed here'");

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba buling",
//     "tugri boshliq tanlang va koproq xato qiling ",
//     "uzingizga ishlashingizni boshlang",
//     "siz kuchli bulgan narslarni qiling",
//     "yoshlarga investitsiya qiling",
//     "endi dam oling, foydasi yoq",
// ];
// async function maslahatbering(a) {
//     if (typeof a !== 'number') throw new Error("pls insert a number");
//     else if (a <= 20) return list[0];
//     else if (a >20 && a<=30) return list[1];
//     else if (a >30 && a<=40) return list[2];
//     else if (a >40 && a<=50) return list[3];
//     else if (a >50 && a<=60) return list[4];
//     else { 
//         return new Promise((resolve, reject) => {
//             setInterval(()=>{
//                 resolve(list[5]);
//             },1000);
//             });
//         }}
// console.log("passed here 0");
// maslahatbering(65).then(data=> {
//     console.log("javob:", data);
// }).catch(err=> {
//     console.log("Error:", err);
// });
// console.log("'passed here1"); 

// async function run() {
//     let = javob = await maslahatbering(70);
//     console.log(javob);
//     javob = await maslahatbering(62);
//     console.log(javob);
//     javob = await maslahatbering(49);
//     console.log(javob);    
// }
// run();



// task A 
function checker(letter,word){
    let count = 0;
    for(let char of word) { //usha matn ichidagi har bir belgi ni tekshirish uchun men for ichida char ni ishlatdim
        if(char===letter) {//agar char ni qiymati letternikiga teng bulsa 
            count++;//count bilan bitta keyingisiga utish uchun hisoblaymiz 
        }
    }
    return count; //sonini qaytarish uchun return qilamiz
 
}
console.log(checker("b","bob")); //oxirida checker
