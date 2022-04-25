const list = ["author", "year", "title", "translator", "publisher"];

const datas = {
  author: "著者",
  year: "2022",
  title: "タイトル",
  translator: "訳者",
  publisher: "出版社",
};

const textGenerator = (results) => {
  return `${results.author}(${results.year})『${results.title}』${results.translator}、${results.publisher}。`;
};

const translated_book = {
  nameJA: "訳本",
  nameEN: "translated_book",
  list: list,
  datas: datas,
  text: textGenerator,
};

export default translated_book;
