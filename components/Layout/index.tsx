import styles from "./styles.scss";

const Layout = (props) => {
    return (
      <div className={styles.container}>
        {props.children}
      </div>
    );
  
}

export default Layout;
