input.onButtonPressed(Button.A, function () {
    for (let indeks = 0; indeks <= 2; indeks++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - indeks)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    for (let indeks2 = 0; indeks2 <= 2; indeks2++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(1 + indeks2)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
