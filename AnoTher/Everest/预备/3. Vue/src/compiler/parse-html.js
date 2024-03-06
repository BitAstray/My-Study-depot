// ast语法树 用对象来描述原生语法 虚拟dom 用对象来描述dom节点
// ?: 匹配不捕获
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`; // 标签名
const qnameCapture = `((?:${ncname}\\:)?${ncname})`; // </my:xx>
const startTagOpen = new RegExp(`^<${qnameCapture}`); // 标签开头的正则 捕获的内容是标签名
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`); // 匹配标签结尾的 </div>
const attribute =
  /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/; // 匹配属性的
const startTagClose = /^\s*(\/?)>/; // 匹配标签结束的 >

let root = null; // ast语法树的树根
let currentParent; // 标识当前父亲是谁
let stack = []; // 用于存放标签的栈
const ELEMENT_TYPE = 1;
const TEXT_TYPE = 3;

/**
 * @description: 创建ast语法树
 * @param {*} tagName
 * @param {*} attrs
 * @return {Object}
 */
function createASTElement(tagName, attrs) {
  return {
    tag: tagName,
    type: ELEMENT_TYPE,
    children: [],
    attrs,
    parent: null,
  };
}

/**
 * @description: 处理开始标签
 * @param {*} tagName
 * @param {*} attrs
 */
function start(tagName, attrs) {
  // 遇到开始标签，就创建一个ast元素
  let element = createASTElement(tagName, attrs);
  if (!root) {
    root = element;
  }
  currentParent = element; // 把当前元素标记成父ast树
  stack.push(element); // 将开始标签存放到栈中
}

/**
 * @description: 处理文本
 * @param {*} text
 */
function chars(text) {
  text = text.replace(/\s/g, "");
  if (text) {
    currentParent.children.push({
      text,
      type: TEXT_TYPE,
    });
  }
}

/**
 * @description: 处理结束标签
 * @param {*} tagName
 */
function end(tagName) {
  let element = stack.pop(); // 拿到的是ast对象
  // 标识当前这个标签的父亲是谁
  currentParent = stack[stack.length - 1];
  if (currentParent) {
    element.parent = currentParent;
    currentParent.children.push(element); // 实现了一个树的父子关系
  }
}

/**
 * @description: 解析html字符串
 * @param {*} html
 */
export function parseHTML(html) {
  // 不停的解析html字符串
  while (html) {
    let textEnd = html.indexOf("<");
    if (textEnd == 0) {
      // 如果当前索引为0，肯定是一个标签，开始标签或者结束标签
      let startTagMatch = parseStartTag(); // 通过这个方法获取到匹配的结果 tagName,attrs
      if (startTagMatch) {
        start(startTagMatch.tagName, startTagMatch.attrs); //* 1. 解析开始标签
        continue; // 如果开始标签匹配完毕后，继续下一次匹配
      }
      let endTagMatch = html.match(endTag);
      if (endTagMatch) {
        advance(endTagMatch[0].length);
        end(endTagMatch[1]); //* 3. 解析结束标签
        continue;
      }
    }
    let text;
    if (textEnd >= 0) {
      text = html.substring(0, textEnd);
    }
    if (text) {
      advance(text.length);
      chars(text); //* 2. 解析文本
    }
  }

  /**
   * @description: 截取html字符串 更新html内容
   * @param {*} n
   */
  function advance(n) {
    html = html.substring(n);
  }

  /**
   * @description: 解析开始标签
   * @return {Object}
   */
  function parseStartTag() {
    let start = html.match(startTagOpen);
    if (start) {
      const match = {
        tagName: start[1],
        attrs: [],
      };
      advance(start[0].length); // 将标签删除
      let end, attr;
      while (
        !(end = html.match(startTagClose)) &&
        (attr = html.match(attribute))
      ) {
        // 将属性进行解析
        advance(attr[0].length); // 将属性去掉
        match.attrs.push({
          name: attr[1],
          value: attr[3] || attr[4] || attr[5],
        });
      }
      if (end) {
        advance(end[0].length);
        return match;
      }
    }
  }
  return root;
}
