	$(document).ready(function() {
		/**
			* Задача 1
			*/
		var firstNumb = $('.input-first .firstNumb');
		var secondNumb = $('.input-first .secondNumb');
		var result1 = $('.input-first .result1');

		$('.operations-first input').on('click', function(){
			var sign = this.value;
			if((firstNumb.val() != '') && (secondNumb.val() != '')){
				var firstInp = +firstNumb.val();
				var secondInp = +secondNumb.val();
				if(!isNaN(firstInp) && !isNaN(secondInp)){
					var res = calc(firstInp, secondInp, sign);	
					result1.val(res);
				}
				else {
					alert('Введите числа');
				}
			}
			else alert('Заполните первое и второе поле');
		});

		function calc(firstNum, secondNum, op){
				switch(op){
					case '+': return firstNum + secondNum;
					break;
					case '-': return firstNum - secondNum;
					break;
					case '/': return firstNum / secondNum;
					break;
					case '*': return firstNum * secondNum;
					break;
				}
			}

		/**
			* Задача 2
			*/
			var upperInput = $('.second .upper');
			$('.second .upperButton').on('click', function(){
				upperInput.val(upperInput.val().toUpperCase());
			});

			/**
				* Задача 3
				*/
			var firstNum = $('.input-third .firstNum');
			var secondNum = $('.input-third .secondNum');
			var result = $('.input-third .result');

			$('.operations-third input').on('click', function(){
				var sign = this.dataset.value;
				if((firstNum.val() != '') && (secondNum.val() != '')){
					var firstInp = +firstNum.val();
					var secondInp = +secondNum.val();
					if(!isNaN(firstInp) && !isNaN(secondInp)){
						var res = calc(firstInp, secondInp, sign);	
						result.val(res);
					}
					else {
						alert('Введите числа');
					}
				}
				else alert('Заполните первое и второе поле');
			});

		/**
			* Задача 4
			*/

			function countSalaries(salaries){
				var res = 0;
				for (key in salaries){
					res += salaries[key];
				}
				return res;
			}

			var salaries = {
			"Вася": 100,
			"Петя": 300,
			"Даша": 250
			};

			var fourthResult = document.querySelector('.fouth-res');
			fourthResult.innerHTML = countSalaries(salaries);

		/**
			* Задача 5
			*/

			function getHighestSalary(obj){
				var highest = 0;
				var name = '';
				for (key in obj){
					if (highest < obj[key]){
						highest = obj[key];
						name = key;
					}
				}
				highest = (highest == 0) ? 'нет сотрудников' :  name;
				return highest;
			}

			var salaries = {
			"Вася": 100,
			"Петя": 300,
			"Даша": 250
			};

			var fifthResult = document.querySelector('.fifth-res');
			fifthResult.innerHTML = getHighestSalary(salaries);

		/**
			* Задача 6
			*/

			function recurs(num){
					if(num != 1){
						return recurs(num - 1) + " " + num;
					}
					else {
						return num;
					}
				}

			var n = prompt('Введите натуральное число', '');

			alert(recurs(n));

		/**
			* Задача 7
			*/

			function sumTo1(){
				var n = prompt('задача 7. 1 решение\n Введите число','');
				var res = 0;
				for (var i = 1; i <= n; i++){
					res += i;
				}
				return res;
			}
			alert(sumTo1());

			function sumTo2(n) {
			  if (n == 1) {
			  	return n;
			  }
			  else {
				  return n + sumTo2(n - 1);			  	
			  }

			}

			var n = +prompt('задача 7. 2 решение\n Введите число','');
			alert( sumTo2(n) );

		/**
			* Задача 7
			*/

			function getNum1(){
				var n = 1;
				var timer = setInterval(function(){
					console.log(n);
					if(n == 20) clearInterval(timer);
					n++;
				}, 100)
			}

			getNum1();

			function getNum2(){
				var n = 1;
				var timer = setTimeout(function tick(){
					console.log(n);
					n++;
					if(n <= 20){
						timer = setTimeout(tick, 100);
					}
				}, 100);
			}

			getNum2();

	});