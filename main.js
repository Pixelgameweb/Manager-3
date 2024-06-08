document.addEventListener('DOMContentLoaded', () => { // Выполнять действие после загрузки Dom контента
    document.getElementById("addBtn").addEventListener('click', (event) => { // Обращяемся к документу и находим там элемент c id addBtn добавляем функцию обрапотки клика
        event.preventDefault(); // отключаем стандартные действия
        const name = document.getElementById("nameInput").value;// Получаем input с значениями имени
        const price = document.getElementById("priceInput").value; // Получаем инпут со значениями цены
        const category = document.getElementById("selectCategory").value; // Получаем инпут со значениями категории
        addExpense(name, category, price); // Вызываем функцию addExpence которая будет добавлять элементы таблицы на страницу
        document.getElementById("nameInput").value = ''; // Очищаем поля ввода после добавления элемента на страницу (имя)
        document.getElementById("priceInput").value = '';// Очищаем поля ввода после добавления элемента на страницу (цена)
    });
});
// Тут я создаю счетчики для каждой категории товаров
let totalProducts = 0; // Добавляем счетчик для продуктов
let totalFastFoods = 0; //Добавляем счетчик для Фастфуда
let totalSport = 0;// Добавляем счетчик для Спорта
let totalDrinks = 0;// Добавляем счетчик для Напитков
let totalHousehold = 0;// Добавляем счетчик для Бытовые
let totalElectronic = 0;// Добавляем счетчик для Электронок
let totalAuto = 0;// Добавляем счетчик для Авто
let totalFertilizers = 0;// Добавляем счетчик для Удобрений
let totalPlants = 0;// Добавляем счетчик для продуктов
// В функцию удаления я также и встроил Расчет легенды
// Ниже должна была идти функция перерасчета функции после удаления которая в зависимости от дата-атрибута уменьшала бы значение счетчика, и соответственно уменьшала бы значение в легенде 
function deleteExpense(element) { // Тут у меня функция удаления таблицы
    // Свойство .innerText в строках 30, 33, 36, 39, 42, 45, 48, 51, 54 изменяет содержимое html элемента 
    const parentRow = element.closest('.purcashes__row'); // Тут Я потучаю каждую строку таблицы которая добавляеться кнопкой  и описана на 68-71 строках
    const category = parentRow.querySelector('.purcashes__td:nth-child(2)').innerText; // Получаю каждую категорию (:nth-child(2) значит что я получаю второй элемент в таблице т.е категорию) 
    const price = parseFloat(parentRow.querySelector('.purcashes__td:nth-child(3)').innerText); // Получаю каждую цену и преобразую ее в число (в число преобраззую методом .innerText) (:nth-child(3) значит что я получаю второй элемент в таблице т.е цену) 
    if (category === "Products") { // Проверяем равно ли текстовое значения поля Продуктам, если да то
        totalProducts -= price; // Счетчик оператор вычитания и присваивания цене
        document.getElementById('Legend-price-product').innerText = totalProducts; // Тут присваиваем значению легенды соответствующий счетчик
    } else if (category === "FastFoods") {// Проверяем равно ли текстовое значения поля ФастФуду, если да то
        totalFastFoods -= price; // Счетчик оператор вычитания и присваивания цене
        document.getElementById('Legend-price-fastfood').innerText = totalFastFoods;// Тут присваиваем значению легенды соответствующий счетчик
    } else if (category === "Sport") {// Проверяем равно ли текстовое значения поля Спорту, если да то
        totalSport -= price; // Счетчик оператор вычитания и присваивания цене
        document.getElementById('Legend-price-sport').innerText = totalSport;// Тут присваиваем значению легенды соответствующий счетчик
    } else if (category === "Drinks") {// Проверяем равно ли текстовое значения поля Напиткам, если да то
        totalDrinks -= price; // Счетчик оператор вычитания и присваивания цене
        document.getElementById('Legend-price-drinks').innerText = totalDrinks;// Тут присваиваем значению легенды соответствующий счетчик
    } else if (category === "Household") {// Проверяем равно ли текстовое значения поля Бытовые, если да то
        totalHousehold -= price; // Счетчик оператор вычитания и присваивания цене
        document.getElementById('Legend-price-Household').innerText = totalHousehold;// Тут присваиваем значению легенды соответствующий счетчик
    } else if (category === "Electronic") {// Проверяем равно ли текстовое значения поля Электронным товарам, если да то
        totalElectronic -= price; // Счетчик оператор вычитания и присваивания цене
        document.getElementById('Legend-price-Electronic').innerText = totalElectronic;// Тут присваиваем значению легенды соответствующий счетчик
    } else if (category === "Auto") {// Проверяем равно ли текстовое значения поля Авто, если да то
        totalAuto -= price; // Счетчик оператор вычитания и присваивания цене
        document.getElementById('Legend-price-Auto').innerText = totalAuto;// Тут присваиваем значению легенды соответствующий счетчик
    } else if (category === "Fertilizers") {// Проверяем равно ли текстовое значения поля Удобрениям, если да то
        totalFertilizers -= price; // Счетчик оператор вычитания и присваивания цене
        document.getElementById('Legend-price-Fertilizers').innerText = totalFertilizers;// Тут присваиваем значению легенды соответствующий счетчик
    } else if (category === "Plants") {// Проверяем равно ли текстовое значения поля Растениям, если да то
        totalPlants -= price; // Счетчик оператор вычитания и присваивания цене
        document.getElementById('Legend-price-Plants').innerText = totalPlants;// Тут присваиваем значению легенды соответствующий счетчик
    } else { // Иначе 
        console.log("Неизвестная категория"); // Выводить в консоль "Неизвестная категория"
    }
    parentRow.remove(); // Удаляем tr в котором находятся остальные элементы таблицы (td)
}
// В функцию написанную ниже добавлен код расчитывания в легенде
function addExpense(name, category, price) { // Функция добавления элемментов таблицы
    const table = document.getElementById('table'); // Получаем таблицу
    const td = document.createElement('tr');// Создаем константу которая будет создавать элемент таблицы (tr)
    td.classList.add('purcashes__item', 'purcashes__row'); // Добавляем в эту константу 2 класса
    td.innerHTML = ` 
      <td class="purcashes__td" id="name">${name}</td>
      <td class="purcashes__td" id="category">${category}</td>
      <td class="purcashes__td" id="price">${price}</td>
      <td class="purcashes__td"> <i class="purcashes__item-del fa-solid fa-trash" onclick="deleteExpense(this)">❌</i> </td>`;
    // Создаем таблицу (Она выше)
    table.appendChild(td); // Добавляем в таблицу классы написанные в стоке 63
    // Тут мы создаем легенду
    const prod = document.getElementById('Legend-price-product') // Получаем продукты
    const fast = document.getElementById('Legend-price-fastfood');// Получаем фастфуд
    const sport = document.getElementById('Legend-price-sport');//Получаем спорт
    const drink = document.getElementById('Legend-price-drinks');// Получаем Напитки
    const HHold = document.getElementById('Legend-price-Household'); // Получаем бытовые
    const elec = document.getElementById('Legend-price-Electronic');// Получаем электронные
    const auto = document.getElementById('Legend-price-Auto'); // Получаем авто
    const plnts = document.getElementById('Legend-price-Plants'); // Получаем растения 
    const fert = document.getElementById('Legend-price-Fertilizers'); // Получаем удобрения
    // Дальше идет Расчетный if 
    // На строках 87, 91, 95, 99, 103, 107, 111, 115, 119 parseFloat превращает цену в число и как бы говорит счетчикТакойто равен сумме этого счетчика и цене полученной из добавленного элемента таблицы
    if (category === "Products") { // Если категория = Продукты
        console.log("Продукты"); // Выводить в консоль "Продукты"
        totalProducts += parseFloat(price); // Счетчик продуктов оператор сложения, присваивания цена
        prod.innerText = totalProducts; // Присваиваем тут значению текста легенды продуктов значение счетчика продуктов
    } else if (category === "FastFoods") {// Если категория = Фастфуд
        console.log("Фастфуд");// Выводить в консоль "Фастфуд"
        totalFastFoods += parseFloat(price);// Счетчик Фастфуда оператор сложения, присваивания цена
        fast.innerText = totalFastFoods;// Присваиваем тут значению текста легенды Фастфуда значение счетчика Фастфуда
    } else if (category === "Sport") {// Если категория = Спорт
        console.log("Спорт");// Выводить в консоль "Спорт"
        totalSport += parseFloat(price);// Счетчик Спорта оператор сложения, присваивания цена
        sport.innerText = totalSport;// Присваиваем тут значению текста легенды Спорта значение счетчика Спорта
    } else if (category === "Drinks") {// Если категория = Напитки
        console.log("Напитки");// Выводить в консоль "Напитки"
        totalDrinks += parseFloat(price);// Счетчик Напитков оператор сложения, присваивания цена
        drink.innerText = totalDrinks;// Присваиваем тут значению текста легенды Напитков значение счетчика напитков
    } else if (category === "Household") {// Если категория = бытовые
        console.log("Бытовые");// Выводить в консоль "Бытовые"
        totalHousehold += parseFloat(price);// Счетчик Бытовых продуктов оператор сложения, присваивания цена
        HHold.innerText = totalHousehold;// Присваиваем тут значению текста легенды бытовых значение счетчика бытовых
    } else if (category === "Electronic") {// Если категория = Электронные
        console.log("Электронные");// Выводить в консоль "Электронные"
        totalElectronic += parseFloat(price);// Счетчик Электронных товаров оператор сложения, присваивания цена
        elec.innerText = totalElectronic;// Присваиваем тут значению текста легенды Электронных значение счетчика Электронных
    } else if (category === "Auto") {// Если категория = Авто
        console.log("Автомобили");// Выводить в консоль "Автомобили"
        totalAuto += parseFloat(price);// Счетчик Авто оператор сложения, присваивания цена
        auto.innerText = totalAuto;// Присваиваем тут значению текста легенды Автомобилец значение счетчика Автомобилец
    } else if (category === "Fertilizers") {// Если категория = Удобрения
        console.log("Удобрения");// Выводить в консоль "Удобрения"
        totalFertilizers += parseFloat(price);// Счетчик Удобрения оператор сложения, присваивания цена
        fert.innerText = totalFertilizers;// Присваиваем тут значению текста легенды Удобрений значение счетчика Удобрений
    } else if (category === "Plants") {// Если категория = Растения
        console.log("Растения");// Выводить в консоль "Растения"
        totalPlants += parseFloat(price);// Счетчик Растений оператор сложения, присваивания цена
        plnts.innerText = totalPlants;// Присваиваем тут значению текста легенды Растений значение счетчика Растений
    } else { // Иначе 
        console.log("Неизвестная категория"); // Выводим в консоль "Неизвестная категория"
    }
    // Далее идет функция 
    const deleteBtn = td.querySelector('.purcashes__item-del'); // Получаем кнопку удаления 
    deleteBtn.addEventListener('click', () => { // Назначаем на нажатие кнопки функцию 
        deleteExpense(td); // Удалить td
    });
}
