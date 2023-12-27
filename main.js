"use strict";
// console.log('Qales');
Object.defineProperty(exports, "__esModule", { value: true });
// function sonlarniChiqar(){
//     for(let i = 0; i< 10; i++){
//         console.log(i)
//     }
// }
// sonlarniChiqar()
// //Interface
// interface ICordinate{
//     x: number;
//     y: number;
// }
// function GetCordinate(cordinate:ICordinate){
//     console.log(cordinate.x + ' ' + cordinate.y);
// }
// GetCordinate({x:1,y:5});
// //Class
// interface ICordinate{
//     x: number;
//     y: number;
//     print():void;
// }
// class Cordinate implements ICordinate{
//     x: number;
//     y: number;
//     print(){
//         console.log(this.x + ' ' + this.y);
//     } 
// }
// let cor = new Cordinate;
// cor.x = 10;
// cor.y = 20;
// cor.print();
// //Constructor
// class Cordinate{
//     private x: number;
//     private y: number;
//     constructor(x:number, y:number){
//         this.x = x;
//         this.y = y;
//     }
//     print(){
//         console.log(this.x + ' ' + this.y);
//     } 
// }
// let cor = new Cordinate(1,2);
// cor.print();
// //Property
// class Cordinate{
//     private _x: number;
//     private _y: number;
//     get x(){
//         return this._x;
//     }
//     set x(value:number){
//         if(value < 0 || value > 90)
//             throw new Error("Qales toy bola");
//         this._x = value;
//     }
//     get y(){
//         return this._y;
//     }
//     set y(value:number){
//         if(value < 0 || value > 90)
//             throw new Error("Geografiya vashshe o'qimaganmisiz");
//         this._y = value;
//     }
//     constructor(x?:number, y?:number){
//         this._x = x;
//         this._y = y;
//     }
//     print(){
//         console.log(this._x + ' ' + this._y);
//     } 
// }
// let cor = new Cordinate(5,55);
// cor.x = -4;
// cor.y = 45;
// cor.print();
var Cordinate_1 = require("./Cordinate");
var cor = new Cordinate_1.Cordinate(5, 55);
cor.x = 4;
cor.y = 45;
cor.print();
