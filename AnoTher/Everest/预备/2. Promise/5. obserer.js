/*
 * @Author: BitCreate
 * @Date: 2024-03-04 21:24:04
 */
//* 观察者模式 观察者 被观察者 观察者需要放到被观察中，被观察者的状态发生变化需要通知观察者我变化了

//* 内部也是基于发布订阅模式 收集观察者 状态变化后要通知观察者

class Subject {
  //被观察者
  constructor(name) {
    this.name = name;
    this.state = "开心";
    this.observers = [];
  }
  attach(o) {
    this.observers.push(o);
  }
  setState(newState) {
    this.state = newState;
    this.observers.forEach(o => o.update(this));
  }
}

class Observer {
  //观察者
  constructor(name) {
    this.name = name;
  }
  update(baby) {
    console.log(`${this.name}被通知了：当前${baby.name}的状态是${baby.state}`);
  }
}

//观察宝宝心里状态
let baby = new Subject("宝宝");
let father = new Observer("爸爸");
let mother = new Observer("妈妈");
baby.attach(father);
baby.attach(mother);
baby.setState("不开心");
