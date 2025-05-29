import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: async () => {

    const locale = "en";

    const response = await fetch(`/api/products?locale=${locale}`);

    const { products } = await response.json();

    return products
  },
  
  component: RouteComponent,
})

function RouteComponent() {

  const products = Route.useLoaderData();

  return (
    <div className="container mx-auto px-4">
      <ProductGrid products={products} /> 
    </div>
  );
}
