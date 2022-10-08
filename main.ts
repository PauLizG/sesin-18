input.onButtonPressed(Button.A, function () {
    contador = 1
    while (!(contador == 11)) {
        basic.showNumber(contador)
        contador += 1
    }
    cambioC()
    basic.clearScreen()
})
function cambioC () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Silly)
        basic.showIcon(IconNames.Happy)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    contador = 2
    while (!(contador == 22)) {
        basic.showNumber(contador)
        contador += 2
    }
    cambioC()
    basic.clearScreen()
})
let contador = 0
let limite = randint(5, 10)
basic.showNumber(limite)
for (let contador = 0; contador <= limite; contador++) {
    basic.showNumber(contador)
    for (let index = 0; index < contador; index++) {
        music.playTone(294, music.beat(BeatFraction.Half))
        basic.pause(100)
    }
}
basic.clearScreen()
