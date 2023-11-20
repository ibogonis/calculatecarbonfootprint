import styles from './About.module.css';

function About({title, text}) {
    return(
        <div className={`row justify-content-md-center ${styles.greyBlock}`}>
      <div className='col-md-10 col-12'>
      <h3 className='text-center'>{title}</h3>
      <p className={styles.aboutText}>{text}</p>
      </div>
    </div>
    )
}

export default About;