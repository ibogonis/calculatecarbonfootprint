import styles from './Result.module.css';
import { motion } from 'framer-motion';

function Result({image, amount, text, colorStyle}) {
    
    return(
        <motion.div className="col-md-12" initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
            <div className="row align-items-center m-2">
                <div className="col-md-4">
                  {image}
                </div>
                <div className="col-md-8 text-center mt-5">
                    <h6 className={`${styles.header}`}><span className={`${styles.text}`} style={{color: colorStyle}}>{amount}</span> gCO2e</h6>
                    <p className={`${styles.description}`}>{text}</p>
                </div>
            </div>
        </motion.div>
    )

}

export default Result;