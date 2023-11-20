import styles from './Calculator.module.css';
import IngredientList from './IngredientList';
import { useState, useRef } from 'react';
import {ReactComponent as GreenLoop} from '../../svg/greenLoop.svg';
import {ReactComponent as OrangeLoop} from '../../svg/orangeLoop.svg';
import {ReactComponent as RedLoop} from '../../svg/redLoop.svg';
import Result from './results/Result';



function Calculator() {
  const resultRef = useRef(null);

  const[receivedResult, setReceivedResult] = useState(false);

  const[resultForm, setResultForm] = useState('');

  const resultOptions = [{image: <GreenLoop />, amount: 106, text: 'Please note that your food-related carbon footprint is in the High range. This suggests that there is room for improvement in terms of adopting more sustainable dietary choices to minimize your environmental impact. Consider exploring options to reduce carbon-intensive food items and incorporate more sustainable alternatives into your diet.', colorStyle: 'rgba(67, 212, 82, 1)'}, 
  {image: <OrangeLoop />, amount: 800, text: 'Your food-related carbon footprint is currently in the Low to Moderate range. This indicates that you are making commendable efforts to adopt sustainable dietary practices and reduce your environmental impact.', colorStyle: 'rgba(255, 96, 6, 1)'}, 
  {image: <RedLoop />, amount: 1600, text: 'Please note that your food-related carbon footprint is in the High range. This suggests that there is room for improvement in terms of adopting more sustainable dietary choices to minimize your environmental impact. Consider exploring options to reduce carbon-intensive food items and incorporate more sustainable alternatives into your diet.', colorStyle: 'rgba(255, 6, 6, 1)'}
  ];

  const handleResult = (responseData) => {
    setReceivedResult(true);
    setResultForm(<Result {...resultOptions[responseData]} />);
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }
    return(
        <>
        <div className={`row justify-content-md-center ${styles.greenBlock}`}>
      <div className={`col-md-10 col-11 m-auto mt-5 ${styles.whiteBlock}`}>
        <div className={`row text-center ${styles.headerCalc}`}>
          <h3 className={`${styles.headerCalculator}`}>Calculate the carbon footprint of your meal!</h3>
          </div>
          <div className={`row ${styles.calcBlock}`}>
            
            <IngredientList handleResult={handleResult} />
           
          </div>
        </div>
        </div>

<div className={`row justify-content-md-center ${styles.greenBackground}`} ref={resultRef}>
        { receivedResult && <div className='col-12 text-center'>
          <h3 className={`${styles.header} ${styles.whiteText} ${styles.greenBlock}`}>Results</h3>
          </div>}
        </div>
        <div className={`row justify-content-md-center pb-5 ${styles.greenBackground}`}>
        <div className={`col-md-10 col-11 m-auto ${styles.whiteBlock} ${styles.margin50}`}>
          <div className='row rounded'>
           {receivedResult && resultForm }
          </div>
      </div>
    </div>
    </>
    )
}

export default Calculator;