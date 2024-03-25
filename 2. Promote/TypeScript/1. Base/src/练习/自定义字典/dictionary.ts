/*
 * @Author: BitCreate
 * @Date: 2024-03-24 20:48:31
 */

export type CallBack<K, V> = (key: K, val: V) => void;

/**
 * 字典
 * @description 用于存储键值对 所有的key类型相同, 所有的value类型相同
 * @property keys 存储所有的key
 * @property values 存储所有的value
 * @function del 删除一个键值对
 * @function has 判断是否包含某个key
 * @function size 得到键值对的数量
 * @function forEach 遍历所有键值对
 * @function set 重新设置某个键值对，如果key不存在则添加
 */
export class Dictionary<K, V> {
  private keys: K[] = [];
  private values: V[] = [];

  get size() {
    return this.keys.length;
  }

  set(key: K, val: V) {
    const i = this.keys.indexOf(key);
    if (i < 0) {
      this.keys.push(key);
      this.values.push(val);
    } else {
      this.values[i] = val;
    }
  }

  forEach(callback: CallBack<K, V>) {
    for (let i = 0; i < this.keys.length; i++) {
      callback(this.keys[i], this.values[i]);
    }
  }

  has(key: K) {
    return this.keys.includes(key);
  }

  del(key: K) {
    const i = this.keys.indexOf(key);
    if (i >= 0) {
      this.keys.splice(i, 1);
      this.values.splice(i, 1);
    }
  }
}
