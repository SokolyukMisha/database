# database
was made by a Students of the IP-03 group: Sokolyuk Misha and Bezus Danil

Our main goal of the course project was create a simple database (in our case is hash table) which works according to the principle key-value.
Our hash table has the following methods:

addOne - добавляет один объект

addMany - добавляет несколько объектов из массива

searchByValue - находит объект по значению одного или нескольких полей

searchByKey - находит объекты по названию поля

change -  меняет значение поля объекта

remove - удаляет объект

sort - сортирует объекты по нужному полю если команда просто была вызвана .sort('name'), и сортирует в обратном порядке если было введено .sort('name', something)

concatenation - можем соединить два экземпляра класса (в нашем случае две таблицы) в один.

intersection(ht1, ht2) - статический метод класса, который выводит общие объекты двух таблиц

difference(ht1, ht2) - статический метод класса, который выводит уникальные объекты первогой таблицы
