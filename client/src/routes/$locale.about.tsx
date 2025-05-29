import SectionList from '@/components/SectionList/SectionList';
import SectionParagraph from '@/components/SectionParagraph/SectionParagraph';
import type { AboutResponse } from '@/types';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale/about')({
  loader: async ({params}) => {

    const { locale } = params;

    const response = await fetch(`/api/about?locale=${locale}`);

    const page = (await response.json()) as AboutResponse;

        console.log(page);

    return page;
  },
  component: RouteComponent,
})

function RouteComponent() {

    const page = Route.useLoaderData();

return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <section className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          {page.title}
        </h1>
{page.sections.map((section) => (
  <>
    {typeof section.content === "string" ? (
      <SectionParagraph
        headline={section.heading}
        content={section.content}
      />
    ) : Array.isArray(section.content) && section.content.length > 0 ? (
      <SectionList
        heading={section.heading}
        content={section.content}
      />
    ) : null}
  </>
))}

      </section>
    </div>
  );
}
