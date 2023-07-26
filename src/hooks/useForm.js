import { useReducer } from "react"

const formReducer = (state , action)=>{
    // codes
}


export const useForm = (initInputs , initFormIsValid) => {
    const [formState , dispatch] = useReducer(formReducer , {
        inputs : initInputs,
        isFormValid : initFormIsValid
    })

    const onInputHandler = (value , isValid)=> {
        dispatch({
            type: 'INPUT_CHANGE',
            value ,
            isValid
        })
    }

    return [formState , onInputHandler]
}