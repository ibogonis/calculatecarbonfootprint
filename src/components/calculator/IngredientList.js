import { useState } from "react";
import Ingredient from "./Ingredient";
import styles from './IngredientList.module.css';
import { motion } from 'framer-motion';
import { AnimatePresence } from "framer-motion";


const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  }

function IngredientList(props) {
 
  const [ingredients, setIngredients] = useState([{ ingredient: "", weight: "", id: generateKey("ingredient"), error: '' }]);
  
  //CalculateNutritionScore
  const calculate = (selectedIngredients) => {
    //fetch('http://url', {
    //  method: 'POST',
     // body: JSON.stringify(selectedIngredients),
     // headers: {
    //    'Content-Type': 'application/json'
   //   }
   // }).then(response => response.json()).then(data => {
    //  const result = data;
   // props.handleResult(result);
 // }).catch(error => {
    //console.error('Error:', error);
 // });

 //dummy function - should be deleted if there is backend response
 
  const components = [0, 1, 2];
  const randomIndex = Math.floor(Math.random() * components.length);
  const result = components[randomIndex];
  props.handleResult(result);
    }
  

  const handleForm = (e) => {
    e.preventDefault();
    console.log(ingredients);

//check for empty values and update the state with errors

const updatedIngredients = ingredients.map(ingredient => {
  const ingredientValue = ingredient.ingredient.trim();
  const weightValue = parseFloat(ingredient.weight.trim());
  if (ingredientValue === '' || weightValue === '') {
    return {...ingredient, error: 'Please fill in both fields' };
  } else if (weightValue < 0) {
    return {...ingredient, error: 'Please enter a valid weight greater than 0'}
  } else {
    return {
      ...ingredient, error: ''
    };
  }
});

// If there are errors, don't proceed with the calculations
if (updatedIngredients.some(ingredient => ingredient.error !== '')) {
  setIngredients(updatedIngredients);
  return;
}


// No errors, proceed with the calculation
    setIngredients(updatedIngredients);
    const selectedIngredients = updatedIngredients.filter(ingredient => ingredient.ingredient.trim() !== "" & ingredient.weight.trim() !== "");
    console.log(selectedIngredients);
    calculate(selectedIngredients);
    }
  
  const handleAddIngredient = (event) => {
    event.preventDefault();
    setIngredients([...ingredients, { ingredient: "", weight: "", id: generateKey("ingredient") }]);
  }

  const selectIngredient = (id, event) => {
    const updatedIngredients = [...ingredients];
   const selectedIngr = updatedIngredients.find(ingredient => ingredient.id === id);
    selectedIngr.ingredient = event.target.value;
    setIngredients(updatedIngredients);
    
  }

  const changeWeight = (id, event) => {
    const updatedIngredients = [...ingredients];
    const selectedIngr = updatedIngredients.find(ingredient => ingredient.id === id);
    selectedIngr.weight = event.target.value;
    setIngredients(updatedIngredients);
  }

  const handleRemove = (id) =>{
    const updatedIngredients = [...ingredients];
    const newUpdatedIngredients = updatedIngredients.filter(ingredient => ingredient.id !== id);
    setIngredients(newUpdatedIngredients);
  }

  

  return (
    <div className="col-12 p-4">
      <form id="calculator">
        <div className={`row ${styles.paddingLeft2}`}>
          <div className="col-md-4 col-5">
            <h5 className={`${styles.header}`}>Ingredients List</h5>
          </div>
          <div className="col-md-4 col-7">
          <h5 className={`${styles.header}`}>Amount</h5>
          </div>
          <div className="col-md-4 col-12"></div>
        </div>
        
        
        <ul className={styles.marginBotttom}>
        <AnimatePresence>
          {ingredients.map((ingredient, index) => {
            return(
              <div className="row align-items-center mb-3" key={ingredient.id}>
                <div className={`col-md-8 col-12 ${styles.ingredientsInputsRow}`}>
                
            <Ingredient
              id={ingredient.id}
              ingredient={ingredient.ingredient}
              onSelect={(event) => selectIngredient(ingredient.id, event)} 
              weight={ingredient.weight}
              onChangeWeight={(event) => changeWeight(ingredient.id, event)}
              error={ingredient.error}
            />
            
           </div>
           { ingredients.length > 1 && index > 0 &&
            (<div className="col-md-2 offset-md-1 offset-lg-2 col-12"> 
            
            <motion.button 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 1}}
            exit={{opacity: 0, y: 30}}
            onClick={() => handleRemove(ingredient.id)} 
            type="button" 
            className={`btn btn-danger btn-block btn-lg ${styles.buttonsForm} ${styles.rightButtons}`}>X Remove</motion.button>
            </div>
            ) }
            </div>
            )
        })}
         </AnimatePresence>
        </ul>
       
       
        <div className={`row ${styles.paddingLeft2}`}>
          <div className="col-md-8 col-7">
          <button onClick={handleAddIngredient} type="button" className={`btn btn-lg ${styles.buttonsForm} ${styles.addButton}`}>+ Add Ingredient</button>
          </div>
        <div className="col-md-2 offset-md-1 offset-lg-2 col-5">
        
        <button onClick={handleForm} type="submit" className={`btn btn-success btn-block btn-lg ${styles.buttonsForm} ${styles.rightButtons}`}>Estimate</button>
        
        </div>
        </div>
        
      </form>
    </div>
  );
}

export default IngredientList;
