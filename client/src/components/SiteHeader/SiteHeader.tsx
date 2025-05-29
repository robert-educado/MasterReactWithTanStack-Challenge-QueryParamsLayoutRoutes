import { Link, useParams } from "@tanstack/react-router";

const SiteHeader = () => {
  const { locale } = useParams({ strict: false });

  return (
    <header className="sticky top-0 z-40 mb-5">
      <nav className="bg-white border-gray-200 -mb-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-4 px-6">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://placehold.co/170x50/black/white.png?text=Freaky+Fashion&font=poppins"
                className="h-11 mr-5"
                alt="Logo"
              />
            </Link>
            <form className="w-50 flex justify-center md:justify-between">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-80 h-9 p-4 pl-10 text-xs text-gray-900 border-0 bg-gray-100 focus:ring-white placeholder-gray-700"
                  placeholder="Search product"
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="p-4 text-gray-400 hover:text-gray-500 lg:ml-4"
            >
              <span className="sr-only">Account</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </a>
            <div className="group -m-2 flex items-center p-2">
              <svg
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative bg-white">
        <div
          className="pointer-events-none absolute inset-0 z-30 border-b border-gray-200"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <div className="flex py-5 px-6 mx-auto max-w-screen-xl">
            <nav className="flex justify-start divide-x divide-gray-300 space-x-3">
              <Link
                to="/"
                className="text-base text-gray-900 hover:underline underline-offset-8 decoration-2 pr-3 uppercase"
              >
                Home
              </Link>
              <Link
                to="/$locale/news"
                params={{ locale: locale || "en" }}
                className="text-base text-gray-900 hover:underline underline-offset-8 decoration-2 pr-3 uppercase"
              >
                News
              </Link>
              <Link
                to="/$locale/categories/$slug"
                params={{ locale: locale || "en", slug: "clothing" }}
                className="text-base text-gray-900 hover:underline underline-offset-8 decoration-2 pr-3 uppercase"
              >
                Clothing
              </Link>
              <Link
                to="/$locale/categories/$slug"
                params={{ locale: locale || "en", slug: "accessories" }}
                className="text-base text-gray-900 hover:underline underline-offset-8 decoration-2 pr-3 uppercase"
              >
                Accessories
              </Link>
              <Link
                to="/$locale/about"
                params={{ locale: locale || "en" }}
                className="text-base text-gray-900 hover:underline underline-offset-8 decoration-2 pr-3 uppercase"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
