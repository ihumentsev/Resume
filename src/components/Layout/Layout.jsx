import css from './Layout.module.css';
export default function Layout({ children }) {
  return (
    <main className={css.main_content}>
      <div className={css.container}>
        <div className={css.wraper_content}>{children}</div>
      </div>
    </main>
  );
}
