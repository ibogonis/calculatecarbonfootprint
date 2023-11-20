import styles from './Ingredient.module.css';
import { motion } from 'framer-motion';

function Ingredient(props) {
    return(
            <motion.li 
            className={`list-group-item ${styles.monFont}`} 
            id={props.id}
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 1}}
            exit={{opacity: 0, y: 30 }}
            >
                <div className="row align-items-center">
                <div className="col-md-6 col-5">
                <select value={props.ingredient} className="form-select shadow-sm p-2 bg-white rounded border-0" onChange={props.onSelect} required>
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                </div>
                <div className="col-md-6 col-7">
                    <div className="row align-items-center">
                        <div className="col-md-10 col-10">
                            <input type="number" value={props.weight} className="form-control shadow-sm p-2 bg-white rounded border-0" placeholder="Weight" aria-label="Weight" onChange={props.onChangeWeight} required min={1}/> 
                </div>
                <div className="col-md-2 col-1">
                    <span className={styles.aFont}>g</span>
                </div>
                
                </div>
                </div>
                </div>
                <div className="row">
                <p style={{ color: 'red', paddingTop: '5px' }}>{props.error}</p>
                </div>
            </motion.li>
    );
}

export default Ingredient;