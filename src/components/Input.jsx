import { useState } from "react"

function Input(props) {
    const errorStyles = {
        borderColor: "hsl(0 100% 74%)",
        borderWidth: "2px",
    }


    const errorFontColor = {
        color: "hsl(0 100% 74%)",
    }


    return (
        <div className="input-error-box">
            <div className="input-box" style={props.error ? errorStyles : {}}>
                <input
                    style={props.error ? errorFontColor : {}}
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    data-error-id={props.errorId}
                    required
                    onChange={() => { props.onChange(props.id) }}
                />
                {props.error ? <img src="./images/icon-error.svg" alt="icon-error" /> : null}
            </div>
            {props.error ? <em className="error">{props.errorString}</em> : null}
        </div>
    )
}

export default Input;