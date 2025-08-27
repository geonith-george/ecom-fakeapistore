import ProductItem from "./ProductItem";


export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  )
}
