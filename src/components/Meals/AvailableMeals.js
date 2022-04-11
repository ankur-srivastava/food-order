import Card from '../UI/Card';
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const AvailableMeals = props => {

    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Tea',
          description: 'Masala Tea',
          price: 3.05,
        },
        {
          id: 'm2',
          name: 'Pasta',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

      const mealsList = DUMMY_MEALS.map(meal => (
          <MealItem name={meal.name} 
            id={meal.id}
            key={meal.id}
            description={meal.description} 
            price={meal.price}/>
      ))

      return <section className={styles.meals}>
          <Card><ul>{mealsList}</ul></Card>
      </section>

}

export default AvailableMeals
