const participateBtn = document.getElementById('participateBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const generatedAddress = document.getElementById('generatedAddress');

function generateAddress() {
    const randomNum = Math.floor(1000000000 + Math.random() * 9000000000); // Генерация случайного 10-значного числа
    return randomNum.toString();
}

generatedAddress.addEventListener('click', function () {
    generatedAddress.select();
    document.execCommand("copy");
    alert("Адрес скопирован: " + generatedAddress.value);
});

// Функция для открытия всплывающего окна
participateBtn.addEventListener('click', function () {
    // Генерируем адрес и вставляем его в поле
    generatedAddress.value = generateAddress();
    popup.style.display = 'flex'; // Показываем всплывающее окно
});

// Функция для закрытия всплывающего окна по кнопке-крестику
closeBtn.addEventListener('click', function () {
    popup.style.display = 'none'; // Скрываем всплывающее окно
});

// Закрытие окна при клике вне его
window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none'; // Скрываем окно, если клик вне содержимого
    }
});
