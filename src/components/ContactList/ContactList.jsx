import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);
    return (
        <ul className={css.list}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} {...contact} />
            ))}
        </ul>
    );
}