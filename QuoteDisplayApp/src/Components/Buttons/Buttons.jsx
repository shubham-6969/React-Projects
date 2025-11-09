import styles from './Buttons.module.css'


const Buttons = (props) => {

    const {text, onClick} = props

    return (
        <button className={styles.btn} onClick={onClick}>
            {text}
        </button>
    )
}

export default Buttons