/* 
于谦，男，职业捧哏，手机号13812341234，江湖人称谦哥，家住北京八大胡同。
其父亲王老爷子是一位古汉语专家，爱好洗澡

用字面量描述上面的数据
*/

var yuqian = {
  name: "于谦",
  age: 72,
  sex: "男",
  // ismale: true,
  tel: "13812341234",
  job: "捧眼",
  nickname: "谦哥",
  address: {
    city: "北京",
    road: "八大胡同",
  },
  fathar: {
    name: "王老爷子",
    job: "古汉语专家",
    hobby: "洗澡",
  },
};

console.log(yuqian);
console.log(yuqian.fathar.job);
