import ProdectModel from "../models/prodect.js";

export const createProdect = async (req, res) => {
  const { name, image, price, brand, overview, category } = req.body;
  console.log(req.body);
  try {
    const prodect = new ProdectModel({
      name,
      image,
      price,
      brand,
      overview,
      category,
    });

    await prodect.save();
    res.status(200).json({ message: "Create successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const prodectCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const catProdect = await ProdectModel.find({ category: category });
    res.status(200).json(catProdect);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const prodectById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const singelProdect = await ProdectModel.findById({ _id: id });
    console.log(singelProdect)
    res.status(200).json(singelProdect);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const homeProdect = async (req,res)=>{
  const { category } = req.params;
  try {
    const prodect = await ProdectModel.find({category:category}).limit(4)
    res.status(200).json(prodect)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
