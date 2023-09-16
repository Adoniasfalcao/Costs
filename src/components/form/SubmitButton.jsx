import styles from './SubmitButton.module.css'

function SubmitButton ({ text }) {
    return(
        <button className={styles.SubmitButton}>{ text }</button>
    )
}

export default SubmitButton 