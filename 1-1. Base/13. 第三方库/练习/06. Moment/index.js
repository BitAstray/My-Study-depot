/**
 * @description: 设置各个时区的时间文本
 */
function setNow() {
  $("[data-zone]").each((i, el) => {
    $(el).text(
      moment().utcOffset(+el.dataset.zone).format("YYYY-MM-DD HH:mm:ss")
    );
  });
}

/**
 * @description: 设置生日相关信息
 */
function setBirthInfo() {
  const birthTxt = $("#birthInput").val();
  const birthInfo = $("#birthInfo");
  if (!birthTxt) {
    birthInfo.empty();
    return;
  }
  let birthday = moment(birthTxt);
  const now = moment();
  const thisYearBirth = moment(birthday).year(now.year());

  if (birthday > now) {
    // 生日错误
    birthInfo.text("生日不正确");
    return;
  }

  let targetData;
  if (thisYearBirth < now) {
    targetData = moment(thisYearBirth).add(1, "Y");
  } else {
    targetData = thisYearBirth;
  }

  const birthdayInfo = {
    birthday: birthday.format("YYYY年MM月DD日"),
    age: now.diff(birthday, "years"),
    liveSecond: now.diff(birthday, "second"),
    nextBirthday: targetData.diff(now, "days"),
    lastBirthdayTxt: "",
  };

  const cal = thisYearBirth.calendar({
    sameDay: "今天",
    nextDay: "明天",
    nextWeek: "下个 dddd",
    lastDay: "[昨天]",
    lastWeek: "上个 dddd",
    sameElse: "YYYY-MM-DD",
  });

  if (thisYearBirth < now) {
    birthdayInfo.lastBirthdayTxt = `<p>你已在
    <strong>${cal}</strong>
    过了生日</p>`;
  } else {
    birthdayInfo.lastBirthdayTxt = `<p>你将在
    <strong>${cal}</strong>
    迎来生日</p>`;
  }

  birthInfo.html(
    `          <p>
    <strong>出生日期：</strong>
    <span>${birthdayInfo.birthday}</span>
  </p>
  <p>
    <strong>年龄：</strong>
    <span>${birthdayInfo.age}</span>
  </p>
  <p>
    你在这个世界上已存在了
    <strong>${birthdayInfo.liveSecond}</strong>
    秒钟
  </p>
  <p>
    你还有
    <strong>${birthdayInfo.nextBirthday}</strong>
    天就会迎来你 ${birthdayInfo.age + 1} 岁的生日
  </p>
  ${birthdayInfo.lastBirthdayTxt}`
  );
}

setBirthInfo();
$("#birthInput").on("input", setBirthInfo);

setNow();
setInterval(() => {
  setNow();
}, 1000);
