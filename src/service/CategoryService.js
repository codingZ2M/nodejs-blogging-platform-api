const Category = require("../models/CategoryModel");

class CategoryService {
//@desc Get all Categories
//@route GET /api/categories
//@access private
 getCategories =  async () => {
  const categories = await Category.find();
  return categories;
  };


//@desc Create new Category
//@route POST /api/categories
//@access private
 createCategory = async (categoryData) => {
  const category = new Category(categoryData);
   const savedCategory = await Category.create(category);
    return savedCategory;
   };


//@desc Get Category
//@route GET /api/categories/:id
//@access private
 getCategory = async (categoryId) => {
  const category = await Category.findById(categoryId);
  return category;
};

//@desc Update Category
//@route PUT /api/categories/:id
//@access private
 updateCategory = async (categoryId, categoryData) => {
  const updatedCategory = await Category.findByIdAndUpdate(
                                          categoryId,
                                          categoryData,
                                          {new: true}
                                        )
     return updatedCategory;
};


//@desc Delete Category
//@route DELETE /api/categories/:id
//@access private
 deleteCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if(!category){
    res.status(404);
    throw new Error("Category Not Found!");
  }
    await Category.findByIdAndRemove(req.params.id);
    res.status(200).json({message:`Category is deleted for ${req.params.id}`});
};

}

module.exports = CategoryService; 