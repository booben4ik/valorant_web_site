const node_for_click = document.getElementById('for_click') //Инициализация переменной node_for_click с адресом на кликабельный элемент (параграф)

//Функции для изменения фамилии, имени и года рождения
function edit_data() {
    const surname = document.getElementsByClassName('surname')[0]
    surname.innerText = 'BUBNOVA'
    const name = document.getElementsByClassName('name')[0]
    name.innerText = 'ANASTASIA'
    const birthyear = document.getElementsByClassName('birthyear')[0]
    birthyear.innerText = 'MMIV'
}

node_for_click.addEventListener('click', edit_data)