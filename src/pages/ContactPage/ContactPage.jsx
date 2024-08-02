import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";

export default function ContactPage() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (<div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <Loader/>}
        {isError && <Error message={isError}/>}
        <ContactList />
    </div>);
}