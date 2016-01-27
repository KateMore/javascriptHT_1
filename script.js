var decade = ["Двадцать" , "Тридцать" , "Сорок" , "Пятьдесят" , "Шестьдесят" , "Семьдесят" , "Восемьдесят" , "Девяносто" ];
var number = ["один" , "два" , "три" , "четыре" , "пять" , "шесть" , "семь" , "восемь", "девять" , "Десять" , "Одиннадцать" , "Двенадцать" , "Тринадцать" , "Четырнадцать" , "Пятнадцать" , "Шестнадцать", "Семнадцать" , "Восемнадцать" , "Девятнадцать" ];
var numeric = prompt("Введите число от 0 до 99", "");

if (isNaN(numeric)) {
  alert( "Это не число" );
} 
else{

var numeric_length = numeric.length;


if (numeric_length == 1) {
	
	if(numeric ==1) { 
		alert(number[0]);
	} else if (numeric ==2) {
		alert(number[1]);
	} else if (numeric ==3) {
		alert(number[2]);
	} else if (numeric ==4) {
		alert(number[3]);
	} else if (numeric ==5) {
		alert(number[4]);
	} else if (numeric ==6) {
		alert(number[5]);
	} else if (numeric ==7) {
		alert(number[6]);
	} else if (numeric ==8) {
		alert(number[7]);
	} else if (numeric ==9) {
		alert(number[8]);
	} 
}
else if (numeric_length == 2) {
	if(numeric-10 ==0) { 
		alert(number[9]);
	} else if(numeric-10 ==1) {
		alert(number[10]);
	} else if(numeric-10 ==2) {
		alert(number[11]);
	} else if(numeric-10 ==3) {
		alert(number[12]);
	} else if(numeric-10 ==4) {
		alert(number[13]);
	} else if(numeric-10 ==5) {
		alert(number[14]);
	} else if(numeric-10 ==6) {
		alert(number[15]);
	} else if(numeric-10 ==7) {
		alert(number[16]);
	} else if(numeric-10 ==8) {
		alert(number[17]);
	} else if(numeric-10 ==9) {
		alert(number[18]);
	} 
};

var number_of_tens = numeric/10|0;
var number_of_digits = numeric%10;
var result_of_tens = 0;
var result_of_digits = 0;

if (numeric_length == 2) {
	
if(number_of_tens ==2) {
 result_of_tens = decade[0];
}
else if (number_of_tens ==3) {
	result_of_tens = decade[1];
}
else if (number_of_tens ==4) {
	result_of_tens = decade[2];
}
else if (number_of_tens ==5) {
	result_of_tens = decade[3];
}
else if (number_of_tens ==6) {
	result_of_tens = decade[4];
}
else if (number_of_tens ==7) {
	result_of_tens = decade[5];
}
else if (number_of_tens ==8) {
	result_of_tens = decade[6];
}
else if (number_of_tens ==9) {
	result_of_tens = decade[7];
}

if(number_of_digits ==1) {
	result_of_digits = number[0];
}
else if (number_of_digits ==2) {
	result_of_digits = number[1];
}
else if (number_of_digits ==3) {
	result_of_digits = number[2];
}
else if (number_of_digits ==4) {
	result_of_digits = number[3];
}
else if (number_of_digits ==5) {
	result_of_digits = number[4];
}
else if (number_of_digits ==6) {
	result_of_digits = number[5];
}
else if (number_of_digits ==7) {
	result_of_digits = number[6];
}
else if (number_of_digits ==8) {
	result_of_digits = number[7];
}
else if (number_of_digits ==9) {
	result_of_digits = number[8];
}
}


alert(result_of_tens + " " +result_of_digits);


}