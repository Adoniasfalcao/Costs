import { useState } from 'react'
import styles from './Input.module.css'

function Input ({ type,text,name,placeholder,handleOnChange,value }) {

    const [focus, setFocus] = useState(false)
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
            className={focus ? 'OnFocus' : 'FocusOff'}
            type={type} 
            placeholder={placeholder} 
            id={name} 
            name={name} 
            onChange={handleOnChange} 
            value={value} 
            maxLength={20}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}

            ></input>
        </div>
    )
}

export default Input