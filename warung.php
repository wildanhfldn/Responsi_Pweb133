<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $pesan = $_POST["pesan"];

    // Format pesanan yang akan disimpan ke dalam file
    $order = "Nama: $name, Pesanan: $pesan" . PHP_EOL;

    // Menyimpan pesanan ke dalam file
    file_put_contents("warung.txt", $order, FILE_APPEND);
    $file = fopen('warung.txt', 'a');
    fwrite($file, "Nama: " . $name . "\n");
    fwrite($file, "Pesanan: ". $pesan . "\n");
    fwrite($file, "----------------------------------\n");
    fclose($file);


    // Respon berhasil
    echo "Pesanan berhasil disimpan.";

    // Menampilkan pesan dengan nama dan jenis elektronik
    echo "<h2>Pesanan yang telah disimpan:</h2>";
    echo "<p>Nama: $name</p>";
    echo "<p>Pesanan: $pesan</p>";
}
?>