/*
 * @Author: Astray
 * @Date: 2023-09-17 17:04:06
 */
const axios = require("axios");
const cheerio = require("cheerio");

/**
 * @description: 得到所有电影html字符串
 * @return {*}
 */
async function getMoviesHtml() {
  const resp = await axios.get("https://movie.douban.com/chart");
  return resp.data;
}

async function getMoviesData() {
  const html = await getMoviesHtml();
  const $ = cheerio.load(html);
  var trs = $("tr.item");
  var movies = [];
  for (let i = 0; i < trs.length; i++) {
    var tr = trs[i];
    // 分析每个tr的数据 ，得到一部电影对象
    var m = getMovie($(tr));
    movies.push(m);
  }
  return movies;
}

/**
 * @description: // 分析每个tr的数据 ，得到一部电影对象
 * @param {*} tr
 * @return {*}
 */
function getMovie(tr) {
  var name = tr.find("div.pl2 a").text();
  name = name.replace(/\s/g, ""); //去掉空白
  name = name.split("/")[0];
  var imgSrc = tr.find("a.nbg img").attr("src");
  var detail = tr.find("div.pl2 p.pl").text();

  return {
    name: name,
    imgSrc: imgSrc,
    detail: detail,
  };
}

module.exports = getMoviesData;
