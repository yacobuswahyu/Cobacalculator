function hitung(pilihan)
{
    var angka1=document.getElementById('input1').value;
    var angka2=document.getElementById('input2').value;
    var angka3=document.getElementById('input3').value;
    angka1 = parseInt(angka1)
    angka2 = parseInt(angka2)
    angka3 = parseInt(angka3)
    if (pilihan=='+'){
        document.getElementById('hasil').value = angka1 + angka2 + angka3;
    }
    else if(pilihan == '-'){
        document.getElementById('hasil').value = angka1 - angka2 - angka3;
    }
    else if(pilihan == 'x'){
        document.getElementById('hasil').value = angka1 * angka2 * angka3;
    }
    else {
        document.getElementById('hasil').value = angka1 / angka2 / angka3;
    }
    document.getElementById('hasil');
}