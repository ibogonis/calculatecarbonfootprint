import styles from "./Header.module.css";

function Header({header}){

    return(
    <div className='row text-center'>
        <h3 className={`${styles.header}`}>{header}</h3>
    </div>
    )
}

export default Header;