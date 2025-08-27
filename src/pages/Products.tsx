import { mock } from "@/features/products/api/mock";
import ProductList from "@/features/products/components/ProductList";
import { usePosts } from "@/features/products/hooks/usePosts";


function ProductPage() {

  const { data, isLoading, isError } = usePosts();
  // const data = mock;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;
  return (<>
    <ProductList products={data} />
  </>);
}

export default ProductPage;