function show_txt(obj) {
var x = obj.parentNode.getElementsByTagName("div")[0];
if(x.style.display == "none") {x.style.display = "block";}
else {x.style.display = "none"; obj.parentNode.scrollIntoView();
// код ниже для совместимости с IE 7
var scrollTop = document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;
scrollTop -= document.documentElement.clientTop;
window.scrollTo(0, scrollTop);}}

function no_js(event) {
var event = event || window.event;
if (event.stopPropagation) {event.stopPropagation()}
  else event.cancelBubble = true;}

function show_img(id1,id2) {
document.getElementById(id1).style.display = "block";
document.getElementById(id2).style.display = "none";
}

function show(num) {
var txt = document.getElementById("txt"+num);
txt.style.display="block";
}
function remove(num) {
var txt = document.getElementById("txt"+num);
txt.style.display="none";
}

function spoiler(a) {
    if (a.parentNode.getElementsByTagName("div")[0].style.display != "") {
    a.parentNode.getElementsByTagName("div")[0].style.display = "";
    a.innerHTML = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; скрыть";
    }
else {
    a.parentNode.getElementsByTagName("div")[0].style.display = "none";
    a.innerText = "... читать далее";
    }
    }

function spoiler1(a) {
    if (a.parentNode.getElementsByTagName("div")[0].style.display != "") {
    a.parentNode.getElementsByTagName("div")[0].style.display = "";
    a.innerText = " . . . скрыть";
    }
else {
    a.parentNode.getElementsByTagName("div")[0].style.display = "none";
    a.innerText = "... показать";
    }
    }

function onlyClick(num) {
   var ref = document.getElementById("link_"+num);
   ref.innerText = "    вернуться";
   ref.style.display = "block";
   ref.parentNode.getElementsByTagName("div")[0].style.display = "";
   ref.parentNode.getElementsByTagName("a")[0].style.display = "none";
   ref.href = "#closure0";
 }

function mouseout(a) {
// alert(a.innerHTML +'  '+ a.href);
    a.parentNode.getElementsByTagName("div")[0].style.display = "none"
    a.parentNode.getElementsByTagName("a")[0].style.display = "block"
    a.href = "#closure";
    a.style.display = "none";
        }

 // функция удаления всплывающей подсказки по наведению
function hide(){
if(!document.getElementById('floatTip'));
else document.body.removeChild(document.getElementById('floatTip'));}
 // функция удаления всплывающей подсказки по клику
function hideClick(){
if(!document.getElementById('floatTipClick'));
else document.body.removeChild(document.getElementById('floatTipClick'));}

 // функция показа всплывающей подсказки по наведению
function show(a) {
hideClick();
var d = document.createElement('div');
d.className='floatTip';
d.id='floatTip';
d.innerHTML = a;
document.body.appendChild(d);
var ww = d.getBoundingClientRect().right - d.getBoundingClientRect().left;
var hh = d.getBoundingClientRect().bottom - d.getBoundingClientRect().top;
document.onmouseover=mouseover;
function mouseover(event) {
event = event || window.event;
var x = 0;
var y = 0;
x = event.clientX;
y = event.clientY;
if (x <= document.body.scrollLeft + ww/2) {
 d.style.left = document.body.scrollLeft + 'px'; }
else if (x >= document.body.scrollLeft + document.body.clientWidth - ww) {
d.style.left = document.body.scrollLeft + document.body.clientWidth - ww + 'px';}
else {
    d.style.left = x + document.body.scrollLeft - ww/2 + 'px';
  }
if (y <= hh + 10) {
d.style.top = y + document.body.scrollTop + 10 + 'px';
} else {
d.style.top = y + document.body.scrollTop - hh - 10 + 'px';
}
}
d.style.opacity='0.9';
d.style.filter='alpha(opacity=90)';
}

 // функция показа всплывающей подсказки по клику
function showClick(a) {
hideClick();
hide();
var d = document.createElement('div');
d.className='floatTipClick';
d.id='floatTipClick';
d.innerHTML = a;
document.body.appendChild(d);
var ww = d.getBoundingClientRect().right - d.getBoundingClientRect().left;
var hh = d.getBoundingClientRect().bottom - d.getBoundingClientRect().top;
document.onclick=mouseclick;
function mouseclick(event) {
event = event || window.event;
var x = 0;
var y = 0;
x = event.clientX;
y = event.clientY;
if (x <= document.body.scrollLeft + ww/2) {
 d.style.left = document.body.scrollLeft + 'px'; }
else if (x >= document.body.scrollLeft + document.body.clientWidth - ww) {
d.style.left = document.body.scrollLeft + document.body.clientWidth - ww + 'px';}
else {
    d.style.left = x + document.body.scrollLeft - ww/2 + 'px';
  }
if (y <= hh + 10) {
d.style.top = y + document.body.scrollTop + 10 + 'px';
} else {
d.style.top = y + document.body.scrollTop - hh - 10 + 'px';
}
}
d.style.opacity='0.9';
d.style.filter='alpha(opacity=90)'; // для IE9-
}

// переменные с описанием типа аргументов
var type_string = "тип значения string - строка"
var type_float = "тип значения float - число<br>с плавающей запятой"
var type_int = "тип значения integer - целое число"
var type_number = "тип значения number - число"
var type_array = "тип значения array - массив"
var type_typearray = "тип значения TypedArray<br>(типизированный массив)"
var type_bool = "тип значения boolean - логический тип<br>(либо true, либо false)"
var type_func = "тип значения function - т.е. значением<br>аргумента должна быть функция"
var type_null = "тип значения null - т.е.<br>значение неизвестно"
var type_obj = "тип значения object - т.е.<br>аргумент является объектом"
var type_const = "это константа - т.е.<br>значение не изменяется"
var type_vector3 = "значение должно быть<br>трехмерным вектором"
var type_vector2 = "значение должно быть<br>двухмерным вектором"
var type_hashmap = "значение должно быть<br>хеш-картой (хеш-таблицей)"
var type_color = "значение может быть шестнадцатиричным<br>значением цвета или названием цвета<br>согласно CSS"
var type_hex = "значение должно быть шестнадцатиричным<br>значением цвета"
var type_float32array = "тип значения Float32Array - типизированый<br>массив 32-разрядных чисел с плавающей запятой"
var type_rad = "значение угла в радианах"
var type_uint8array = "тип значения Uint8Array - типизированный массив<br>беззнаковых восьмиразрядных целых чисел"
var type_uint16array = "тип значения Uint16Array - типизированный массив<br>беззнаковых шестнадцатиразрядных целых чисел"

// переменные часто встречающегося текста
var cache = "Кэш (англ. cache, от фр. cacher — «прятать»; произносится — «кэш») —<br>промежуточный буфер с быстрым доступом к нему, содержащий информацию,<br>которая может быть запрошена с наибольшей вероятностью.<br>Доступ к данным в кэше осуществляется быстрее, чем выборка исходных<br>данных из более медленной памяти или удаленного источника, однако её<br>объём существенно ограничен по сравнению с хранилищем исходных данных.<br>Хранение данных в таком буфере и называется кэшированием."


