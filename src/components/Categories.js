import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => { //eslint-disable-line
  const showCategory = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(checkStatus());
  };
  return (
    <div className="category">
      <h1 className="categoriesHeader">Categories</h1>
      <button type="button" className="status" onClick={handleClick}>Check Status</button>
      <div className="categories">
        {showCategory}
      </div>
    </div>
  );
};

export default Categories;
