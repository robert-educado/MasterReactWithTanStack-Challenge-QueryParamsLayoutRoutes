const SectionParagraph = ({ headline, content }: { headline: string; content: string }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">{headline}</h2>
      <p className="text-gray-600">{content}</p>
    </section>
  );
}

export default SectionParagraph;