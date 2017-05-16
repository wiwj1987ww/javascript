
		var v1 = 'v1';
		var f1 = function(){
			console.log(v1);//输出v1
		};
		f1();

		var f2 = function(){
			var v1 = 'local';
			console.log(v1);//输出local
		};
		f2();

		//函数可以嵌套，每一层是一个作用域（scope），变量搜索顺序是从内往外的

		var scope = 'global';

		var f = function(){
			console.log(scope);//输出undefined
			var scope = 'f';
		}
		f();

		//为什么没有输出global？因为按照作用域搜索顺序，在console.log()函数访问scope变量时，javascript会先搜索函数f 的作用域，恰巧在 f 作用域里面搜索到 scope 变量，所以上层作用域中定义的 scope 就被屏蔽了，但执行到 console.log语句时，scope 还没被定义，或者说初始化，所以就得到undefined值。
	
