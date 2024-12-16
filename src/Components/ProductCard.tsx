import { memo } from "react";
import { Product } from "../Types/Type";

const ProductCard = memo(({ product, onAddToCart }:
    { product: Product; onAddToCart: (product: Product) => void }) => (
        <div className="bg-warm relative hover:bg-warm2 hover:scale-105 transition-all duration-200 rounded-lg p-4 shadow-lg flex flex-col h-full">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4 rounded-lg" />
            <h2 className="self-center text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>            
            <div className="flex-grow">
                <p className="text-center line-clamp-3 mb-4">{product.description}</p>
            </div>
            <div className="mt-auto flex justify-between items-center">
                <p className="text-md px-4 font-semibold text-right mb-2">{`$${product.price.toFixed(2)}`}</p>
                <button onClick={() => onAddToCart(product)}
                    className="bg-orange1 hover:bg-green1 py-2 px-2 rounded-lg transition hover:scale-95">
                    Add to Cart
                </button>
            </div>
        </div>
    )
);

export default ProductCard;
