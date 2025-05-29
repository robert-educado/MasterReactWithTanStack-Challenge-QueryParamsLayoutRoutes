import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/categories/$slug')({
  loader: async ({params}) => {

    const { slug } = params;

    const response = await fetch(`/api/categories/${slug}`);

    const category = await response.json();

    return category;
  },
  component: RouteComponent,
})

function RouteComponent() {

  const category = Route.useLoaderData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl text-center font-bold">{category.name}</h1>
      <ProductGrid products={category.products} />
    </div>
  );
}
