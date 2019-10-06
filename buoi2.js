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
var thanhhuy = {
    name : "Thanh Huy",
    age : 35,
    info : function (){
        console.log("Ten : "+ this.name + "Tuoi :" + this.age)
    }
}
thanhhuy.info()
