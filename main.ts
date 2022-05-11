input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let indeks = 0; indeks < 3; indeks++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - indeks)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    for (let indeks2 = 0; indeks2 < 3; indeks2++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(1 + indeks2)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
