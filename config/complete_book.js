const datas = {
  author: "著者",
  year: "2022",
  title: "タイトル",
  translator: "訳者名訳",
  original: "収録著作名",
  publisher: "出版社",
  page: "ページ数(1-2)",
};

// （原著者名（出版年）「タイトル」訳者名訳、『収録著作名』、出版社、 ページ数。）

const textGenerator = (results) => {
  return `${results.author}(${results.year})『${results.title}』${results.translator}、『${results.original}』、${results.publisher}、${results.page}。`;
};

const complete_book = {
  datas: datas,
  text: textGenerator,
};

export default complete_book;
