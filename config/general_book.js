// （著者名（出版年）『著書名』、出版社。）

const list = ["author", "year", "title", "publisher"];

const datas = {
  author: "著者",
  year: "2022",
  title: "タイトル",
  publisher: "出版社",
};

const textGenerator = (results) => {
  return `${results.author}(${results.year})『${results.title}』、${results.publisher}。`;
};

const general_book = {
  nameJA: "一般書物",
  nameEN: "translated_book",
  list: list,
  datas: datas,
  text: textGenerator,
};

export default general_book;
