export class floatField {
    constructor (name, field) {
        this.name = name;
        this.field = field;
    }
}

function validate () {
    if (isNaN(field)) {
        return false;
    } else {
        parseFloat(field);
    }
    
}

function getMessage () {
    return this.name + " must be a float value. you entered " + this.field;
}