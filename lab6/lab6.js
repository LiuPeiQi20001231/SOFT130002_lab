/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime() {
    var d = new Date();
    var second = d.getSeconds();
    var count = 0;
    var num = 1;
    console.log(num);
    var result = function () {
        num *= 2;
        return num;
    };
    var count1 = function () {
        count += 1;
        return count;
    };
    if (second > 10) {
        var interval = setInterval(function () {
            second += 5;
            if (second > 60) {
                console.log("整点");
                console.log(count1());
                clearInterval(interval);
            }
            count1();
            console.log(result());
        }, 5000);
    } else {

        var interval = setInterval(function () {
            if (count1() === 10) {
                clearInterval(interval)
            }
            console.log("10 times");
            console.log(result());
        }, 5000);
    }
}
// testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    var teleReg = /^1[34578][0-9]{9}$/;
    var  mailReg = /^[a-z0-9A-Z]+[a-z0-9A-Z_]{3,15}@([a-z0-9A-Z]+\.)+[a-zA-Z]{2,4}$/;
    var teleJud = teleReg.test(telephone);
    var mailJud = mailReg.test(mail);
    if( teleJud == true && mailJud == true){
        console.log(telephone);
        console.log(mail);
    }
else if(teleJud == true && mailJud == false){
    console.log("The telephone is right and the mail is wrong!");
    }
    else if(teleJud == false && mailJud == true){
        console.log("The mail is right and the telephone is wrong!");
    }
    else{
        console.log("Both are wrong");
    }
}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    var pattern = /\b([a-z]+) \1\b/ig;
    let result = new Set(str.match(pattern));
    if(result.size > 10){
        result.sort(function (a,b) {
            return (a.name + "").localeCompare(b.name + "")

        })
    }
var count = 0;
    for(let val of result.values()){
        if(count < 10)
            console.log(val)
        else
            break;
        count++;
    }
}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
 let wantSet = new Set(wantInput);
    let actualSet = new Set(actualInput);
    for(var elem of actualSet){
        wantSet.delete(elem);
    }
    console.log(wantSet);
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    let array = str.split("");
    array.reverse();
    let result = [];
    let number = 0;
    for(let i = 0;i < array.length;i ++){
        if(array[i] !=="" ){
            result[number] = array[i];
        number++;
        }
    }
    console.log(result.join(""));
}


/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let map = new Map;
    for(let i = 1;i < nums; i++){
        map.set(nums[i],i);
        if(map.has(target-nums[i])){
            console.log([map.get(target-nums[i]),i]);

        }
    }
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let map = new Map;
    let num = 0;
    for(let i = 1;i < str.length; i++){
        if(map.has(str[i])){
            num++;
            map.set(str[i],i);
        }
    }
    console.log(num);
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
//构造函数
function DevelopingCountry() {
    Country.call(this,"a developing country");
    if(typeof this.sayHi != "function")
        DevelopingCountry.prototype.sayHi = function()
        {
        console.log("Hi. i am" + DevelopingCountry.name);
        }
}
    var developing = new Country()
    developing.sayHi();
//原型链
function PoorCountry(){
    this.name = "a poor country";
    if(typeof  PoorCountry.prototype.saySad != "function")
        PoorCountry.prototype.saySad = function()
        {
            console.log("Hi. i am" + DevelopingCountry.name);
        }
}
               PoorCountry.prototype = new Country();
var poor = new PoorCountry();
poor.saySad();
//object create
var DevelopedCountry = Object.create(Country,{
    name:{ value: "a developed country"},sayHappy:{value:function () {
        console.log("I am a Happy developed country.");

        }}
});
DevelopedCountry.sayHappy();

