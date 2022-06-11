## 1. ECMAScript 简介

- ECMA（European Computer Manufacturers Association）中文名称为欧洲计算机制造商协会，这个组织的目标是评估、开发和认可电信和计算机标准。1994 年后该组织改名为 Ecma 国际。

- ECMAScript 是由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言

- Ecma 国际制定了许多标准，而 ECMA-262 只是其中的一个，[查看 Ecma 标准](http://www.ecma-international.org/publications/standards/Standard.htm)。

## 2.ECMA-262 历史

| 第 1 版  | 1997 年            | 制定了语言的基本语法                                                  |
| -------- | ------------------ | --------------------------------------------------------------------- |
| 第 2 版  | 1998 年            | 较小改动                                                              |
| 第 3 版  | 1999 年            | 引入正则、异常处理、格式化输出等。IE 开始支持                         |
| 第 4 版  | 2007 年            | 过于激进，未发布                                                      |
| 第 5 版  | 2009 年            | 引入严格模式、JSON，扩展对象、数组、原型、字符串、日期方法            |
| 第 6 版  | 2015 年            | 模块化、面向对象语法、Promise、箭头函数、let、const、数组解构赋值等等 |
| 第 7 版  | 2016 年            | 幂运算符、数组扩展、Async/await 关键字                                |
| 第 8 版  | 2017 年            | Async/await、字符串扩展                                               |
| 第 9 版  | 2018 年            | 对象解构赋值、正则扩展                                                |
| 第 10 版 | 2019 年            | 扩展对象、数组方法                                                    |
| ES.next  | 动态指向下一个版本 |                                                                       |

> 注：从 ES6 开始，每年发布一个版本，版本号比年份最后一位大 1

## 3. 为什么要学习 ES6

- ES6 的版本变动内容最多，具有里程碑意义

- ES6 加入许多新的语法特性，编程实现更简单、高效

- ES6 是前端发展趋势，就业必备技能

## 4. let 关键字

let 关键字用来声明变量，使用 let 声明的变量有几个特点：

- 不允许重复声明

- 块儿级作用域

- 不存在变量提升

- 不影响作用域链

```js light
// let 声明变量
// console.log(a); //error: Cannot access 'a' before initialization
let a = 10;
// let a = false; // error: Identifier 'a' has already been declared

if (true) {
  let b = 10;
}
// console.log(b); // error:b is not defined

for (let index = 0; index < 10; index++) {}
// console.log(index); // error: index is not defined
```

> 应用场景：以后声明变量使用 let 就对了

## 5. const 关键字

const 关键字用来声明常量，const 声明有以下特点

- 声明必须赋初始值

- 标识符一般为大写

- 不允许重复声明

- 值不允许修改

- 块儿级作用域

  ```js light
  // const 定义常量
  
  // 1.不会变量提升
  // console.log(a); // error Cannot access 'a' before initialization
  // 2.必须有初始值
  const a = 10;
  // 3.基本类型的值不能修改
  // a = false;   // error: 基本类型的值不能修改
  // 4.块级作用域
  // 5.不能重复声明
  if (true) {
    const x = 'hello world';
  }
  // console.log(x); // error:  x is not defined
  
  for (const index = 0; index < 10; index++) {
    // const w = 10; // 重复定义
  }
  
  // 引用类型
  const obj = {
    name: 'admin',
    age: 18,
  };
  obj.name = '张三';
  obj.height = 1.83;
  
  const arr = [1, 2, 3, 4, 5, 6];
  
  arr[0] = 10;
  
  console.log(obj, arr);
  ```

> 注意: 对象属性修改和数组元素变化不会触发 const 错误
>
> 应用场景：声明对象、数组类型、以及常量时使用 const，非对象类型声明选择 let

## 6. 变量的解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值

```js light
//数组的解构赋值：将数组中的元素安装顺序取出来,通过=赋默认值
const arr = ['张学友', '刘德华', '黎明', '郭富城'];

const [one, two, three, four, five = '没有这个人'] = arr;
console.log(one, two, three, four, five);

// 对象的解构赋值:通过属性名进行解构赋值,=默认值
const lin = {
  name: '林志颖',
  tags: ['车手', '歌手', '小旋风', '演员'],
};

const { tags, name, age = 18 } = lin;
console.log(tags, name, age);

//复杂解构
const wangfei = {
  name: '王菲',
  age: 18,
  songs: ['红豆', '流年', '暧昧', '传奇'],
  history: [{ name: '窦唯' }, { name: '李亚鹏' }, { name: '谢霆锋' }],
};

let {
  songs: [one, two, three],
  history: [first, second, third],
} = wangfei;
```

> 注意：频繁使用对象方法、数组元素，就可以使用解构赋值形式

## 7. 模板字符串

模板字符串（template string）是增强版的字符串，用反引号（`）标识，特点：

- 字符串中可以出现换行符

- 可以使用 ${xxx} 形式输出变量

```js light
// 定义字符串
let str = `<ul>
            <li>沈腾</li>
            <li>玛丽</li>
            <li>魏翔</li>
            <li>艾伦</li>
        </ul>`; // 变量拼接
let star = '王宁';
let result = `${star}在前几年离开了开心麻花`;
```

> 注意：当遇到字符串与变量拼接的情况使用模板字符串

## 8. 简化对象写法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁

```js light
  let name = '网星软件';
  let slogon = '永远追求行业更高标准’; 
  let improve = function () {
    console.log('可以提高你的技能');
  }
  //属性和方法简写
  let atguigu = {
    name, slogon, improve, change() {
      console.log('可以改变你')
    }
  };

```

> 注意：对象简写形式简化了代码，所以以后用简写就对了

## 9. 箭头函数

ES6 允许使用「箭头」（=>）定义函数
箭头函数的注意点:

- 如果形参只有一个，则小括号可以省略

- 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果

- 箭头函数 this 指向声明时所在作用域下 this 的值

- 箭头函数不能作为构造函数实例化

- 不能使用 arguments

```js light
// 1. 通用写法
let fn = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3;
}; // 2. 省略小括号的情况
let fn2 = num => {
  return num * 10;
}; // 3. 省略花括号的情况
let fn3 = score => score * 20; // 4. this 指向声明时所在作用域中 this 的值
let fn4 = () => {
  console.log(this);
};
let school = {
  name: '网星软件',
  getName() {
    let fn5 = () => {
      console.log(this);
    };
    fn5();
  },
};
```

> 注意：箭头函数不会更改 this 指向，用来指定回调函数会非常合适

## 10. rest 参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments

```js light
/**
 * 作用与 arguments 类似
 */
function add(...args) {
  console.log(args);
}
add(1, 2, 3, 4, 5);
/**
 * rest 参数必须是最后一个形参
 */
function minus(a, b, ...args) {
  console.log(a, b, args);
}
minus(100, 1, 2, 3, 4, 5, 19);
```

> 注意：rest 参数非常适合不定个数参数函数的场景

## 11. spread 扩展运算符

扩展运算符（spread）也是三个点（...）

spread 运算符|扩展运算符|三点运算符

```js light
// 展开数组
let tfboys = ['德玛西亚之力', '德玛西亚之翼', '德玛西亚皇子'];
function fn() {
  console.log(arguments);
}
fn(...tfboys); // 展开对象
let skillOne = {
  q: '致命打击',
};
let skillTwo = {
  w: '勇气',
};
let skillThree = {
  e: '审判',
};
let skillFour = {
  r: '德玛西亚正义',
};
let gailun = { ...skillOne, ...skillTwo, ...skillThree, ...skillFour };
```

## 12. Promise

- Promise 是 ES6 引入的异步编程的新解决方案

- 语法上 Promise 是一个构造函数， 用来封装异步操作并可以获取其成功或失败的结果

- Promise 构造函数: Promise (excutor) {}

- Promise.prototype.then 方法

- Promise.prototype.catch 方法

  ```js light
  	<script>
      // 创建Promise对象
      // new Promise(callback(resolve,reject))
      // resolve,reject 两个回调函数   resolve(成功的结果)  reject(失败的结果)
      const p1 = new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 100);
        if (num % 2 === 0) {
          resolve(num + '是偶数');
        } else {
          reject(num + '是奇数');
        }
      });
  
      // 成功走then
      // 失败走catch
      p1.then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    </script>
  ```

- Promise.prototype.all

  ```js light
    // 并发 Promise.all 当p1和p2 都是偶数 then  有一个为奇数 catch
  Promise.all([p1, p2])
      .then(res => {
      	console.log(res);
  	})
      .catch(err => {
     	 console.log(err);
  	});
  ```

  

- Promise.race

  ```js light
  // Promse.race 两个promsie谁先返回，则结果就是他，无关乎成功和失败
  Promise.race([p1, p2])
  	.then(res => {
  		console.log(res);
  	})
  	.catch(err => {
  		console.log(err);
  	});
  ```

  

## 13. Promise 封装 Ajax

```js light
function ajax({
  url,
  method = 'GET',
  data = {},
  header = { 'Content-Type': 'application/json' },
} = {}) {
  return new Promise((resolve, reject) => {
    try {
      // 可能会发生错误的代码
      const xhr = XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject('microsoft.XMLHTTP');

      // 监听state的变化
      xhr.onreadystatechange = () => {
        const { readyState, status, responseText } = xhr;
        if (readyState === 4 && (status === 200 || status === 201)) {
          // 返回成功结果
          resolve(JSON.parse(responseText));
        }
      };

      // 开启连接
      xhr.open(method, url, true);
      //设置请求头
      for (const key in header) {
        xhr.setRequestHeader(key, header[key]);
      }
      // 发送请求 POST => 参数放在请求体中，需要序列化
      xhr.send(JSON.stringify(data));
    } catch (error) {
      // 对错误的处理
      reject(error);
    }
  });
}
```

## 14. 迭代器

#### 什么是迭代器

迭代器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作。
ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费
原生具备 iterator 接口的数据(可用 for of 遍历)

- Array
- Arguments
- Set
- Map
- String
- NodeList

工作原理

- 创建一个指针对象，指向当前数据结构的起始位置
- 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
- 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
- 每调用 next 方法返回一个包含 value 和 done 属性的对象
- 注: 需要自定义遍历数据的时候，要想到迭代器

#### Set

ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，集合的属性和方法：

- size 返回集合的元素个数
- add 增加一个新元素，返回当前集合
- delete 删除元素，返回 boolean 值
- has 检测集合中是否包含某个元素，返回 boolean 值
- clear 清空集合，返回 undefined

```js light
//创建一个空集合
let s = new Set(); //创建一个非空集合
let s1 = new Set([1, 2, 3, 1, 2, 3]); //集合属性与方法 //返回集合的元素个数
console.log(s1.size); //添加新元素
console.log(s1.add(4)); //删除元素
console.log(s1.delete(1)); //检测是否存在某个值
console.log(s1.has(2)); //清空集合
console.log(s1.clear());
```

#### Map

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键” 的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map 也实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历。Map 的属性和方法：

- size 返回 Map 的元素个数
- set 增加一个新元素，返回当前 Map
- get 返回键名对象的键值
- has 检测 Map 中是否包含某个元素，返回 boolean 值
- delete 删除 Map 中某个元素，返回 boolean 值
- clear 清空集合，返回 undefined

```js light
  //创建一个空 map
  let m = new Map();
  //创建一个非空 map
  let m2 = new Map([['name', '网星软件'], ['slogon', '不断提高行业标准'])
  //属性和方法
  //获取映射元素的个数
  console.log(m2.size)
  //添加映射值
  console.log(m2.set('age', 6));
  //获取映射值
  console.log(m2.get('age'));
  //检测是否有该映射
  console.log(m2.has('age'));
 // delete 删除 Map 中某个元素，返回 boolean 值
 console.log(m.delete('age'));
  //清除
  console.log(m2.clear());

```

## 15.class 类

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键字，可以定义类。基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。知识点：

- class 声明类
- constructor 定义构造函数初始化
- extends 继承父类
- super 调用父级构造方法
- static 定义静态方法和属性
- 父类方法可以重写

```js light
//父类
class Phone {
  //构造方法
  constructor(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  } //对象方法
  call() {
    console.log('我可以打电话!!!');
  }
} //子类
class SmartPhone extends Phone {
  constructor(brand, color, price, screen, pixel) {
    super(brand, color, price);
    this.screen = screen;
    this.pixel = pixel;
  } //子类方法
  photo() {
    console.log('我可以运行程序');
  }
  static connect() {
    console.log('我可以建立连接');
  }
  call() {
    console.log('我可以进行视频通话!!');
  } //静态方法
  static run() {
    console.log('运行');
  }
}

//实例化对象
const Nokia = new Phone('诺基亚', '灰色', 230);
const iPhone6s = new SmartPhone('苹果', '白色', 6088, '4.7inch', '500w'); //调用子类方法
iPhone6s.playGame(); //调用重写方法
iPhone6s.call(); //调用静态方法
SmartPhone.run();
```

## 16.模块化

#### 什么是模块化

- 模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。
- 模块化的优势有以下几点：
  - 防止命名冲突
  - 代码复用
  - 高维护性

#### 模块化规范产品

- CommonJS=> NodeJS、Browserify
- AMD => requireJS
- CMD => seaJS
- ES6

## 17. ES6 模块化

- 模块功能主要由两个关键字构成：export 和 import
- export 命令用于规定模块的对外接口
- import 命令用于输入其他模块提供的功能

## 18. export

export 有两种导出模式，export 和 export default(一个模块中只能有一个 default)

#### 导出变量

export 后边可以是一个变量声明表达式或者是一个{}里边包含变量名，但是不能直接输出一个变量， export default 后边可以直接跟一个常量或者变量，但是不能跟声明表达式

```js light
export var a = 1 //正确

const age = 100
export { age } //正确

export age //错误

export default age //正确

export default 50 //正确

export default var name='abc ' //错误

```

#### 导出函数

export 和 export 都可以直接导出函数声明语句，但是 export 后边不能跟匿名函数，如果直接导出函数名 export 需要用{}包裹

```js light
//正确
 export default function test () {
  console.log('test function')
}
   //正确
 export  function test2 () {
  console.log('test function')
}
//错误
 export  function  () {
  console.log('test function')
}
 //正确
 export default function  () {
  console.log('test function')
}

function test3(){
 console.log('test3 function')
}

//正确
expor {test3}
//正确
export default test3
错误
export  test3

```

#### 使用 as 别名导出

```js light
let a = 100;

export { a as age };
```

## 19. import

- 对于使用 export default 导出的，倒入时不需要使用{},且名字可以任意定义

- 对于使用 export 导出的，必须使用{}倒入，且名字必须一致

- 可以使用通配符* 方式全部导入 (import * as obj from '../a.js')

  ```js light
  //对于export default 导出的
  
  import myFn from './a.js';
  
  //对于使用export 导出的
  
  import { test1, test2 } from './a.js';
  ```
  
  #### 使用 as 别名导入
  
  ```js light
  let a = 100;
  
  export { a as age };
  ```
  
  ## 

## 20. 按需加载

采用回调函数的方式，所有的引入直接在回调中

```js light
document.onclick = function () {
  import('./a.js').then(data => {
    console.log(data);
  });
};
```

## 17. async 和 await

- async 和 await 两种语法结合可以让异步代码像同步代码一样
- async 函数的返回值为 promise 对象
- promise 对象的结果由 async 函数执行的返回值决定
- await 必须写在 async 函数中
- await 右侧的表达式一般为 promise 对象
- await 返回的是 promise 成功的值
- await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理
