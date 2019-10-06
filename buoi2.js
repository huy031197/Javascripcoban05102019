// (ARITHMETIC OPERATOR)

// 3 : Toan

// ++ -- + - * / %
// 1 : ++ --
// 2 : * / %
// 3 : + -


// var a = 5;
// a++ : gan truos roi tang gia tri len 1 va nguoc lai
// console.log(++a)

// BaiTap1 dien tich tam giac
// var a = 10;
// var h = 20;
// var dt = s;
// var s = a * h /2;
// console.log(s)

// PHEP TINH TANG GIAM
// var a = 5
// var b = 6
// var ketqua = ++a - ++b * --a + --b + b++ * a++ - --a (gan gia tri tung buoc)
//  console.log(ketqua)

// PHEP GAN 
// var a = 5
// var b = 6
// // a=b=8
// a *=2 tuc la a = a*2
// chia lay phan du 
// b %=2
// console.log(b)

// FUNCTION
// function dientichTamGiac(a, h){
//     var s = a * h /2
//     return rong hoac ko co thi method tra ve gia tri undefined
//     return s
// }
// console.log(dientichTamGiac (5,10))

// OBJECT METHOD
// var thanhhuy = {
//     name : "Thanh Huy",
//     age : 35,
//     info : function (){
//         console.log("Ten : "+ this.name + "Tuoi :" + this.age)
//     }
// }
// thanhhuy.info()

// const rectangle = {
//     width : 10 ,
//     height : 15 ,
//     getWidth : function(){
//         return this.width
//     },
//     getHeight : function(){
//         return this.height
//     },
//     getArea : function(){
//         return this.width * this.height 
//     }
// }
// console.log(rectangle.getWidth())
// console.log(rectangle.getHeight())
// console.log(rectangle.getArea())

//CAC PHEP TOAN SO SANH
// gia tri bang false : null, 0, false, undefined, ""
// var a = 5
// var b = 6
// if(a==5){
//     console.log("true")
// }else{
//     console.log("false")
// }

// var a = '2000';
// var b = '201';
// console.log(a>b)
// so sanh chuoi tren thi 1000<200 vi so sanh ki tu dau tien vi 1<2 nen a<b

// VONG LAP

// for (var i = 0; i < 10 ; i++){
//     console.log(i)
// }
// thu viet in gia tri giam
// var array = [1, 2, 4, 8, 16]
// for (var i = array.length-1; i>=-1; i--){
//     console.log(array[i])
// }


// /**
//  * Sử dụng vòng lặp for để tính tích của các phần tử của array a với các phần tử của array b Kết quả mong muốn:
//  * 10
//  * 20
//  * 30
//  * ...
//  * 20
//  * 40
//  * 60
//  * ...
//  * Gợi ý: Dùng nested for loops (các vòng lặp lồng nhau)
// var a = [1, 2, 3, 4, 5];
// var b = [10, 20, 30];
// for (var i=0; i<b.length;i++){
//     for(var y=0; y<a.length; y++){
//         console.log(b[i] * a[y]);
//     }
// }

/**
 * Viết function trả về tích các số từ start đến end, không tính end 
 * Ví dụ: console.log(calculate(2, 5)) sẽ hiển thị ra màn hình 24 (vì 2 * 3 * 4 = 24)
 */
// function calculate(start, end) {
//     var tich = 1;
//   for (var i = start; i < end ; i++)
//   {
//       tich *= i
//   }
//   return tich
// }
// console.log(calculate(2, 5))

// FOR IN , FOR OF

// const huy = {
//     name : "huy",
//     age : 25,
//     location : "Tien Giang"
// }

// for(var key in huy){
//     console.log(key)
// }

// var name = "name"
// if(name in huy){
//     console.log("co")
// }

// const arrayNumbers = [1,2,3,4,5,6]
// for(var value of arrayNumbers){
//     console.log(value)
// }





