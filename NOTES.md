# Introduction
1. JavaScript bisa digunakan untuk mengubah elemen konten HTML
   `document.getElementById("demo").innerHTML = "Hello JavaScript"`
   Mengubah value atribut elemen HTML
   `document.getElementById("myImage").src='pic_bulbon.gif`
   Mengubah CSS
   `document.getElementById("demo").style.fontSize = "35px"`
   Menampilkan atau menyembunyikan elemen HTML
   `document.getElementById("demo").style.display = "block/none"`

# Where To
1. JavaScript diapit dengan menggunakan tag `<script>`
2. JavaScript bisa diletakkan dalam tag `<head>` atau `<body>` dan file eksternal
3. Pemanggilan JavaScript dengan file eksternal dalam folder website aktif
   `<script src="/js/myScript1.js"></script>`
   Dalam folder halaman aktif
   `<script src="myScript1.js"></script>`

# Output
1. JavaScript bisa menampilkan data dengan cara berbeda-beda
   Menggunakan `innerHTML`
   Menggunakan `document.write()` (hanya untuk testing)
   Menggunakan `window.alert()`
   Menggunakan `console.log()` (untuk debugging)
