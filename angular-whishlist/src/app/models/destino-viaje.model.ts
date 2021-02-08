export class DestinoViaje {
    //nombre:string; imageUrl:string; 
    //No son necesarias declararlas si las agregamos como 'public' en el constructor
    private selected!: boolean;
    public servicios: string[];
    constructor(public nombre: string, public imageUrl:string) {
        //this.nombre = n; this.imageUrl = u;
        //Ya no son necesarios con el 'public'
        this.servicios = ['pileta', 'desayuno'];
    }
    isSelected():boolean{
        return this.selected;
    }
    setSelected(s: boolean){
        this.selected = s;
    }
}