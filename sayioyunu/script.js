

const guessInput = document.querySelector("#guess");
const button = document.querySelector("#guessSend");
const attention = document.querySelector("#attention");
const kalanHak = document.querySelector("#left span");
const numbers = document.querySelector("#numbers span");
const playAgain = document.querySelector("#startAgain");
var kalan, tahminler, random;
kalan = 10;
tahminler = [];

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max - min) + min);
    return number;
};
random = randomNumber(1, 100);
button.addEventListener("click", () => {
    if (kalan == 1) {
        kalan = 0;
        attention.textContent = "Tahmin hakkınız bitti. Kaybettin. Üretilen Sayı: " + random;
        playAgain.style.display = "block";
        tahminler.push(guessInput.value);
        numbers.textContent = tahminler;
        kalanHak.textContent = kalan;
        guessInput.value = "";
        button.disabled = true;
    } else {
        if (guessInput.value == "") {
            attention.textContent = "Bir sayı giriniz";
            kalan++;
        }

        else if(guessInput.value < 0){
            attention.textContent = "Üretilen Sayı, bu değer aralığında değil";
            tahminler.push(" " + guessInput.value);
        }

        else if (guessInput.value == random) {
            attention.textContent = "TEBRİKLER DOĞRU BİLDİNİZ! CEVAP:" + random;
            playAgain.style.display = "block";
            button.disabled = true;
        }
        else if (guessInput.value < random) {
            attention.textContent = "Üretilen Sayı, tahmininizden daha büyük";
            tahminler.push(" " + guessInput.value);
        }
        else if (guessInput.value > random) {
            attention.textContent = "Üretilen Sayı, tahmininizden daha küçük";
            tahminler.push(" " + guessInput.value);
        }

        kalan--;
        guessInput.value = "";
        numbers.textContent = tahminler;
        kalanHak.textContent = kalan;
        guessInput.focus();
    };
})
playAgain.addEventListener("click", () => {
    tahminler = [];
    numbers.textContent = tahminler;
    kalan = 10;
    kalanHak.textContent = kalan;
    attention.textContent = "Tahminini Yaz";
    playAgain.style.display = "none";
    random = randomNumber(1, 100);
    button.disabled = false;
    guessInput.value = "";
})
guessInput.addEventListener("keypress", function () {
    if (event.key == "Enter") {
        if (kalan == 0) {
            playAgain.click();
      } else {
            button.click();
        }
    }
})