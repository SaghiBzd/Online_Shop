import { useCallback, useEffect, useMemo, useState } from 'react';
import { useCart } from '../Store/CartContext';
import { Product } from '../Types/Type';
import SearchAndFilter from './Search&Filter';
import ProductCard from './ProductCard';
import Loading from './Loading';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const filteredProducts = useMemo<Product[]>(() => {
    return products.filter((product) => {
      return (
        (!searchQuery || product.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (!categoryFilter || product.category === categoryFilter)
      );
    });
  }, [products, searchQuery, categoryFilter]);

  const handleAddToCart = useCallback((product: Product) => {
    addToCart(product);
  }, [addToCart]);

  return (
    <div className="my-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4">Products</h1>
      <SearchAndFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <div className="px-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {isLoading ? (
          <Loading />
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-lg font-semibold">
              Sorry, we do not have the product you searched for!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
