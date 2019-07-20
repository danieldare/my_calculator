export const logic = (total, next, operand) => {
    if(operand === "+"){
        return total + next;
    }else if(operand === "-"){
        return total - next;
    }else if(operand === "/"){
        return total / next;
    }else if(operand === "*"){
        return total * next;
    }
}