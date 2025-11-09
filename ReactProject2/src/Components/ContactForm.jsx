import Button from './Button';
import styles from './ContactFrom.module.css';
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import ContactImage from "../Images/Service 24_7.png"
import { useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState("Codex");
    const [email, setEmail] = useState("codex123@gmail.com");
    const [text, setText] = useState("Codex allways with you");



    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value)
        setEmail(event.target[1].value);
        setText(event.target[2].value);

    }


    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button
                        text="VIA CALL" icon={<IoCall fontSize="24px" />} />
                </div>
                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM"
                    icon={<IoIosMail fontSize="24px" />} />
                <form onSubmit={onSubmit}
                >
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="name" name='name' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="name">E-MAIL</label>
                        <input type="email" name='name' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">TEXT</label>
                        <textarea name='text' rows="5" />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end"
                    }}>
                        <Button text="SUBMIT" />
                    </div>
                    <div>
                        {
                            `${name} ${email} ${text}`
                        }
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src={ContactImage} alt="Contact image" />
            </div>
        </section>
    )
}

export default ContactForm