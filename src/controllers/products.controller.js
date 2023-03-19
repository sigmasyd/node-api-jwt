import Product from "../models/Product"

export const createProduct = async (req, res) => {
  const {name, category, price, imgURL} = req.body  
  const newProduct = new Product({name, category, price, imgURL})
  const productSaved = await newProduct.save()
  res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.status(200).json(products)
}

export const getProductById = async (req, res) => {
  const { productId } = req.params
  const product = await Product.findById(productId)
  res.status(200).json(product)
}

export const updateProductsByID = async (req, res) => {
  const { productId } = req.params
  const productUpdated = await Product.findByIdAndUpdate(productId, req.body,{
    new: true // para que me devuelva el product con la información actualizada
  })
  res.status(200).json(productUpdated)
}

export const deleteProductsByID = async (req, res) => {
  const { productId } = req.params
  const productDeleted = await Product.findByIdAndDelete(productId)
  res.status(204).json()  // 204 no content, no decuelve nada
}