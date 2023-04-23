export class requiredField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
}

function validate(){
    if (this.field === String){
        return true;
    } else {
        return false;
    }
}

function getMessage(){
    return this.name + " is a required field";
};

