'use strict'

var quantityInStock = 2;
var quantityInOrder = 2;

//task 1
if (quantityInOrder > quantityInStock) {
  console.log('На складе нет такого количества товаров');
} else if (quantityInOrder === quantityInStock) {
  console.log('Вы забираете весь товар c нашего склада!');
} else {
  console.log('Заказ оформлен');
}



//task 2
var shipingPrice;
var shipingAdress = 'Черная дыра';

switch(shipingAdress) {
  case 'Луна':
    shipingPrice = 150; 
    console.log(`Стоимость доставки для Луны: ${shipingPrice} Q`);
  break;
  
  case 'Крабовидная туманность':
    shipingPrice = 250;
    console.log(`Стоимость доставки на Крабовидную туманность ${shipingPrice} Q`);
  break;
  
  case 'Галактика Туманность Андромеды':
    shipingPrice = 550;  
    console.log(`Стоимость доставки в галактику Туманность Андромеды ${shipingPrice} Q`);
  break;
  
  case 'Туманность Ориона':
    shipingPrice = 600;
    console.log(`Стоимость доставки в галактику Туманность Ориона ${shipingPrice} Q`);
  break;
  
  case 'Звезда смерти':
    shipingPrice = 'договорная';
    console.log(`Цена доставки на Звезду смерти - ${shipingPrice}`);
  break;
  
  default:
    console.log('В ваш квадрант доставка не осуществляется');
  break;
}

//task 3
var price = 200;
try {
  if(typeof price == 'number') {
    console.log('Цена товара введена корректно');
  } else {
  throw `Вы допустили ошибку: ${price} не является числом`;
  }
} catch (err) {
  console.log(err);
}

 
