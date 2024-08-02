
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.hero}>
        <h1 className={css.title}>Welcome to your personal contacts Website!</h1>
        <p className={css.subtitle}>
          Keep your contact book in a safe place
        </p>
        </div>
    </div>
  );
}