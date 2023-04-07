import CategoryModel from "../models/category.js";

export const createCategory = async (req, res) => {
  const { name, image } = req.body;
  console.log(req.body)
  try {
    const category = new CategoryModel({
      name,
      image,
    });

    await category.save();
    res.status(200).json({ message: "Create successfull" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getCategory = async (req,res)=>{
    try {
        const category = await CategoryModel.find({});
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const randomCategory = async(req,res)=>{
  try {
    const randomCate = await CategoryModel.aggregate([
      {$sample:{size:4}}
    ])
    res.status(200).json(randomCate)
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

