/*
 * @Author: BitCreate
 * @Date: 2023-03-10 17:22:21
 * @LastEditors: BitCreate BitCreate@qq.com
 * @LastEditTime: 2023-03-10 18:00:37
 * @FilePath: \Code\Code\JS收官\02.核心概念\15.继承\1.js
 */
function User(username, password) {
  this.username = username;
  this.password = password;
}

User.prototype.playFreeVideo = function () {
  console.log("Playing free video");
};

function VIPUser(username, password, expired) {
  // this.username = username;
  // this.password = password;
  User.call(this, username, password);
  this.expired = expired;
}

function inherit(Child, Parent) {
  Object.setPrototypeOf(Child.prototype, Parent.prototype);
}

inherit(VIPUser, User);

// Object.setPrototypeOf(VIPUser.prototype, User.prototype);

// VIPUser.prototype.playFreeVideo = function() {
//   console.log('Playing free video');
// }

VIPUser.prototype.playPayVideo = function () {
  console.log("Playing pay video");
};

var vipUser = new VIPUser("test", "123", "2026-01-02");

console.log(vipUser);
vipUser.playFreeVideo();
vipUser.playPayVideo();
