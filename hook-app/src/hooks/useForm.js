import { useState } from "react"

export const useForm = ( initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState)

    const hanldeInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
    }

    return [ formValues, hanldeInputChange, handleSubmit]
}
