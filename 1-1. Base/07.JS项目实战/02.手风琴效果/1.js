var menusTitle = document.querySelectorAll(".menu h2");

var itemHeight = 30; //子菜单的高度
var totalMs = 200; //动画时间

for (var i = 0; i < menusTitle.length; i++) {
  var menuItem = menusTitle[i];
  (function (menuItem) {
    menuItem.onclick = function () {
      // 收起其他所有菜单
      var beforeOpened = document.querySelector(".submenu[status = opened]");
      if (beforeOpened) {
        closeSubmenus(beforeOpened);
      }
      toggleSubMenu(this.nextElementSibling);
    };
  })(menuItem);
}

// 开启子菜单
function openSubmenus(subMenu) {
  var status = subMenu.getAttribute("status");
  if (status !== "closed" && status) {
    //不是关闭状态
    return;
  }
  subMenu.setAttribute("status", "playing");
  createAnimation({
    from: 0,
    to: itemHeight * subMenu.children.length,
    totalMS: totalMs,
    onmove: function (n) {
      subMenu.style.height = n + "px";
    },
    onend: function () {
      subMenu.setAttribute("status", "opened");
    },
  });
}

// 关闭子菜单
function closeSubmenus(subMenu) {
  var status = subMenu.getAttribute("status");
  if (status !== "opened") {
    //不是开启状态
    return;
  }
  subMenu.setAttribute("status", "playing");
  createAnimation({
    from: itemHeight * subMenu.children.length,
    to: 0,
    totalMS: totalMs,
    onmove: function (dis) {
      subMenu.style.height = dis + "px";
      subMenu.setAttribute("status", "closed");
    },
  });
}

// 切换子菜单
function toggleSubMenu(subMenu) {
  var status = subMenu.getAttribute("status");
  if (status === "opened") {
    closeSubmenus(subMenu);
  } else if (status === "playing") {
    return;
  } else {
    openSubmenus(subMenu);
  }
}
