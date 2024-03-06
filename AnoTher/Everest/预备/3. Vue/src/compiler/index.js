/*
 * @Author: BitCreate
 * @Date: 2024-03-06 13:47:40
 */
import { parseHTML } from "./parse-html";

const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g; // 匹配{{}}

/**
 * @description: 生成属性字符串
 * @param {*} attrs 属性数组
 * @return {String}
 */
function genProps(attrs) {
  let str = "";
  for (let i = 0; i < attrs.length; i++) {
    let attr = attrs[i];
    if (attr.name === "style") {
      // style="color: red" => {style: {color: 'red'}}
      let obj = {};
      attr.value.split(";").forEach(item => {
        let [key, value] = item.split(":");
        obj[key] = value;
      });
      attr.value = obj;
    }
    str += `${attr.name}:${JSON.stringify(attr.value)},`;
  }
  return `{${str.slice(0, -1)}}`;
}

/**
 * @description: 生成子节点
 * @param {*} el ast树
 * @return {String}
 */
function genChildren(el) {
  let children = el.children;
  if (children && children.length) {
    return `${children.map(c => gen(c)).join(",")}`;
  } else {
    return false;
  }
}

/**
 * @description: 对文本进行处理
 * @param {*} node ast树
 * @return {String}
 */
function gen(node) {
  if (node.type === 1) {
    return generate(node);
  } else {
    let text = node.text;
    let tokens = [];
    let match, index;
    // 每次匹配的偏移量 lastIndex
    let lastIndex = (defaultTagRE.lastIndex = 0); //只要是全局匹配，就需要将lastIndex每次匹配的时候调到0处
    while ((match = defaultTagRE.exec(text))) {
      index = match.index;
      if (index > lastIndex) {
        tokens.push(JSON.stringify(text.slice(lastIndex, index)));
      }
      tokens.push(`_s(${match[1].trim()})`);
      lastIndex = index + match[0].length;
      text = text.slice(index + match[0].length);
    }
    if (lastIndex < text.length) {
      tokens.push(JSON.stringify(text.slice(lastIndex)));
    }

    return `_v(${tokens.join("+")})`;
  }
}

/**
 * @description: 生成代码
 * @param {*} el ast树
 * @return {String}
 */
function generate(el) {
  let children = genChildren(el);
  let code = `_c('${el.tag}', ${
    el.attrs.length ? genProps(el.attrs) : "undefined"
  }${children ? `,${children}` : ""})`;

  return code;
}

export function compileToFunction(template) {
  //* 1) 解析html字符串，将html字符串 => ast语法树
  let root = parseHTML(template);
  //* 2) 需要将ast语法树生成最终的render函数 就是字符串拼接（模板引擎） */
  let code = generate(root);
  //* 所有的模板引擎实现 都需要new Function + with
  code = `with(this){return ${code}}`;
  let renderFn = new Function(code);

  // vue的render =》 虚拟dom =》 真实dom
  return renderFn;
}
