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
+'<tr><td></td><td></td></tr>'
+'</table>'
+'</li></ul>'
+'</td><td id="prav">'
+'<b>Правая колонка</b><br>'
+'</td></table>'
document.write(ch);
