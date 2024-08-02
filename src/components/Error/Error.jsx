import css from "./Error.module.css"
export default function Error({ message }) {
    return <p className={css.text}>{message}</p>
}