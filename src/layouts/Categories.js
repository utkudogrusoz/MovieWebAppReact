import React, { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";
import CategoryService from "../services/categoryService";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getCategories().then(result=>setCategories(result.data.data));
  });

  return (
    <div>
      <Menu pointing vertical>
        {categories.map((category) => (
          <Menu.Item key={category._id} name={category.categoryName} />
        ))}
      </Menu>
    </div>
  );
}
