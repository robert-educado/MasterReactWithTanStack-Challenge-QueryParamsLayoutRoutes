import type { Section } from "@/types";

const SectionList = ({ heading, content }: { heading: string; content: Section[] }) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.map((section, index) => (
          <div className="border p-4 rounded-md" key={index}>
            <h3 className="text-lg font-semibold mb-2">{section.heading}</h3>
            <p className="text-gray-600 text-sm">{section.content as string}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionList;
