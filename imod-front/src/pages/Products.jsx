import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductItem from './Product_Item';
import LoadingSpinner from '../components/Spinner';
import { useFetchProducts, useFetchCategories } from '../api';
import ProductItemPage from './ProductPage';
const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0); // Default to "All" category with ID 0
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Получит апи
  const fetchCategories = useFetchCategories();

  const {
    data: categories = [],
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const data = await fetchCategories();
      return [{ id: 0, name: 'Все' }, ...data];
    },
  });
  
  const {
    data: products = [],
    isLoading: productsLoading,
    error: productsError,
  } = useFetchProducts()
console.log(products)
  // Filter products based on selected category ID
  const filteredProducts = selectedCategory === 0
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  if (categoriesLoading || productsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner /> {/* Show loading spinner */}
      </div>
    );
  }

  if (categoriesError || productsError) {
    return <div className="text-center text-red-600">Failed to load data.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Categories Dropdown */}
      <div className="w-full flex justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(Number(e.target.value))}
          className="p-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            openModal={() => openModal(product)}
          />
        ))}
      </div>

      {/* Modal */}
      {/* {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-3/4 max-w-2xl h-3/4 p-6 relative overflow-y-auto rounded-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col items-center my-14">
              <h3 className="text-3xl font-semibold text-gray-800 mb-8">{selectedProduct.name}</h3>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full max-w-md h-60 object-cover mb-8" />
              <p className="text-gray-700 text-lg text-center">{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProductPage;
