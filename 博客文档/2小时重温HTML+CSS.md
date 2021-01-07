# 2小时重温HTML+CSS

-----
温故而知新，可以为师矣        --孔子 <br/><br/>
虽然每天都在编写代码，但是温习一些基础还是有好处的，就像上面孔子说的那句话，哈哈。那今天晚上就抽出了点时间把HTML和CSS重新复习了一遍，以慕课网为辅助工具，简单的整理了一下重要的干货知识点。

-----

## 1.继承
有一些css样式是不具有继承性:如border；
## 2.css优先级
当多重样式作用于同一HTML时，采用权值来判断，相同权值时才看先后顺序，
段前缩进:text-indent:2em; 中文字,字母间距:letter-spacing:20px;英文单词间距:word-spacing:20px;
## 3.常用内联块状元素
常用的内联块状元素有：img,input
## 4.网页布局模型
在网页中，元素有三种布局模型：1、流动模型（Flow）,2、浮动模型 (Float)3、层模型（Layer）
## 5.流动模型
先来说一说流动模型，流动（Flow）是默认的网页布局模式。也就是说网页在默认状态下的 HTML 网页元素都是根据流动模型来分布网页内容的。流动布局模型具有2个比较典型的特征：第一点，块状元素都会在所处的包含元素内自上而下按顺序垂直延伸分布，因为在默认状态下，块状元素的宽度都为100%。实际上，块状元素都会以行的形式占据位置.第二点，在流动模型下，内联元素都会在所处的包含元素内从左到右水平分布显示。（内联元素可不像块状元素这么霸道独占一行）
## 6.浮动模型
如果现在我们想让两个块状元素并排显示，怎么办呢？不要着急，设置元素浮动就可以实现这一愿望。任何元素在默认情况下是不能浮动的，但可以用 CSS 定义为浮动。
## 7.层布局模型
层布局模型就像是图像软件PhotoShop中非常流行的图层编辑功能一样，每个图层能够精确定位操作，但在网页设计领域，由于网页大小的活动性，层布局没能受到热捧。但是在网页上局部使用层布局还是有其方便之处的。下面我们来学习一下html中的层布局。如何让html元素在网页中精确定位，就像图像软件PhotoShop中的图层一样可以对每个图层能够精确定位操作。CSS定义了一组定位（positioning）属性来支持层布局模型。
层模型有三种形式：
1、绝对定位(position: absolute) 个人理解：相对于最近的父元素的定位
2、相对定位(position: relative) 个人理解：相对于元素没有定位时的正常位置
3、固定定位(position: fixed) 个人理解：相对于浏览器窗口的定位
## 8.层模型--绝对定位
如果想为元素设置层模型中的绝对定位，需要设置position:absolute(表示绝对定位)，这条语句的作用将元素从文档流中拖出来，然后使用left、right、top、bottom属性相对于其最接近的一个具有定位属性的父包含块进行绝对定位。如果不存在这样的包含块，则相对于body元素，即相对于浏览器窗口。
## 9.层模型--相对定位
如果想为元素设置层模型中的相对定位，需要设置position:relative（表示相对定位），它通过left、right、top、bottom属性确定元素在正常文档流中的偏移位置。相对定位完成的过程是首先按static(float)方式生成一个元素(并且元素像层一样浮动了起来)，然后相对于以前的位置移动，移动的方向和幅度由left、right、top、bottom属性确定，偏移前的位置保留不动。

<div align="left">
    <img src="https://jasonccj-1258779086.cos.ap-beijing.myqcloud.com/img/Blog/html%2Bcss/relative1.png" width="700px" />
</div>

什么叫做“偏移前的位置保留不动”呢？大家可以做一个实验，在右侧代码编辑器的19行div标签的后面加入一个span标签，在标并在span标签中写入一些文字。如下代码：
```
<body>
    <div id="div1"></div><span>偏移前的位置还保留不动，覆盖不了前面的div没有偏移前的位置</span>
</body>
```
<div align="left">
    <img src="https://jasonccj-1258779086.cos.ap-beijing.myqcloud.com/img/Blog/html%2Bcss/relative2.png" width="700px" />
</div>

从效果图中可以明显的看出，虽然div元素相对于以前的位置产生了偏移，但是div元素以前的位置还是保留着，所以后面的span元素是显示在了div元素以前位置的后面。
## 10.层模型--固定定位
本身不占用文档流位置，相对于浏览器窗口的定位，和background-attachment:fixed属性（设置背景图片固定）功能相同；
## 11.Absolute和Relative的结合
使用position:absolute可以实现被设置元素相对于浏览器（body）设置定位以后，大家有没有想过可不可以相对于其它元素进行定位呢？答案是肯定的，当然可以。使用position:relative来帮忙，但是必须遵守下面规范：
```
    1、参照定位的元素必须是相对定位元素的前辈元素：
<div id="box1"><!--参照定位的元素-->
    <div id="box2">相对参照元素进行定位</div><!--相对定位元素-->
</div>
  2、参照定位的元素必须加入position:relative;
#box1{
    width:200px;
    height:200px;
    position:relative;        
}
  3、定位元素加入position:absolute，便可以使用top、bottom、left、right来进行偏移定位了。
#box2{
    position:absolute;
    top:20px;
    left:30px;         
}
    这样box2就可以相对于父元素box1定位了（这里注意参照物就可以不是浏览器了，而可以自由设置了）。
```

## 12.字体样式
针对设置字体样式的缩写形式时你至少要指定 font-size 和 font-family 属性，其他的属性(如 font-weight、font-style、font-variant、line-height)如未指定将自动使用默认值。
            在缩写时 font-size 与 line-height 中间要加入“/”斜扛。
            一般情况下因为对于中文网站，英文还是比较少的，所以下面缩写代码比较常用
```
body{
    font:12px/1.5em  "宋体",sans-serif;
}
```

            只是有字号、行间距、中文字体、英文字体设置。
## 13.配色表参考

<div align="left">
    <img src="https://jasonccj-1258779086.cos.ap-beijing.myqcloud.com/img/Blog/html%2Bcss/color.jpg" width="700px" />
</div>

## 14.长度单位
长度单位总结一下，目前比较常用到px（像素）、em、% 百分比，要注意其实这三种单位都是相对单位。
1、像素

像素为什么是相对单位呢？因为像素指的是显示器上的小点（CSS规范中假设“90像素=1英寸”）。实际情况是浏览器会使用显示器的实际像素值有关，在目前大多数的设计者都倾向于使用像素（px）作为单位。

2、em

就是本元素给定字体的 font-size 值，如果元素的 font-size 为 14px ，那么 1em = 14px；如果 font-size 为 18px，那么 1em = 18px。如下代码

```
p{font-size:12px;text-indent:2em;}
```
上面代码就是可以实现段落首行缩进 24px（也就是两个字体大小的距离）。
下面注意一个特殊情况：

但当给 font-size 设置单位为 em 时，此时计算的标准以 p 的父元素的 font-size 为基础。如下代码：

html:

```
<p>以这个<span>例子</span>为例。</p>
```
css:
```
p{font-size:14px}
span{font-size:0.8em;}
```
结果 span 中的字体“例子”字体大小就为 11.2px（14 * 0.8 = 11.2px）。  

3、百分比
```
p{font-size:12px;line-height:130%}
```
设置行高（行间距）为字体的130%（12 * 1.3 = 15.6px）。

## 15.水平居中

### 1.行内元素
行内元素直接设置其父元素text-align:center

### 2.块状元素
#### a.定宽块状元素
满足定宽和块状两个条件的元素是可以通过设置“左右margin”值为“auto”来实现居中的。
margin：0 auto;

#### b.不定宽块状元素
不定宽度的块状元素有三种方法居中（这三种方法目前使用的都很多）：

1)加入 table 标签  
2)设置 display: inline 方法：与第一种类似，显示类型设为 行内元素，进行不定宽元素的属性设置  
3)设置 position:relative 和 left:50%：利用 相对定位 的方式，将元素向左偏移 50% ，即达到居中的目的  

1）.加入 table 标签  
为什么选择方法一加入table标签? 是利用table标签的长度自适应性---即不定义其长度也不默认父元素body的长度（table其长度根据其内文本长度决定），因此可以看做一个定宽度块元素，然后再利用定宽度块状居中的margin的方法，使其水平居中。  

第一步：为需要设置的居中的元素外面加入一个 table 标签 ( 包括 <tbody>、<tr>、<td> )。  
第二步：为这个 table 设置“左右 margin 居中”（这个和定宽块状元素的方法一样）。  
html代码：
```
<div>
 <table>
  <tbody>
    <tr><td>
    <ul>
        <li>我是第一行文本</li>
        <li>我是第二行文本</li>
        <li>我是第三行文本</li>
    </ul>
    </td></tr>
  </tbody>
 </table>
</div>
```
css代码：
```
<style>
table{
    border:1px solid;
    margin:0 auto;
}
</style>
```

2)设置 display: inline 方法  
改变块级元素的 display 为 inline 类型（设置为 行内元素 显示），然后使用 text-align:center 来实现居中效果  
html代码：
```
<body>
<div class="container">
    <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
    </ul>
</div>
</body>
```
css代码：
```
<style>
.container{
    text-align:center;
}
/* margin:0;padding:0（消除文本与div边框之间的间隙）*/
.container ul{
    list-style:none;
    margin:0;
    padding:0;
    display:inline;
}
/* margin-right:8px（设置li文本之间的间隔）*/
.container li{
    margin-right:8px;
    display:inline;
}
</style>
```
这种方法相比第一种方法的优势是不用增加无语义标签，但也存在着一些问题：它将块状元素的 display 类型改为 inline，变成了行内元素，所以少了一些功能，比如设定长度值。   

3)设置 position:relative 和 left:50%：利用 相对定位 的方式，将元素向左偏移 50% ，即达到居中的目的    
方法三:通过给父元素设置 float，然后给父元素设置 position:relative 和 left:50%，子元素设置 position:relative 和 left: -50% 来实现水平居中。   
html代码：
```
<body>
<div class="container">
    <div class="section">居中显示部分</div>
</div>
</body>
```
css代码：
```
<style>
.container {
    float:left;
    position:relative;
    left:50%;
}
.section {
    background:#ccc;
    position:relative;
    left:-50%;
}
</style>
```

这三种方法使用得都非常广泛，各有优缺点，具体选用哪种方法，可以视具体情况而定。   

## 16.垂直居中
### 1.单行文本
父元素高度确定的单行文本的竖直居中的方法是通过设置父元素的 height 和 line-height 高度一致来实现的   
html代码：
```
<div class="container">
    Hello,Jasonccj!
</div>
```
css代码:
```
<style>
.container{
    height:100px;
    line-height:100px;
    background:#999;
}
</style>
```
这种文字行高与块高一致带来了一个弊端：当文字内容的长度大于块的宽时，就有内容脱离了块。   

### 2.多行文本
#### a.方法一:
使用插入 table  (包括tbody、tr、td)标签，同时设置 vertical-align：middle。   
css 中有一个用于竖直居中的属性 vertical-align，在父元素设置此样式时，会对inline-block类型的子元素都有用.   
html代码：
```
<body>
<table><tbody><tr><td class="wrap">
<div>
    <p>居中的内容</p>
</div>
</td></tr></tbody></table>
</body>
```
css代码：
```
<style>
table td{height:500px;background:#ccc}
</style>
```
因为 td 标签默认情况下就默认设置了 vertical-align 为 middle，所以我们不需要显式地设置了。   

#### b.方法二:
在 chrome、firefox 及 IE8 以上的浏览器下可以设置块级元素的 display 为 table-cell（设置为表格单元显示），激活 vertical-align 属性，但注意 IE6、7 并不支持这个样式, 兼容性比较差。  
html代码：
```
<div class="container">
    <div>
        <p>居中部分</p>
    </div>
</div>
```
css代码：
```
<style>
.container{
    height:300px;
    background:#ccc;
    display:table-cell;
    vertical-align:middle;
}
</style>
```
这种方法的好处是不用添加多余的无意义的标签，但缺点是不兼容IE6,7

## 17.隐性改变display类型
当为元素（不论之前是什么类型元素，display:none 除外）设置以下 2 个句之一：
 >* 1. position : absolute 
 >* 2. float : left 或 float:right 

元素的display显示类型就会自动变为以 display:inline-block（块状元素）的方式显示，当然就可以设置元素的 width 和 height 了，且默认宽度不占满父元素。

html代码:
```
<div class="container">
    <a href="#" title="">我们知道a标签是行内元素,现在为该标签设置宽度了.</a>
</div>
```
css代码:
```
<style>
.container a{
    position:absolute;
    width:200px;
    background:#ccc;
}
</style>
```


# 写在最后
- [@Jasonccj](https://github.com/Jasonccj)
- [github](https://github.com/Jasonccj)
- [慕课网博客](https://www.imooc.com/u/4139837/articles)
- [掘金博客](https://juejin.im/user/59035c4c61ff4b00669b241f/posts)
- [QQ交流群:424072183](https://jq.qq.com/?_wv=1027&k=5E6XfSx)

