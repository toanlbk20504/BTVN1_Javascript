
/* Câu 1
Input : Số ngày đi làm
Step : 
    s1: tạo ra biến chứa số ngày đi làm
    s2: lấy số ngày đi làm nhân 100.000
Output : Tiền lương */
var day=26;
var selary=null;
selary=day*100000;
console.log('selary: ', selary);
/* Câu 2 
Input: Năm số thực 
Step:
    s1: tạo ra 5 biến chứa 5 số thực
    s2: tính trung bình cộng của 5 biến trên
Output: Giá trị trung bình */ 
var num1=1 
var num2=2 
var num3=3 
var num4=4 
var num5=5 ;
var average=null;
average=(num1+num2+num3+num4+num5)/5;
console.log('average: ', average);
/* Câu 3
Input: Nhập số đô cần đổi 
Step: 
    s1: tạo ra biến chứa số đô cần đổi 
    s2: lấy số đô đó nhân với 23.500
Output: Tiền vnd */
var dollar=5;
var vnd=null;
vnd=dollar*23500;
console.log('vnd: ', vnd);
/* Câu 4
Input: chiều dài và rộng của hcn 
Step:
    s1: tạo 2 biến chứa 2 cạnh
    s2: tính diện tích 
    s3: tính chu vi
Output: Diện tích và Chu vi */
var chieuDai=8;
var chieuRong=6;
var dienTich=null;
var chuVi=null;
dienTich=chieuDai*chieuRong;
console.log('dienTich: ', dienTich);
chuVi=(chieuDai+chieuRong)*2;
console.log('chuVi: ', chuVi);
/* Câu 5
Input: Số có 2 chữ số 
Step: 
    s1: lấy phần chục của số
    s2: Lấy phần đơn vị của số
    s3: Tính tổng của hàng chục và hàng đơn vị
Output: Tổng 2 ký số */
var so=78;
var phanChuc=null;
phanChuc=Math.floor(so/10);
phanDonvi=so%10;
var tong=phanChuc+phanDonvi;
console.log('tong: ', tong);




