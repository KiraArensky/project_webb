<?php
        $name = $_POST["custyname"];
        $email = $_POST["custemail"];
        $number = $_POST["custnamber"];
        // $shop = $_POST["shop"];
        echo "Привет, $name!<br><br>Вы оформили предзаказ. В ближайшее время мы напишем вам на $email или позвоним по $number";
    ?>