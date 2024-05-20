let ch;
ch='<table><td id="lev">'
+'<b style="color:blue">Левая колонка!</b><br>'
+'<h4>Первое апреля - пишем!</h4><ol><br>'
+'<h3>Структуры и объединения</h3><li><br>'
+'<i>Структура - набор однотипных данных</i><br>'
+'struct NewType{<br>'
	+'type1 Name1;<br>'
	+'type2 Name2;<br>'
	+'...<br>'
+'typeN NameN;}Variable;<br>'
+'<i>Итого, синтаксис этой мути: </i>NewType Variable<br>'
+'Понятнее:<br>'
+'struct MyStruct{<br>'
	+'int iVariable;<br>'
	+'long iValue;<br>'
+'char Str[10];} mystruct={10,300L,"Hello"};<br></li><li>'
+'<i>Объявляем структуру(пример):</i><br>'
+' struct HOUSE{<br>'
  +'     	unsigned short RegNum;<br>'
    +'   	char Street[51]; <i>//c "\0"</i><br>'
      +' 	char HouseNum[6];<br>'
       	+'unsigned short MaxFloorNum;<br>'
       	+'unsigned short MaxFlatNum;<br>'
       +'	bool Parking;<br>'
       +'};  <br>'
+'	   HOUSE House;<br>'
	+'   House.RegNum=524;<br>'
	  +' strcpy(MyHouse.Street,"ул.Гоголя");<br>'
	   +'strcpy(MyHouse.HouseNum,"2-a");<br>'
+'	   House.MsxFloorNum=7;<br>'
	+'   House.MaxFlatNum=84;<br>'
	  +' House.Parking=true;<br>'
+'	   int i=sizeof(HOUSE);<br>' 
+'<i>дата:</i><br>'
+'struct DATETIME2{'
+'usigned Year: 7; <i>//год</i><br>'
+'unsigned Month: 4; <i>// месяц</i><br>'
+'unsigned Date: 5;<i> //дата</i><br>'
+'unsigned Hour: 6;<i> //часы</i><br>'
+'unsigned Minute: 6;<i> //минуты</i><br>'
+'unsigned Second: 6;<i> //секунды</i>};<br></li><li>'
+'<a>Структуры как аргументы функций</a><br>'
+'<i>Есть структура:</i><br>'
+'struct ALLNUMB{<br>'
+'int nVar;<br>'
+'long lVar;<br>'
+'short shVar;<br>'
+'unsigned int uiVar;<br>};<br>'
+'<i>То прототип будет: </i>void Func(ALLNUMB);<br>'
+'<i>Пример, мать его:</i><br>'
+'Пример длинный, и ответ содержит улицу и дом. Не стал его переписывать<br>'
+'</li><li><a>Массивы структур</a><i>(базы данных)</i><br>'
+'<i>Информация о тридцати домах микрорайона</i> Объявление:<br>'
+'HOUSE mDistr[30];<br>'
+'for(int i=0;i<30;i++)<br>'
	+'itoa(i+1,mdistr[i].HouseNum,10);<br>'
+'for(int i=0;i<30;i++)<br>'
+'	cout&lt;&lt;mdistr[i].HouseNum<<"\n";<br>'
+'</li></ol><ul><li>'
+'<b>Указатели на структуры(и передача по ссылке)</b><br>'
+'<i>Вид: </i>тип_структуры* идентификатор_указателя;<br>'
+'HOUSE *pHouse;<br>pHouse=&MyHouse;<br></li><li>'
+'<i><a>Объединение</a> - различные данные в одной области памяти</i><br>'
+'union MyData{<br>'
      +'int iVar1;<br>'
	+'  unsigned long ulFreq;<br>'
+'char Symb[10];<br>};<br>'
+'<i>Объединение: может быть проинициализирована значением первого члена</i><br>'
+'union MyData&nbsp;{<br>'
+'&ensp;int iVar1;<br>'
+'unsigned long ulFreq;<br>'
+'char Symb[10];<br>'
+'}&ensp;myX={25};<br></li><li><a>Однобайтная структура с битовыми полями длаее...</a><br>'
+'#include<iostream><br>'
+'using namespace std;<br>'
+'union BCD{<br>'
	+'&ensp;unsigned char data;<br>'
	+'struct{<br>'
		+'&ensp;&ensp;unsigned char lo:4;<br>'
		+'unsigned char hi:4;<br>'
	+'}bin;<br>'
+'}bcd;<br>'
+'int main(){<br>'
      +'&ensp;&ensp;system("color 2f"); <br>'     
      +'setlocale(LC_ALL,"Rus");<br>'
    +'bcd.data=152;<br>'
    +'cout<<"\nHigh: "<<(int)bcd.bin.hi;<br>'
  +'  cout<<"\nLow: "<<(int)bcd.bin.lo;<br>'
+'return 0;<br>'
+'} <i>//High: 9</i><br>'
+'  <i>//Low: 8</i><br></li><li><a>Пользовательские типы данных</a><br>'
+'Формируется с использованием ключевого слова <a>typedef</a><br>'
+'typedef unsigned char byte; <i>новый тип данных byte(от 0 до 255 в памяти)</i><br>'
+'&ensp;byte nInput=0xFF;<br>'
+'&ensp;byte nOutput=0;<br>'
+'<i>Для масива: </i>typedef char Names[33]<i>переменная Names name;(строка из 33 '
+'символов)</i><br>'
+'<i>Тип данных COORD - информация о координатах: </i><br>'
+'typedef struct{<br>'
+'&ensp;double x;<br>'
+'double y;<br>'
+'double z;<br>'
+'}COORD;<br>'
+'<i>Объявление объекта:</i> COORD myPoint;<br></li><li>'
+'<b>Функции работы с датой и временем</b><br>'
+'<a>typedef long time_t; </a><i>Определение типа данных</i><br>'
+'struct tm{<br>'
+'&ensp;int tm_sec; <i>//sec</i><br>'
+'&ensp;int tm_min; <i>//min</i><br>'
+'&ensp;int tm_hour; <i>//hours(0-23)</i><br>'
+'&ensp;int tm_mday; <i>//date (1-31)</i><br>'
+'&ensp;int tm_mon; <i>//month(0-11)</i><br>'
+'// год(текущий год минус 1900)<br>'
+'&ensp;int tm_year<br>'
+'//день недели (0-6;Воскр=0)<br>'
+'&ensp;int tm_wday;<br>'
+'&ensp;int tm_ysay; <i>//день в году (0-365)</i><br>'
+'&ensp;int tm_isdst; <i>//0 если зименее время</i><br>'
+'};<br>'
+'<i>Начертим таблицу:</i><br>'
+'<table border="1"><caption><a>&lt;ctime> </a>Функции работы с датой и временем</caption>'
+'<tr style="color:#00f"><td width="80px">Наименование</td><td>Краткое описание</td></tr>'
+'<tr><td>asctime</td><td>преобразует время и дату из фoрмата структуры '
+'типа tm в сомвольную строку</td></tr>'
+'<tr><td>clock</td><td>возвращает число "тиков" процессора, прошедших '
+'от начала запущенного процесса</td></tr>'
+'<tr><td>stime</td><td>преобразует время и дату из формата time_t в симовльную строку</td></tr>'
+'<tr><td>difftime</td><td>вычисляет интервал между заданными '
+'временными параметрами</td></tr>'
+'<tr><td>gmtime</td><td>преобразует дату и время из формата time_t в формат '
+'структуры tm по Гринвичу(GMT)</td></tr>'
+'<tr><td>localtime</td><td>преобразует дату и время из формата time_t в формат '
+'структуры tm</td></tr>'
+'<tr><td>mktime</td><td>преобразует дату и время в календарный формат</td></tr>'
+'<tr><td>_strdate</td><td>Преобразует текущую дату в символьную строку '
+'в формате mm/dd/yy</td></tr>'
+'<tr><td>strftime</td><td>формирует время для последующего вывода</td></tr>'
+'<tr><td>_strtime</td><td>возвращает текущее системное время в виде символов</td></tr>'
+'<tr><td>time</td><td>Возвращает количество секунда прошедшее с 01.01.1979</td></tr>'
+'<tr><td title="пример написал">tzset</td><td>устанавливает значение глобальных переменных _daylight, '
+'_timezone и _tzname</td></tr>'
+'</table>'
+'</li></ul>'
+'</td><td id="lpcool"></td><td id="prav">'
+'<b>Правая колонка</b><br>'
+'<ul><h3>Основные принципы использования файлов заголовков<br>'
+'&ensp;&ensp;&ensp;Оператор defined</h3><br>'
+'<li><a>Дружественные функции и друзья класса</a><br>'
+'<i>ключевое слово friend</i><br>'
+'#include<iostream><br>'
+'using namespace std;<br>'
+'class AnyClass{<br>'
	+'int n,d;<br>'
+'   public:<br>'
  +'  AnyClass(int _n,int _d){n= _n;d= _d;}<br>'
+'	<i>//Объявляем дружественную функцию</i><br>'
	+'friend bool IsFactor(AnyClass ob);	};<br>'
 +'<i>//определяем дружественную функцию</i><br>'
 +'bool IsFactor(AnyClass ob){<br>'
 	+'if(!(ob.n%ob.d))return true; <i>//главное условие</i><br>'
 +'	else            return false;}<br>'
+'int main(){<br>'
	    +'system("color 2f");<br>'
	  +'  setlocale(LC_ALL,"Rus");<br>'
	+'    AnyClass ob(12,3);<br>'
+'	    if(IsFactor(ob))<br>'
	    +'cout<<"12 делится без остатка на 3\n";<br>'
	  +'    else<br>'
	+'         cout<<"12 не делится без остатка на 3\n";<br>'
+'   return 0;}<i>//не делится</i><hr>'
+'<i>Функция может быть дружественной нескольким классам</i><br>'
+'#include<iostream><br>'
+'using namespace std;<br>'
+'class AnyClass1; <i>//неплоное объявление</i><br>'
+'class AnyClass2{<br>'
	+'int d;<br>'
  +' public:<br>'
+'    AnyClass2(int _d){d= _d;}<br>'
	+'<i>//дружественная функция</i><br>'
+'	friend bool IsFactor(AnyClass1 ob1,<br>'
	+'                     AnyClass2 ob2);	};<br>'
+'class AnyClass1{<br>'
	+'int c;<br>'
  +' public:<br>'
+'    AnyClass1(int _c){c= _c;}<br>'
	+'<i>//определись, дружок</i><br>'
+'	friend bool IsFactor(AnyClass1 ob1,<br>'
	+'                     AnyClass2 ob2);	};<br>'
+'<i>//дружественное определение</i><br>'
+'bool IsFactor(AnyClass1 ob1,AnyClass2 ob2){<br>'
	+'if(!(ob1.c%ob2.d)) return true;<br>'
	+'else               return false;   }<br>'
+'main(){<br>'
+'	system("color 2f");<br>'
	+'    setlocale(LC_ALL,"Rus");<br>'
+'	AnyClass1 ob1(12);<br>'
	+'AnyClass2 ob2(3);<br>'
+'	if (IsFactor(ob1,ob2))<br>'
	+'cout<<"12 делится на 3\n";<br>'
+'	else<br>'
	+'   cout<<"12 не делится на 3";<br>'
  +' return 0;<br>'
+'} <i>//12 делится на 3</i><br>'
+'<a>Кроме того, функция может быть членом одного класса и другом иного вместе с этим</a><br>'
+'<i>Объявить можно в с++ не только дружественную функцию, но и класс</i><br>'
+'class AnyClass{<br>'
	+'//...<br>'
+'friend class AnotherClass;}<br>'
+'<a>Для того, чтобы работал механизм дружественности, он должен быть дружественен везде</a><br>'
+'#include<iostream><br>'
+'using namespace std;<br>'
+'class A{<br>'
	+'<i>//Класс В объявлен другом класса А</i><br>'
+'	friend class B;<br>'
	+'int x;<br>'
+'	void IncX(){x++;}<br>'
   +'public:<br>'
    +'A(){x=0;}<br>'
	+'A(int _x){x= _x;}	};<br>'
+'class B{<br>'
+'	A obA;<br>'
   +'public:<br>'
  +'  void ShowValues();	};<br>'
+'void<br>'
+'B::ShowValues(){<br>'
	+'cout<<"Сначала obA.x= "<<obA.x<<"\n";<br>'
+'	obA.IncX();<br>'
	+'cout<<"Затем obA.x= "<<obA.x;}<br>'
+'main(){<br>'
+'	system("color 2f");<br>'
	+'    setlocale(LC_ALL,"Rus");<br>'
+'	B obB; <i>//конструктор по умолчанию</i><br>'
	+'obB.ShowValues();<br>'
  +' return 0;<br>'
+'} <i>//Сначала obA.x= 0<br>'
+'//Затем obA.x= 1</i><br>'
+'<i style="border-bottom:2px solid green">два класса могут объявить друг-друга друзьями</i><br>'
+'class B; <i>//неполное объявление класса</i><br>'
+'class A{<br>'
+'friend class B;<br>'
+'//... }; <ul><i>У дружественных класов есть правила: </i>'
+'<li type="square">дружественность не является взаимным совйством: если А друг В, '
+'это не означает, что В - друг А</li>'
+'<li type="square">дружественность не наследуется: если В - друг А, то '
+'классы производные от В, не являются друзьями А;</li>'
+'<li type="square">дружественность не переходит на потомки бахового класса '
+': если В - друг А, то В не является другом для производных от А</li></ul></li>'
+'<ul><h3>Наследование</h3><br>'
+'<li><h4 style="border-bottom:2px">Простое наследование</h4>'
+'<i>Синтаксис объявления</i><br>'
+'//Базовый класс<br>'
+'class Base1{<br>'
+'&ensp;//...};<br>'
+'//Базовый класс<br>'
+'class Base2{<br>'
+'&ensp;//...};<br>'
+'//Базовый класс<br>'
+'class BaseN{<br>'
+'&ensp;//...};<br>'
+'//Производный класс<br>'
+'class Derived:<спецификатор доступа>Base1<br>'
+'<спецификатор доступа>Base2<br>'
+'...,<br>'
+'<спецификатор доступа>BaseN<br>'
+'{//...};<br>'
+'<table border="2"><caption>Варианты наследуемого доступа</caption>'
+'<tr style="color:#a00"><td>Спецификатор наследуемого доступа</td><td>Доступ в базовом классе</td>'
+'<td>Доступ в производном классе</td></tr>'
+'<tr><td>public</td><td>Public<br>Protected<br>Private</td>'
+'<td>public<br>protected<br>не доступны</td></tr>'
+'<tr><td>protected</td><td>Public<br>Protected<br>Private</td><td>'
+'protected<br>protected<br>не доступны</td></tr>'
+'<tr><td>private</td><td>Public<br>Protected<br>Private</td><td>private<br>'
+'private<br>не доступны</td></tr>'
+'</table></li><li>'
+'<ul><a>Перечислим наследуемые члены класса</a><br>'
+'<li type="square">конструкторы;</li>'
+'<li type="square">конструкторы копирования;</li>'
+'<li type="square">деструкторы;</li>'
+'<li type="square">операторы присвоения, определённые программистом;</li>'
+'<li type="square">друзья класса.</li></ul>'
+'</li></ul>'
+'</td></table>'
let mn;
mn='<table><td id="lev">'
+'<li><h4 style="margin-top:0">Множественное наследование</h4>'
+'<a>Допустим есть несколько классов. Они могут быть связаны базовым наследованием</a><br>'
+'<a>gotoxy() </a>-несовместима с windows(почему, не знаю)<br>'
+'<i>конструкторы вызываются в порядке их объявления, а деструкторы в обратном порядке</i><br>'
+'#include<iostream><br>'
+'using namespace std;<br>'
+'class Base1{<br>'
	+'public:<br>'
+'		Base1(){cout<<<br>'
		  +'           "Мы в конструкторе Base1\n";}<br>'
		+'~Base1(){cout<<<br>'
	+'	              "Мы в деструкторе Base1\n";}         };<br>'
+'class Base2{<br>'
	+'public:<br>'
+'		Base2(){cout<<<br>'
		  +'         "Мы в конструкторе Base2\n";}<br>'
		+'~Base2(){cout<<<br>'
	+'	            "Мы в деструкторе Base2\n";}           };<br>'
+'class Derived: public Base1,public Base2{<br>'
+'	public:<br>'
		+'Derived(){<br>'
	+'		cout<<"Мы в конструкторе Derived\n";}<br>'
+'		~Derived(){<br>'
		+'	cout<<"Мы в деструкторе Derived\n";<br>'
	+'	}};<br>'
+'main(){<br>'
+'	system("color 2f");<br>'
	  +'  setlocale(LC_ALL,"Rus");<br>'
	+'Derived ob;<br>'
  +' return 0;<br>'
+'} <i>/*Мы в конструкторе Base1<br>'
+'Мы в конструкторе Base2<br>'
+'Мы в конструкторе Derived<br>'
+'Мы в деструкторе Derived<br>'
+'Мы в деструкторе Base2<br>'
+'Мы в деструкторе Base1*/</i><br></li><li>'
+'<a>Виртуальные базовые классы</a><br>'
+'#include<iostream><br>'
+'#include<conio.h><br>'
+'#include<cstdlib><br>'
+'using namespace std;<br>'
+'class IndBase{<br>'
+'	private:<br>'
	+'	int x;<br>'
+'	public:<br>'
	   +'int GetX(){return x;}<br>'
	  +' void SetX(int _x){x= _x;}<br>'
	+'   double var;	}; <br>'
+'class Base1: public IndBase{<br>'
	+'//...};<br>'
+'class Base2: public IndBase{<br>'
	+'//...};<br>'
+'class Derived: public Base1,public Base2{<br>'
	+'//...};<br>'
+'main(){<br>'
+'	system("color 2f");<br>'
	+'    setlocale(LC_ALL,"Rus");<br>'
+'     Derived ob;<br>'
     +'ob.Base1::var=5.0;<br>'
    +' ob.Base1::SetX(0);<br>'
  +'   int z=ob.Base1::GetX();<br>'
+'   return 0;} <i>//скомпилировался и ничего не вывел</i><br></li>'
+'<ol><h5>Перегрузка функций</h5>'
+'<li><i>В с++ компилятор производит перегрузку(вариант вызова из нескольких объявленных) '
+' автоматически</i><br>'
+'#include<iostream><br>'
+'#include<cstdlib><br>'
+'using namespace std;<br>'
+'<i>//перегружаем функцию abs()</i><br>'
+'int abs(int n);<br>'
+'long abs(long m);<br>'
+'double abs(double d);<br>'
+'main(){<br>'
+'	system("color 2f");<br>'
	+'    setlocale(LC_ALL,"Rus");<br>'
  +'  int n=255;long m=-25L;double d=-15.0L;<br>'
+'    cout<<"абсолютная величина "&lt&lt;n&lt&lt;" равна: "&lt&lt;abs(n)&lt&lt;"\n";<br>'
    +'<i>//!cout&lt&lt;"абсолютная величина "&lt&lt;m&lt&lt;" равна: "&lt&lt;abs(m)&lt&lt;"\n";</i>А-А<br>'
	+'cout<<"абсолютная величина "&lt&lt;d&lt&lt;" равна: "&lt&lt;abs(d)&lt&lt;"\n";    <br>'
  +' return 0;<br>'
+'}<br> int abs(int n){<br>'
	+'return n<0?-n:n;}<br>'
+'<i>//!long abs(long m){return m<0?-l:l;}</i>А-А<br>'
+'double abs(double d){<br>'
	+'return d<0 ? -d:d;<br>'
+'} <i>//абсолютная величина 255 равна: 255<br>'
+'//абсолютная величина -15 равна: 15<br>'
+'//(средняя не хочет работать)</i><br></li>'
+'<li><i>Аргумент типа и ссылка на этот тип с точки зрения перегрузки считаются одинаковымим</i><br>'
+'#include<iostream><br>'
+'using namespace std;<br>'
+'class AnyClass{<br>'
+'	public:<br>'
		+'AnyClass(){<br>'
	+'		cout&lt;&lt;"Konst po umolch "&lt;&lt;" for Anyclass"&lt;&lt;"\n";<br>'
+'		}AnyClass(AnyClass& ob){<br>'
			+'cout&lt;&lt;"Konst copy for "&lt;&lt;"AnyClass"&lt;&lt;"\n";<br>'
		+'}AnyClass(const AnyClass& ob){<br>'
	+'		cout&lt;&lt;"Konst copy for "&lt;&lt;"AnyClass"&lt;&lt;"\n";}};<br>'
+'main(){<br>'
	+'setlocale(LC_ALL,"Rus");<br>'
+'	AnyClass ob1;<br>'
	+'AnyClass ob2(ob1);<br>'
+'	const AnyClass ob3;<br>'
	+'AnyClass ob4(ob3);<br>'
+'} <i>//Konst po umolch  для Anyclass<br>'
+'Konst copy for AnyClass<br>'
+'Konst po umolch  для Anyclass<br>'
+'Konst copy for AnyClass</i><br></li>'
+'<ul><i>Есть и ограничения</i><br><li type="square">Любые две перегруженные функции '
+'должны иметь различные списки параметоров;</li>'
+'<li type="square">перегрузка функций с совпоадающими списками аругментов на основе '
+'лишь типа возвращаемых ими значений недопустима;</li>'
+'<li type="square">ыункции члены не могут быть перегружены исключительно на основе '
+'того, что одна из них является статической, а другая - нет;</li>'
+'<li type="square"><a>typedef</a> - определение не влияют на механизмы перегрузки, '
+'так как они не вводят новых типов данных, а определяют лишь синонимы для существующих '
+'типов. например: typedef char* PSTR;<br>'
+'поэтому функции -<br>void SetVal(char* sz):<br>&ensp; и<br> '
+'void SetVal(PSTR sz);<br>'
+'будут считаться различными'
+'<ul>Поэтому:<li type="square">Все enum-типы дыных рассматриваются как различные и могу использоваться '
+' для идентификации перегруженных функций;</li>'
+'<li type="square"></li>типы "массив (чего-то)" и "указатели (на что-то)" '
+'рассматриваются как идентичные с точки зрения перегрузки. Это верно только для '
+'одномерных массивов. Поэтому в случае перегрузки следующих функций будет выдана ошибка:'
	+'void SetVal(char sx); и void SetVal(char* psz); - <i>такое объявление не прокатит</i><br>'
+'void SetVal(char szStr[]);<br>void SetVal(char szStr[][4]); -<i>допустимы</i><br>'
+'<a>Если имена одинаковые, то функция из базового класса подвергается скрытию '
+'функцией из проивзодного</a><br>Примерчик:<br>'
+'#include<iostream><br>'
+'#include<cstdlib><br>'
+'using namespace std;<br>'
+'void func(int i){<br>'
	+'cout&lt;&lt;"Глобальное объявление: "&lt;&lt;i&lt;&lt;endl;}<br>'
+'void func(char* str){<br>'
	+'cout&lt;&lt;"Локальное объявление: "&lt;&lt;str&lt;&lt;endl;}<br>'
+'main(){<br>'
	+'system("color 2f");<br>'
	+'    setlocale(LC_ALL,"Rus");<br>'
  +'extern void func(char*);<br>'
   +'<i>//error</i><br>'
   +'func(100); <i>//не скомпилировалась даже</i><br>'
  +'<i> //verno</i><br>'
   +'func("pereopredeleno!");<br>'
  +'return 0;<br>'
+'} <i>//Локальное объявление: pereopredeleno!</i><br>'
+'</li></ul>'
+'<hr><ol><a>Далее рассматриваем перегруженные функции</a><br><li>'
+'<i>функции, находящиеся в разнных классах, но с одинаковыми именами, считаются перегруженнцми</i><br>'
+'#include<iostream><br>'
+'#include<cstdlib><br>'
+'using namespace std;<br>'
+'class AnyClass{<br>'
	+'public:<br>'
     +'AnyClass();<br>'
	 +'double MembFunc(double,char*);<br>'	
	+'<i>//private:</i><br>'
	+'	int MembFunc(int);};<br>'
+'double<br>'
+'AnyClass:: MembFunc(double,char*){<br>'
	+'<i>//тело функции</i>}<br>'
+'int<br>'
+'AnyClass:: MembFunc(int){<br>'
  +' <i>//тело функции} </i><br>'
+'main(){<br>'
+'	system("color 2f");<br>'
	    +'setlocale(LC_ALL,"Rus");<br>'
	  +'  AnyClass* pCl=new AnyClass;<br>'
	+'    <i>//ошибка, так-как private</i><br>'
+'	    pCl->MembFunc(104);<br>'
	    +'<i>//здесь верное, public</i><br>'
	  +'  pCl->MembFunc(104.22, "stroka");<br>'
	+'    delete pCl;<br>'
+'		 return 0;} <br></li><li>'
+'<a>концептуально перегружаем статические функции-член класса</a>(шутим)</li><li><br>'
+'<a>Дальше идёт перегрузка коснтрукторов</a><br>'
+'<i>Перегружать деструктор нельзя</i><br>'
+'после объявления класса: void func(AnyClass& rPb);<br>'
+'конструкция типа AnyClass ob(t); будет трактоваться как:<br>'
+'AnyClass ob=AnyClass(t);, если определён конструктор AnyClass(T t);<br>'
+'<a>Ща, покажу как это работает, как преобразуется тип(из одного класса в другой)</a><br>'
+'<ul><i>Не работает. Щас расскажу, тогда как преобразуются типы</i>'
+'<li type="square">при инициализации объектов;</li>'
+'<li type="square">при вызове функции;</li>'
+'<li type="square">при возврате функцией значений</li><i>для явного тоже можно применять</i></ul>'
+'</li><li><i>Вообще определённые преобразования применяются при:</i><br>'
+'<ul><li type="square">при инициализации объектов;</li>'
+'<li type="square">при вызове функций;</li>'
+'<li type="square">при возврате функцией значения</li></ul></li><li>'
+'<a>Покажем теперь перегрузку конструктора копирования</a><br>'
+'#include<iostream><br>'
+'#include<cstdlib><br>'
+'#include<cstdio><br>'
+'using namespace std;<br>'
+'class Rect{<br>'
	+'public:<br>'
+'		Rect();<br>'
		+'Rect(int,int);<br>'
	+'	Rect(int,int,int,int);<br>'
+'		Rect(const Rect&);<br>'
		+'Rect(const Rect&,int=0,int=0);<br>'
	+'private:<br>'
+'	   int x,y,w,h;	};<br>' 
+'Rect::Rect(){<br>'
	+'x=y=w=h=0;}<br>'
+'Rect::Rect(int _x,int _y){<br>'
	+'x=_x;<br>'
+'	y=_y;<br>'
	+'w=h=100;}<br>'
+'Rect::Rect(int _x,int _y,int _w,int _h){<br>'
+'	x=_x;<br>'
	+'y=_y;<br>'
+'	w=_w;<br>'
	+'h=_h;}<br>'
+'Rect::Rect(const Rect& rc){<br>'
+'	x=rc.x;<br>'
	+'y=rc.y;<br>'
+'	w=rc.w;<br>'
	+'h=rc.h;}<br>'
+'Rect:: Rect(const Rect& rc,int _x,int _y){<br>'
+'	x=_x;<br>'
	+'y=_y;<br>'
+'	w=rc.w;<br>'
	+'h=rc.h;}<br>'
+'main(){<br>'
+'	system("color 2f");<br>'
	  +'  setlocale(LC_ALL,"Rus");<br>'
	+'Rect rc(5,10,10,200);<br>'
+'	Rect newrc(rc,15,40);<br>'
	+'	 return 0;<br>'
+'		 } <i>//ничего не вывел, втихую отработал</i><br>'
+'</li></ol>'
+'</td><td id="lpcool">'
+'</td><td id="prav">'
+'<ol><h4>Создание и использование конструкторов копирования</h4>'
+'<li><a>Перегрузка и неоднозначность. Ключевое слово explict</a><br>'
+'<ul><i>К этому отностися:</i><br><li type="square">'
+'найдено точное соответствие;</li>'
+'<li type="square">Выполнено тривиальное преобразование</li>'
+'<li type="square">выполнено преобразование целочисленных типов;</li>'
+'<li type="square">существует стандартное преобразование к нужному '
+'типу аргумента</li>'
+'<li type="square">существует определённое программистом преобразование '
+'(оператор преобразования или конструктор) к требуемому типу аргумента;</li>'
+'<li type="square">Были найдены аргументы представленные многоточием.</li></ul>'
+'<i>Ключевое слово explict применяется в объявлениях конструктора:</i><br>'
+'class T{<br>'
+'&ensp;	public:<br>'
	   +'&ensp;&ensp;explict T(int);<br>'
	  +' &ensp;&ensp;explict T(double);{<br>'
	+'	   <i>//telo konstr</i><br>'
  +'  }};<br>'
+'	T::T(int){<br>'
	+'	<i>//...</i><br>'
+'	} <i>//но преобразования аргументов нет(только тип, с int на double)</i><br>'
+'</li>'
+'<li><a>Определение адреса перегруженной функции</a><br>'
+'<i>Для определения смотрим влево, вправо и по сторонам</i><br>'
+'int Func(int i,int j); <i>//Первая версия функции</i><br>'
+'int Func(long l); <i>//вторая версия функции</i><br>'
+'...<br>'
+'int(*pFunc)(int,int)=Func; <i>Определение адреса первой версии функции</i><br>'
+'pFunc(10,20); <i>// вызов функции</i><br>'
+'Компилятор выбирает функцию исходя из типа, который сообщает ему указатель<br></li></ol><ul>'
+'<h4>Перегрузка операторов</h4><br>'
+'<li><a>Понятие перегрузки операторов</a><br>'
+'<i>Бред, когда оператору присваивается другое имя (operator+=)</i><br>'
+'Point pt1,pt2,py3; <i>//вызываем перегруженный оператор сложения</i><br>'
+'pt3=pt1.operator+(pt2);<br>'
+'<table border="1"><caption style="border:1px double green">Есть следующие перегружаемые операторы</caption>'
+'<tr style="color:blue"><td width="80">Оператор</td><td width="300"><center>Название</center></td><td width="60">Тип</td></style/tr>'
+'<tr style="color:maroon"><td>,</td><td>Запятая</td><td>бинарный</td></tr>'
+'<tr><td>!</td><td>Логическое НЕ</td><td>Унарный</td></tr>'
+'<tr><td>!=</td><td>Не равно</td><td>бинарный</td></tr>'
+'<tr><td>%</td><td>Модуль</td><td>Бинарный</td></tr>'
+'<tr><td>%=</td><td>Модуль с присваиванием</td><td>бинарный</td></tr>'
+'<tr><td>&</td><td>Побитовое И</td><td>бинарный</td></tr>'
+'<tr><td>&</td><td>Адрес</td><td>Унарный</td></tr>'
+'<tr><td>&&</td><td>Логическое И</td><td>бинарный</td></tr>'
+'<tr><td>&=</td><td>Побитовое И с присваиванием</td><td>Бинарынй</td></tr>'
+'<tr><td>()</td><td>Вызов функции</td><td>--</td></tr>'
+'<tr style="color:red"><td>*</td><td>Умножение</td><td>Бинарный</td></tr>'
+'<tr><td>*</td><td>Разыменование</td><td>Унарный</td></tr>'
+'<tr><td>*=</td><td>Умножение с присваиванием</td><td>Бинарный</td></tr>'
+'<tr><td>+</td><td>Сложение</td><td>Бинарный</td></tr>'
+'<tr><td>+</td><td>Унарный плюс</td><td>Унарный</td></tr>'
+'<tr><td>++</td><td>Инкремент</td><td>Унарынй</td></tr>'
+'<tr><td>+=</td><td>Сложение с присваиванием</td><td>Унарный</td></tr>'
+'<tr><td>-</td><td>Вычитание</td><td>Унарный</td></tr>'
+'<tr><td>-</td><td>унарный минус</td><td>Унарный</td></tr>'
+'<tr><td>--</td><td>Декремент(они смеются)</td><td>Унарный</td></tr>'
+'<tr style="color:blue"><td>-=</td><td>Вычитание с присваиванием</td><td>бинарный</td></tr>'
+'<tr><td>-></td><td>Выбор члена</td><td>бинарынй</td></tr>'
+'<tr><td>->*</td><td>Выбо члена по указателю</td><td>Бинарный</td></tr>'
+'<tr><td>/</td><td>Деление</td><td>Бинарный</td></tr>'
+'<tr><td>/=</td><td>Делением с присваиванием</td><td>Бинарный</td></tr>'
+'<tr><td>&lt;</td><td>Меньше</td><td>Бинарный</td></tr>'
+'<tr><td>&lt;&lt;</td><td>Сдвиг влево</td><td>Бинарный</td></tr>'
+'<tr><td>&lt;&lt=;</td><td>сдвиг влево с присваиванием</td><td>бинарный</td></tr>'
+'<tr><td>&lt;=</td><td>Меньше или равно</td><td>бинарный</td></tr>'
+'<tr><td>=</td><td>присваивание</td><td>бинарный</td></tr>'
+'<tr style="color:#08c"><td>==</td><td>Равно</td><td>бинарный</td></tr>'
+'<tr><td>&gt;</td><td>Больше</td><td>бинарный</td></tr>'
+'<tr><td>&gt;=</td><td>больше или равно</td><td>бинарный</td></tr>'
+'<tr><td>&gt;&gt;</td><td>Сдвиг вправо</td><td>бинарный</td></tr>'
+'<tr><td>&gt;&gt;=</td><td>сдвиг вправо с присваиванием</td><td>Бинарынй</td></tr>'
+'<tr><td>[]</td><td>индекс массива</td><td>никакой(--)</td></tr>'
+'<tr><td>^</td><td>Побитовое исключающее ИЛИ</td><td>Бинарный</td></tr>'
+'<tr><td>^=</td><td>Побитовое исключающее ИЛИ с присваиванием</td><td>бинарный</td></tr>'
+'<tr><td>|</td><td>Побитовое ИЛИ</td><td>бинарный</td></tr>'
+'<tr><td>|=</td><td>Побитовое ИЛИ с присваиванием</td><td>бинарный</td></tr>'
+'<tr><td>||</td><td>Логическое ИЛИ</td><td>Бинарный</td></tr>'
+'<tr><td>~</td><td>Дополнение до еденицы</td><td>Унарный</td></tr>'
+'<tr><td>delete</td><td>delete</td><td>-</td></tr>'
+'<tr><td>new</td><td>new</td><td>-</td></tr>'
+'<tr style="color:#a00"><td colspan="3">Дальше перечислим неперегружаемые операторы</td></tr>'
+'<tr><td></td><td></td><td></td></tr>'
+'<tr><td></td><td></td><td></td></tr>'
+'<tr><td></td><td></td><td></td></tr>'
+'<tr><td></td><td></td><td></td></tr>'

+'</table>'
+'</li>'
+'<li></li>'
+'</ul>'

+'</td></table>' 
document.write(mn)+ch;

