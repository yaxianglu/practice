ES6-Set研究
=================
1.Set是什么？  
> Set是ES6中引入的一个数据类型，可以通过 new Set()创建一个类似于Array的数据类型。

2.为什么要使用Set？ 
>先说结论：因为快！！！
>Array是一个索引集合。这说明数组中的数据值按索引排序
>相比之下，set是一个键的集合。set不使用索引，而是使用键对数据排序
>set 中的元素按插入顺序是可迭代的，它不能包含任何重复的数据。换句话说，set中的每一项都必须是<font color="#dd0000">唯一</font>的
><font color="blue">另外</font>，NaN和undefined都可以被存储在Set 中， NaN之间被视为相同的值（NaN被认为是相同的，尽管 NaN !== NaN）。

2.1.时间复杂度比较  
>数组用来搜索元素的方法时间复杂度为<font color="#dd0000">0(N)</font>。换句话说，运行时间的增长速度与数据大小的增长速度相同。   
>相比之下，Set用于搜索、删除和插入元素的方法的时间复杂度都只有<font color="#dd0000">O(1)</font>，这意味着数据的大小实际上与这些方法的运行时间无关。

2.2.究竟有多快？
```javascript
  var arr = [];
  var set = new Set();
  var length = 1000000;
  for (var i = 0; i < length; i++) {
    arr.push(i);
    set.add(i);
  }
  console.info(arr, set); // 打印结果好慢
  // 下面开始尝试查找一个数
  var result;
  console.time('Array'); 
  result = arr.indexOf(123123) !== -1; 
  console.timeEnd('Array');
  console.time('Set'); 
  result = set.has(123123); 
  console.timeEnd('Set');
  /** 
   * 结果：Array执行的结果大概在 0.192ms、Set执行结果在0.0378ms。可见一斑
   * **/
```

3.Set的API  
>add(value):添加value值，如果已经有了，不会再添加。因为唯一性
>clear():清空，顾名思义
>delete(value):删除指定的值
>entries():返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。为了使这个方法和Map对象保持相似， 每个值的键和值相等。(来自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/entries))
>has(value):检查有没有
>values(): 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值

4.如何判断类型是Set？  
```javascript
  // 类型判断应该不属于这一篇章，顺便提一下
  var set = new Set();
  console.info(set instanceof Set);  // true
  console.info(set instanceof Set);  // true
  console.info(typeof set); // object
```
5.如何实现Set的深拷贝？  
```javascript
  // Set的深拷贝
  // 方法一：利用Set.prototype.forEach 和 Set.prototype.add 实现
  var set = new Set([444, 555, 666]);
  console.info(set);
  var copySet = new Set();
  set.forEach(item => {
    copySet.add(item);
  });
  console.info(copySet);
  console.info(copySet == set, copySet === set);

  // 方法二：利用new
  var set = new Set([444, 555, 666]);
  console.info(set);
  var copySet = new Set(set);
  console.info(copySet);
  console.info(copySet == set, copySet === set);

  // 其他
  var set = new Set([444, 555, 666]);
  var copySet = set.values();
  console.info(copySet == set, copySet === set);

  // 但是问题来了，上面new Set的时候，传入的数组值都不是引用类型的，如果传入的是引用类型的呢？
  var obj = { a: 123 };
  var set = new Set([444, 555, obj]);
  console.info(set);
  var copySet = new Set();
  set.forEach(item => {
    copySet.add(item);
  });
  console.info(copySet);
  console.info(copySet == set, copySet === set);
  obj.b = 44;
  console.info(set, copySet); // 自行查看结果。
  // 所以，如何实现Set的深拷贝呢？
```