const Category = require("../models/CategoryModel");

class CategoryService {

 getCategories =  async () => {
  const categories = await Category.find();
  return categories;
  };

 createCategory = async (categoryData) => {
  const category = new Category(categoryData);
   const savedCategory = await Category.create(category);
    return savedCategory;
   };

 getCategory = async (categoryId) => {
  const category = await Category.findById(categoryId);
  return category;
};

 updateCategory = async (categoryId, categoryData) => {
  const updatedCategory = await Category.findByIdAndUpdate(
                                          categoryId,
                                          categoryData,
                                          {new: true}
                                        )
     return updatedCategory;
};


 deleteCategory = async (categoryId) => {
  const category = await Category.findByIdAndRemove(categoryId);
  return category;
 };

}

module.exports = CategoryService; 