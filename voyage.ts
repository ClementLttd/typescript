class Sejour{
    constructor(private _nom:string,private _prix:number){
    }

    get nom(){
        return this._nom;
    }
    
    get prix(){
        return this._prix;
    }
}

class SejourService{
    private _sejour:Sejour[];

    constructor(){
        this._sejour= [new Sejour('Montpellier',300), new Sejour('NYC', 2000)];
    }

    findSejourByName(nomSejour:string): Sejour{
        return this._sejour.filter(e=>e.nom===nomSejour).reduce(e=>e);
    }
}

const sejourService = new SejourService;
console.log(sejourService.findSejourByName('Montpellier'));