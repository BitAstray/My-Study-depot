/*
 * @Author: Astray
 * @Date: 2023-05-05 16:25:59
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-05 22:24:31
 * @FilePath: \Code\10. 程序思维训练\练习\10-2.王者荣耀官网英雄查询\index.js
 */

(async function () {
  /**
   * 从网络获取当前的英雄数据
   * @returns Promise
   */
  async function getHeroes() {
    return fetch("https://study.duyiedu.com/api/herolist")
      .then((resp) => resp.json())
      .then((resp) => resp.data.reverse());
  }

  const doms = {
    ul: document.querySelector(".list"),
    radios: document.querySelectorAll(".radio"),
    search: document.querySelector(".input input"),
  };

  // 1. 初始化
  const heroList = await getHeroes();
  setHeroHTML(heroList);

  /**
   * @description: 根据指定的英雄数据，生成html,放入ul
   * @param {*} heroes
   */
  function setHeroHTML(heroes) {
    doms.ul.innerHTML = heroes
      .map(
        (item) =>
          `<li>
          <a href="https://pvp.qq.com/web201605/herodetail/${item.ename}.shtml" target="_blank">
          <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg"/>
          <span>${item.cname}</span>
          </a>
          </li>`
      )
      .join("");
  }

  // 2. 交互事件
  for (const radio of doms.radios) {
    radio.addEventListener("click", function () {
      // 1. 更改radio样式
      setChoose(this);
      // 2. 更改数据
      searchHeros(this);
    });
  }

  doms.search.addEventListener("input", function () {
    setHeroHTML(heroList.filter((item) => item.cname.includes(this.value)));
    // 设置[全部]选中
    setChoose(document.querySelector(".radio[data-type='all']"));
  });

  /**
   * @description: 根据选中radio改变英雄数据
   * @param {*} radio
   * @return {*}
   */
  function searchHeros(radio) {
    let heroes;
    const type = radio.dataset.type;
    const value = radio.dataset.value;
    if (type === "all") {
      heroes = heroList;
    } else if (type === "pay_type") {
      heroes = heroList.filter((item) => item.pay_type === +value);
    } else {
      heroes = heroList.filter(
        (item) => item.hero_type === +value || item.hero_type2 === +value
      );
    }
    setHeroHTML(heroes);
  }

  /**
   * @description: 更改选中的radio样式
   * @return {*}
   */
  function setChoose(radio) {
    const checkedRadio = document.querySelector(".radio.checked");
    checkedRadio && checkedRadio.classList.remove("checked");
    radio.classList.add("checked");
  }
})();
