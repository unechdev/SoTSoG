// （著者名（出版年）「論文タイトル」、『雑誌名』第〇巻第△号、出版学会名、ページ数。）
const datas = {
  author: "著者名",
  year: "2022",
  title: "論文タイトル",
  book_name: "雑誌名",
  book_when: "巻数等(第〇巻第△号)",
  publisher: "出版学会名",
  page: "ページ数(1-2)",
};
// 著者名（出版年）「論文タイトル」、『雑誌名』第〇巻第△号、出版学会名、ページ数。
const textGenerator = (results) => {
  return `${results.author}(${results.year})「${results.title}」、『${results.book_name}』${results.book_when}、${results.publisher}、${results.page}。`;
};

const magazine_dissertation = {
  datas: datas,
  text: textGenerator,
};

export default magazine_dissertation;
