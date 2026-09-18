import { Product } from "@/app/products/page";
import Image from "next/image";
interface ProductProps {
  product: Product;
}

const ProductCardComponent = ({ product }: ProductProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        <div>
          <p className="text-sm text-gray-500">{product.brand}</p>
          <h2 className="line-clamp-1 text-xl font-semibold text-gray-900">
            {product.name}
          </h2>
        </div>

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
            {product.category}
          </span>

          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm text-slate-900 font-medium">
              {product.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
            <p className="text-sm text-gray-500">{product.stock} in stock</p>
          </div>

          <button className="rounded-xl bg-black px-4 py-2 text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
