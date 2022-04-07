<?php
    $to = "operaciones@agroexportelohim.com";
    $to.= ", exportaciones.elohim@gmail.com";
    $subject = "Deseo ponerme en contacto";
    $message = $_POST["mensaje"];
    $headers .= 'From: ELOHIM WEB <'.$_POST["email"].'>' . "\r\n";
    $headers .= 'Cc: '.$_POST["email"].' ' . "\r\n";
    $headers .= 'Reply-To: operaciones@agroexportelohim.com' . "\r\n";
    mail($to, $subject, $message, $headers);
?>