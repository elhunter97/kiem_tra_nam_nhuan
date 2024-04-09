function check() {
    let year =+document.getElementById('year').value;
    if (year % 4 ==0 && year % 100 != 0){
        document.getElementById('result').innerHTML = 'Năm nhuận';
    } else if (year % 100 == 0 && year % 400 == 0) {
        document.getElementById('result').innerHTML = 'Năm nhuận';
    } else{
        document.getElementById('result').innerHTML = 'Không phải năm nhuận';

    }
}