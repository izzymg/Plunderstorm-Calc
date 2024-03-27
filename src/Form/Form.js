import { useRef, useState } from 'react'
import styles from './Form.module.css'

export default function Form() {

    const initName = () => {
        return "your name"
    }

    let [name, setName] = useState(initName)
    let timer = useRef(0)
    const onTextAreaChange = (ev) => {
        setName("...")
        clearTimeout(timer.current)
        // set timer
        timer.current = setTimeout(() => {
            setName(val => val = ev.target.value)
        }, 600)
    }

    return (
        <>
            <h2>hello! {name}</h2>
            <textarea onChange={onTextAreaChange} placeholder='who are you?' className={styles.textarea}></textarea>
        </>
    )
}