import type { Product } from "@/types";
import { Link } from "@tanstack/react-router";

const ProductGrid = ({ products }: { products: Product[] }) => (
  <div className="bg-white">
    <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 2xl:max-w-screen-xl">
      <div className="mx-auto max-w-2xl py-8 sm:py-10 lg:max-w-full">
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              to="/$locale/products/$slug"
              params={{ locale: product.locale, slug: product.slug }}
              key={product.id}
            >
              <div key={product.id} className="group text-sm">
                <div className="aspect-h-6 aspect-w-4 relative overflow-hidden bg-gray-100 ">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    {product.new && (
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-500/10">
                        New
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <h3 className="mt-4 text-medium font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <span className="mt-4 font-bold text-gray-900">
                    EUR {product.price}
                  </span>
                </div>
                <span className="italic text-gray-500 text-xs">
                  {product.brand}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProductGrid;
