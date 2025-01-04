import Input from "./Input";
import inputsData from "./inputsData";
import { useState } from "react"

function Form() {
    const [inputs, setInputs] = useState(inputsData);

    const inputElements = inputs.map(input => {
        const emailErrorString = input.type === "email"
            ? "Looks like this is not an email" : "";

        const errorString = emailErrorString
            ? emailErrorString : `${input.placeholder} cannot be empty`;

        return (
            <Input
                key={input.id}
                id={input.id}
                error={input.error}
                type={input.type}
                placeholder={input.placeholder}
                errorString={errorString}
                onChange={handleChange}
            />
        )
    })
    function handleClick(event) {
        event.preventDefault();
        // get rid of the focus state...
        document.querySelectorAll(".input-box")
            .forEach(box => {
                box.classList.remove("focused")
            })

        const firstName = document.getElementById("1")
        const lastName = document.getElementById("2")
        const email = document.getElementById("3")
        const password = document.getElementById("4")

        // ahhhhhhh man!!! I know too many variables!!!
        const inputValues = [firstName, lastName, email, password]


        inputValues.forEach(input => {
            const invalidEmail = input === email && !/\S+@\S+\.\S+/.test(input.value)

            if (!input.value.trim() || invalidEmail) {
                setInputs(prev => prev.map(item => {
                    return item.id === Number(input.id) ? { ...item, error: true } : item
                }))
            }
            else {
                setInputs(prev => prev.map(item => {
                    return item.id === Number(input.id) ? { ...item, error: false } : item
                }))
            }
        })
    }
    function handleChange(id) {
        const inputBox = document.getElementById(id).parentElement;

        // add some styles for the focus state dude...
        inputBox.classList.add("focused");

        // get rid of the erro state...
        setInputs(prev => prev.map(item => {
            return item.id === id ? { ...item, error: false } : item
        }))
    }

    return (
        <form>
            <h2><b>Try it free 7 days</b> than $20/mo.thereafter</h2>
            <fieldset>
                {inputElements}
                <button onClick={handleClick}>
                    CLAIM YOUR FREE TRIAL
                </button>
                <p>By clicking th button, you are agreeing to our <em>Terms and Services</em></p>
            </fieldset>
        </form>
    )
}

export default Form;