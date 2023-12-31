import styles from "./Select.module.css";

function Select({ text, name, options, handleOnChange, value, key }) {
  return (
    <div className={styles.select_control}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {options.map((option, id) => (
          <option value={option.id} key={id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
