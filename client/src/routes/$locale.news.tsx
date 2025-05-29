import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/news')({
  loader: async ({params}) => {

    const { locale } = params;
    
    const response = await fetch(`/api/products?status=new&locale=${locale}`);

    console.log(response);

    const { products } = await response.json();

    return products;
  },
  
  component: RouteComponent,
})

function RouteComponent() {

  const products = Route.useLoaderData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl text-center font-bold">News</h1>
      <ProductGrid products={products} /> 
    </div>
  );
}

