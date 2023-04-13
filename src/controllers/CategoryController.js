const asyncHandler = require("express-async-handler");
const  CategoryService = require("../service/CategoryService");

const categoryService = new CategoryService();

class CategoryController {

//@desc Get all Categories
//@route GET /api/categories
//@access private
getCategories = asyncHandler(  async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(200).json(categories);
  }  );


//@desc Create new Category
//@route POST /api/categories
//@access private
 createCategory = asyncHandler(async (req, res) => {
  const {name} = req.body;
    if(!name) {
      res.status(400);
      throw new Error("All Fileds Are Mandatory!");
    }
    const category = await categoryService.createCategory({name });
      res.status(200).json(category);
});


//@desc Get Category
//@route GET /api/categories/:id
//@access private
 getCategory = asyncHandler(async (req, res) => {
 const category = await categoryService.getCategory(req.params.id);
  if(!category){
    res.status(404);
    throw new Error("Category Not Found!");
  }
    res.status(200).json(category);
});

//@desc Update Category
//@route PUT /api/categories/:id
//@access private
updateCategory = asyncHandler(async (req, res) => {
  const {name} = req.body;
  const updatedCategory = await categoryService.updateCategory(req.params.id, {name });
  if(!updatedCategory){
    res.status(404);
    throw new Error("Category Not Found!");
  }
    res.status(200).json(updatedCategory);
});

//@desc Delete Category
//@route DELETE /api/categories/:id
//@access private
 deleteCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.deleteCategory(req.params.id);
  if(!category){
    res.status(404);
    throw new Error("Category Not Found!");
  }
    res.status(200).json({message:`Category is deleted for ${category._id}`});
});

}

module.exports = CategoryController; 