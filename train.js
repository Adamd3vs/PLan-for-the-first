//task E 
function getreverse(string) {
  return string.split('').reverse().join('');
}
  console.log(getreverse('string'));
//task D
// function checkContent(string1, string2) {
//   return string1.split("").sort().join("") === string2.split("").sort().join("");
// }
// console.log(checkContent("ol", "lol")); // false


//task C
// class Shop {
//     constructor(non, lagmon, cola) {
//       this.non = non;
//       this.lagmon = lagmon;
//       this.cola = cola;
//     }
  
//     vaqt() {
//       return new Date().toLocaleTimeString(); // Hozirgi vaqtni chiqaradi
//     }
  
//     qoldiq() {
//       console.log(
//         `Hozir ${this.vaqt()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`
//       );
//     }
  
//     sotish(mahsulot, miqdor) {
//       if (this[mahsulot] >= miqdor) {
//         this[mahsulot] -= miqdor;
//         console.log(`Hozir ${this.vaqt()}da ${miqdor}ta ${mahsulot} sotildi.`);
//       } else {
//         console.log(`Hozir ${this.vaqt()}da yetarli ${mahsulot} yo'q!`);
//       }
//     }
  
//     qabul(mahsulot, miqdor) {
//       this[mahsulot] += miqdor;
//       console.log(`Hozir ${this.vaqt()}da ${miqdor}ta ${mahsulot} qabul qilindi.`);
//     }
//   }
  
//   // Foydalanish
//   const shop = new Shop(4, 5, 2);
//   shop.qoldiq();
//   shop.sotish("non", 3);
//   shop.qabul("cola", 4);
//   shop.qoldiq();
  


//task B
//  function countDigits(string) {
//     let count = 0; //var
//     for (let i = 0; i < string.length; i++) { 
//         let char = string[i]; // hamma belgini 1dan olish ucn
//         if (char >= '0' && char <= '9') { // raqam yoki yoqligini tekshiradi
//             count++; // son qushib boradi 
//         }
//     }
//     return count; // umumiysini sanaydi
// }

// console.log(countDigits("Mir13ja122"));
