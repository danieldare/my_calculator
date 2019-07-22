const logic = (prevState) => {    
        if (prevState.operator === "+") {
                return {
                    input:  +prevState.prevNum + +prevState.currentNum
                }
        }
}


export default logic;