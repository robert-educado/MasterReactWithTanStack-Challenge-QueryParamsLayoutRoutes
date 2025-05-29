import type { ProductDetailsResponse } from '@/types';
import { HeartIcon } from '@heroicons/react/16/solid';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/products/$slug')({
  loader: async ({params}) => {

    // We don't need $locale - slug uniquely identifies a 
    // localized version of the product
    const { slug } = params;

    const response = await fetch(`/api/products/${slug}`);

    const product = (await response.json()) as ProductDetailsResponse;

    return product;
  },

  component: RouteComponent,
})

function RouteComponent() {

  const product = Route.useLoaderData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <img
              className=" w-full h-full"
              src={product.imageUrl}
              alt="Logotyp"
            />
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <div className="mt-5">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                EUR {product.price}
              </p>
            </div>
            <div>
              <h3 className="mt-5">{product.brand}</h3>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
            <form className="mt-6">
              <select className="mt-5 w-20 h-10 border border-gray-600 rounded outline-0 text-center">
                {Array.from({ length: 9 }, (_, i) => i + 1).map((quantity) => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>
              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Add to basket
                </button>
                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400  hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
