import styles from './Goals.module.css';

function Goals({header, goals}) {
    const mainGoals = goals;

return(
    <div className={`row ${styles.greenBlock}`}>
    <div className='col-12'>
      <div className='row text-center'>
        <h3 className={styles.header}>{header}</h3>
      </div>
      <div className='row align-items-center'>
       {mainGoals.map((goal, index) => {
            return (
            <div key={index} className={`col-md-4 col-12 ${styles.textPadding}`}>
            <h5 className={styles.smallHeader}>{goal.header}</h5>
            <p className={styles.Regular14}>{goal.description}</p>
          </div>)
            
        })} 
      </div>
    </div>
    </div>
)
}

export default Goals;