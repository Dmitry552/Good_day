/* Задание № 1

Создайте объект в котором будет хранится сумма денег пользователей.
Напиши код который будет выводить сумму всех денег у пользователей.
*/

var money = {
  Sergey: 2000,
  Vitalya: 10000,
  Sveta: 30,
  Vika: 1000,
  Tolya: 20
};

if(money) {
  for(var zp in money) {
    console.log('Имя: ' + zp + ' Зароботная плата: ' + money[zp] + '<br\/>');
  }
}

/* Задание № 2

Берем этот же объект. Нужно вывести имя пользователя у которого больше всего денег.
*/

if(money) {
  var a = 0;
  var name_max, name_min;

  for(var zp in money) {
    if(a < money[zp]) {
      a = money[zp];
      name_max = zp;
    }
  }
  console.log('Лучше всех работает: ' + name_max + ' ему(ей) платят: ' + a);
  for(var zl in money) {
    if(a < money[zl]) {
      a = money[zl];
      name_min = zl;
    }
  }
  console.log('<br\/>Хуже всех работает: ' + name_min + ' ему(ей) платят: ' + a);
}

/* Задача № 3

Создать функцию которая получает объект и умножает все численные свойства на 2.
Например:
var menu = { width: 300, height: 400, title: 'My title' };
*/

var worker = {
  name: 'Roma',
  family_name: 'Kovalev',
  old: 45,
  height: 2850,
  waist: 1200,
  fee_card: 1500,
  faith: 'Christan'
};

function Profile(a) {
  for(var profile in a) {
    if(typeof(a[profile]) === 'number') {
      a[profile] *= 2;
    }
    console.log(profile + ': ' + a[profile] + '<br\/>');
  }
}

Profile(worker);