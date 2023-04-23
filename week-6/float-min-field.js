 export class floatMinField {
    constructor (name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }
 }

 function validate(){
    if (parseFloat(field)< min){
        return true;

        } else {
            return false;
        }
    }
 
    function getMessage (){
        return this.name + " must be morn than " + this.min;
    }

    