import React from 'react'
import "./categories.css";

export const Category = (props) => {
  const {id, categoryName, categoryImage} = props.data;
  return (
    <div className='category-wrapper' > 
      <div className='category-card-wrapper'>
        <div className='category-card'>
          <div className='category-name'><h1> {categoryName} </h1> </div>
          <div><img className='c-images' src={categoryImage} alt="category-img" /></div>
        </div>
      </div>
    </div>
  )
};
