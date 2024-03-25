enum Gender {
  male = "男",
  female = "女",
}

class User {
  readonly id: number; //不能改变
  gender: Gender = Gender.male;
  pid?: string;
  private _publishNumber: number = 3; // 一共发布了多少文章
  private _curNumber: number = 0; // 当前发布了多少文章

  constructor(public name: string, private _age: number) {
    this.id = Math.random();
  }

  set age(age: number) {
    if (age < 0) {
      throw new Error("年龄不能为负数");
    }
    this._age = age;
  }

  get age() {
    return Math.floor(this._age);
  }

  publish(title: string) {
    if (this._curNumber < this._publishNumber) {
      console.log(`${this.name} 发布了一篇文章：${title}`);
      this._curNumber++;
    } else {
      console.log(`${this.name} 今日发布数量已达上限`);
    }
  }
}
