export class Cordinate{
    private _x: number;
    private _y: number;

    get x(){
        return this._x;
    }

    set x(value:number){
        if(value < 0 || value > 90)
            throw new Error("Qales toy bola");

        this._x = value;
    }

    get y(){
        return this._y;
    }

    set y(value:number){
        if(value < 0 || value > 90)
            throw new Error("Geografiya vashshe o'qimaganmisiz");
        this._y = value;
    }

    constructor(x?:number, y?:number){
        this._x = x;
        this._y = y;
    }

    print(){
        console.log(this._x + ' ' + this._y);
    } 
}
