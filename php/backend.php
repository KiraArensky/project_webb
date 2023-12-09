<?php

if (isset($_POST['submit'])) {
    // Получить значение поля ввода с именем "name"
    $name = $_POST['name'];

    // Получить значение поля ввода с именем "email"
    $email = $_POST['email'];

    $phone = $_POST['phone'];
    $shop = $_POST['shop'];

    // Выполнить действия с данными формы
    echo "Имя: $name $shop $phone";
    echo "<br>";
    echo "Электронная почта: $email";
}

?>
