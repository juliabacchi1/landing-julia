export default function BlogCategories() {
  return (
    <section className="py-8 px-4 md:px-0 bg-graylight">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          <button className="category-badge bg-primary text-white px-5 py-2 rounded-full font-medium shadow-sm transition">
            Todos
          </button>
          <button className="category-badge bg-white px-5 py-2 rounded-full text-dark font-medium shadow-sm transition">
            Conversão
          </button>
          <button className="category-badge bg-white px-5 py-2 rounded-full text-dark font-medium shadow-sm transition">
            Design
          </button>
          <button className="category-badge bg-white px-5 py-2 rounded-full text-dark font-medium shadow-sm transition">
            SEO
          </button>
          <button className="category-badge bg-white px-5 py-2 rounded-full text-dark font-medium shadow-sm transition">
            Copywriting
          </button>
          <button className="category-badge bg-white px-5 py-2 rounded-full text-dark font-medium shadow-sm transition">
            Ferramentas
          </button>
        </div>
      </div>
    </section>
  );
}