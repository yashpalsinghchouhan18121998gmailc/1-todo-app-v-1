import Items from "./Items";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems , onClickDltBtn}) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Items key={item.name} todoDate={item.dueDate} todoName={item.name} onClickDltBtn ={onClickDltBtn} ></Items >
        
      ))}
    </div>
   
    );
};

export default TodoItems;