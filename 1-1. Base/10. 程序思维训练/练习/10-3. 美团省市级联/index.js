(async function () {
  /**
   * 远程获取省市区数据，当获取完成后，得到一个数组
   * @returns Promise
   */
  async function getDatas() {
    return fetch("https://study.duyiedu.com/api/citylist")
      .then((resp) => resp.json())
      .then((resp) => resp.data);
  }

  const doms = {
    selProvince: document.querySelector("#selProvince"),
    selCity: document.querySelector("#selCity"),
    selArea: document.querySelector("#selArea"),
  };
  // 1. 初始化
  const datas = await getDatas();
  console.log(datas);
  fillSelect(doms.selProvince, datas);
  fillSelect(doms.selCity, []);
  fillSelect(doms.selArea, []);

  /**
   * @description:  填充某个下拉列表
   * @param {*} select 要填充的下列列表
   * @param {*} list 被填充的数据, 数组为空，则不填充，禁用
   */
  function fillSelect(select, list) {
    select.className = `select ${list.length ? "" : "disabled"} `;
    const tipName = select.dataset.name;
    const span = select.querySelector(".title span");
    span.innerText = `请选择${tipName}`;

    select.datas = list; //将目前填充的数据，添加到dom对象的属性datas中

    const ul = select.querySelector(".options");
    ul.innerHTML = list.map((item) => `<li>${item.label}</li>`).join("");
  }

  //  2. 交互事件
  regCommonEvent(doms.selProvince);
  regCommonEvent(doms.selCity);
  regCommonEvent(doms.selArea);
  regProvinceEvent();
  regCityEvent();

  /**
   * @description: 注册公共的事件处理
   */
  function regCommonEvent(select) {
    // 1. title点击事件
    const title = select.querySelector(".title");
    title.addEventListener("click", () => {
      // 禁用状态无法操作
      if (select.classList.contains("disabled")) {
        return;
      }
      const expands = document.querySelectorAll(".select.expand");
      for (const sel of expands) {
        if (sel != select) {
          sel.classList.remove("expand");
        }
      }
      select.classList.toggle("expand");
    });
    // 2. ul点击事件
    const ul = select.querySelector(".options");
    ul.addEventListener("click", (e) => {
      if (e.target.tagName !== "LI") {
        return;
      }
      const li = e.target;
      // 移除其他已选中
      const beforeActive = ul.querySelector("li.active");
      beforeActive && beforeActive.classList.remove("active");
      // 选中当前li
      li.classList.add("active");
      // 更改title的文本
      const span = select.querySelector(".title span");
      span.innerText = li.innerText;
      // 折叠
      select.classList.remove("expand");
    });
  }

  /**
   * @description: 注册省份特殊点击事件
   */
  function regProvinceEvent() {
    const ul = doms.selProvince.querySelector(".options");
    ul.addEventListener("click", (e) => {
      if (e.target.tagName !== "LI") {
        return;
      }
      // 填充城市
      fillSelect(
        doms.selCity,
        doms.selProvince.datas.find((item) => item.label === e.target.innerText)
          .children
      );
      // 填充地区
      fillSelect(doms.selArea, []);
    });
  }

  /**
   * @description: 注册城市特殊点击事件
   */
  function regCityEvent() {
    const ul = doms.selCity.querySelector(".options");
    ul.addEventListener("click", (e) => {
      if (e.target.tagName !== "LI") {
        return;
      }
      fillSelect(
        doms.selArea,
        doms.selCity.datas.find((item) => item.label === e.target.innerText)
          .children
      );
    });
  }
})();
