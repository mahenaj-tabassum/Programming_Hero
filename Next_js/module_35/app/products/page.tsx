import ProductCardComponent from "@/components/ProductCardComponent";

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  image: string;
}
const getProducts = async () => {
  const response = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

const ProductsPage = async () => {
  const products: Product[] = await getProducts();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 my-10 mx-5">
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
