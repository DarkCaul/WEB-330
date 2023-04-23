import {requiredField} from "./required-field";
import {floatFeild} from "./float-feild";
import {floatMinField} from "./float-min-field";
import {floatMaxField} from "./float-max-field";

const validators =[];
const messages = [];

construtor(name, field)
this.name = name;
this.field = field;

function addRequiredField(){
    this.validators.push(new requiredField(this.name, this.field));

}
function requiredFloatField(){
    this.validators.push(new floatFeild(this.name, this.field));

}

function addFloatMinField(min){
    this.validators.push(new floatMinField(this.name, this.field, min));
}
function addFloatMaxField(max){
    this.validators.push(new floatMaxField(this.name, this.field, max));
}

function validate(){
    for (let requiredField of validators) {

        return getMessages(messages);
    }

    for (let floatFeild of validators) {

        return getMessages(messages);
    }

    for (let floatMinField of validators) {

        return getMessages(messages);
    }

    for (let floatMaxField of validators) {

        return getMessages(messages);
    }

}

return true;
