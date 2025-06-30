export default function BlogHeader() {
  return (
    <header
      className="text-white px-6 py-16 md:py-20"
      style={{
        background:
          "linear-gradient(135deg, #6E44E5 0%, #3385D7 50%, #51C0CD 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto md:text-center">
        <h1 className="text-5xl font-extrabold mb-4 mt-6 md:mt-0">
          BlogMaster
        </h1>
        <p className="text-xl max-w-3xl mx-auto md:text-center">
          Tudo que você precisa saber para criar landing pages de alto
          desempenho
        </p>
      </div>
    </header>
  );
}
