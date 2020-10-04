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

# Statements
1. JavaScript memperbolehkan tidak menggunakan `;` pada akhir statement, tapi dianjurkan untuk digunakan

# Variables
1. Variable yang sudah di-declare dan di-assign, ketika di-declare lagi, value-nya tidak hilang
2. Variable yang menggunakan keyword `_` digunakan untuk menandakan private variable

# Operators
1. Karena JavaScript dynamic, untuk membandingkan value sekaligus tipe dari variable menggunakan `===`

# Data Types
1. Dalam JavaScript, `null` termasuk objek

# Events
1. Beberapa events dalam HTML
   `onchange`
   `onclick`
   `onmouseover`
   `onmouseout`
   `onkeydown`
   `onload`
2. Contoh penggunaan
   `<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>`

# Strings
1. Untuk memasukkan petik dalam string yang terdapat petik yang sama menggunakan escape character
   `const x = "We are the so-called \"Vikings\" from the north.";`
   `const x = 'It\'s alright.';`

# Last Chapter
https://www.w3schools.com/js/js_string_methods.asp
