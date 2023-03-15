import styles from './Select.module.css'

function Select({text, name, placeholder, options, handleOnChange, value}) {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value}>
                <option>Selecione a Opção</option>
            </select>
        </div>
    )
}
export default Select;
