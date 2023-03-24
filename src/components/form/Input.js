import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
        <input
            type={type}
            id={name}
            name={name}
            min={1}
            max={5}
            defaultValue={1}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}/>
        </div>
    )
}
export default Input;
