// khai bao bien
let soNguyen = 10;
let soThuc = 5.67;
let check = false;
let age;
let abc = null;

console.log(soNguyen);
console.log(typeof soNguyen);
console.log(typeof soThuc);
console.log(typeof check);
console.log(typeof age);
console.log(typeof abc);

// xuat ra so nguyen an toan toi da
console.log("so nguyen an toan toi da" + Number.MAX_SAFE_INTEGER);
console.log("so nguyen an toan toi da" + Number.MIN_SAFE_INTEGER);

// luyen tap
let a = 4,
  b = 3,
  kq = a * b;
// cach 1
console.log("ket qua la: " + kq);
// cach 2
console.log("ket qua la:", kq);

// cach 3
console.log(`ket qua la: ${kq}`);
// cach 4
console.log(`ket qua la: %s`, kq);
