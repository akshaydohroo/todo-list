import React from "react";
import { useParams } from "react-router";
import styles from "./Category.module.css";
import CategoryNavbar from "./UI/CategoryComponents/CategoryNavbar";
import CategoryContent from "./UI/CategoryComponents/CategoryContent";
export default function Category(props) {
  let { category } = useParams();
  let categoryLength = 0;
  if(category!=="all") categoryLength = props.data.length;
  else{
      Object.keys(props.data).forEach(category=>{
          categoryLength += props.data[category].length;
      }) 
  }
  return (
    <div className={styles.categoryPage}>
      <CategoryNavbar
        category={category}
        totaltask={categoryLength}
      />
      <CategoryContent category={category} {...props}/>
    </div>
  );
}
