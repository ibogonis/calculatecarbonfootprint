import styles from './Card.module.css';

function Card({imageToRender, header, text, reverse}) {
    return(
        <div className='row justify-content-md-center'>
          <div className='col-md-10 col-12'>
            <div className={styles.card}>
              <div className={`row ${reverse}`}>
                <div className='col-md-6 col-12 align-self-center'>
                 <h3 className={`${styles.header}`}>{header}</h3>
                 {text.map((el, index) => {
                  return (
                  <p key={index} className={`${styles.text}`}>{el}</p>
                  )
                  })}
               </div>
               <div className='col-md-6 col-12'>
                  {imageToRender}
               </div>
              </div>
            </div>
          </div> 
        </div>
    )
}

export default Card;