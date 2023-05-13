(function () {
  // 初始化
  var noticeList = document.querySelector(".notice-list");

  function choneFirstItem() {
    var firstItem = noticeList.children[0];
    var newItem = firstItem.cloneNode(true);
    noticeList.appendChild(newItem);
  }

  choneFirstItem();

  // 滚动: 没隔一段时间滚动
  var duration = 2000; //滚动间隔时间
  setInterval(moveNext, duration);

  var itemHeight = 30; //每一项高度
  var curIndex = 0; //目前展示的是第几项
  /**
   * @description: 将列表滚动到下一个位置
   */
  function moveNext() {
    var fromHeight = curIndex * itemHeight; //开始的高度
    curIndex++; //)
    var toHeight = curIndex * itemHeight; //下一项的滚动高度

    // 让list的高度从fromHeight ==> toHeight
    var totalDuration = 500; //变化的总时间
    var duration = 10; //动画的间隔时间
    var times = totalDuration / duration; //变化的次数
    var dis = (toHeight - fromHeight) / times; //每次变化的量

    var timerId = setInterval(function () {
      fromHeight += dis;
      if (fromHeight >= toHeight) {
        // 到达目标结束
        clearInterval(timerId);
        if (curIndex === noticeList.children.length - 1) {
          fromHeight = 0;
          curIndex = 0;
        }
      }
      noticeList.scrollTop = fromHeight;
    }, duration);
  }
})();
