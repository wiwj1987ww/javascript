	qvar generateClosure = function(){
			var count = 0;
			var get = function(){
				count++;
				return count;
			};
			return get;
		};
		var counter = generateClosure();
		console.log(counter());//输出1
		console.log(counter());//输出2
		console.log(counter());//输出3

		//闭包的特性：当一个函数返回它内部定义的一个函数时，就产生了一个闭包，闭包不但包括被返回的函数，还包括这个函数的定义环境。上面的例子中，当函数generateClosure（）的内部函数get被一个外部变量counter引用时，counter和generateClosure（）的局部变量就是一个闭包。

		var counter1 = generateClosure();
		var counter2 = generateClosure();
		console.log(counter1());//输出1
		console.log(counter2());//输出1
		console.log(counter1());//输出2
		console.log(counter1());//输出3
		console.log(counter2());//输出2

	    //counter1和counter2分别调用了generateClosure()函数，生成了两个闭包的实例，他们内部引用的count变量分别属于各自的运行环境。我们也可以理解为，在generateClosure()返回get函数时，私下将get可能引用到的generateClosure()函数的内部变量（也就是count变量），也返回了，并在内存中生成了一个副本，之后generateClosure()返回的函数的两个实例counter1和counter2 就是相互独立的了。


	    // 闭包的用途：a.实现嵌套的回调函数，b.隐藏对象的细节
	    // 1.嵌套的回调函数
	    /* 2.实现私有成员   javascript的对象没有私有属性，也就是说对象的每一个属性都是暴露给外部的。这样可能会有安全隐患，譬如对象的使用者直接修改了某个属性，导致对象内部数据的一致性受到破坏等。javascript通过约定在所有私有属性前面加上下划线（_varible）,表示这个属性是是有的，外部对象不应该直接读写它。但是只是个非正式的约定，假设对象的使用者不这么做，有没有更严格的机制呢？答案是有的，通过闭包可以实现。
	    */

	    var newClosure = function(){
	    	var score = 0;
	    	var get function(){
	    		score++;
	    		return score;
	    	};
	    	return get;
	    };

	    var newScore = newClosure();
	    console.log(newScore());//输出1
	    console.log(newScore());//输出2
	    console.log(newScore());//输出3

	    /*
			只有调用newScore()才能访问到闭包的score变量，并按照规则对其增加 1 ，除此之外绝无可能用其他方式找到score变量。
	    */
