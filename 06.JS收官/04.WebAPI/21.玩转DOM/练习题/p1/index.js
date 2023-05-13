/*
 * @Author: BitCreate
 * @Date: 2023-03-15 21:13:01
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-16 14:35:43
 * @FilePath: \JS收官\04.WebAPI\21.玩转DOM\练习题\p1\index.js
 */
/*
 * @Author: BitCreate
 * @Date: 2023-03-15 21:13:01
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-16 14:31:15
 * @FilePath: \JS收官\04.WebAPI\21.玩转DOM\练习题\p1\index.js
 */

var heroDiv = document.querySelector(".container");

// 根据hero.js提供的数据heros，创建合适的元素，将英雄数据显示到页面上
for (var i = 0; i < heros.length; i++) {
  var hero = heros[i];

  var a = document.createElement("a");
  a.href = "https://pvp.qq.com/web201605/herodetail/" + hero.ename + ".shtml";
  a.target = "_blank";
  a.className = "item";
  var img = document.createElement("img");
  img.src =
    "https://game.gtimg.cn/images/yxzj/img201606/heroimg/" +
    hero.ename +
    "/" +
    hero.ename +
    ".jpg";
  var span = document.createElement("span");
  span.innerText = hero.cname;

  a.appendChild(img);
  a.appendChild(span);
  heroDiv.appendChild(a);
}
