import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";

export default function UserMenu() {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logOut())
  }
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {users.name}</p>
      <button className={css.button} type="button" onClick = {handleClick}> Logout
      </button>
    </div>
  );
}