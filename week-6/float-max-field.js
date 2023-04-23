export class floatMaxField {
    constructor (name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }

}

function validate(){

    if (parseFloat(field) < max){
        return true;
    } else {
        return false;
    }

}

function getMessage (){
    return this.name + " must be less than " + this.max;
}
