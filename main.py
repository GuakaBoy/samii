def on_button_pressed_a():
    for indeks in range(3):
        music.play_tone(262, music.beat(BeatFraction.QUARTER))
        basic.show_number(3 - indeks)
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    basic.show_string("GO!")
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_icon(IconNames.CHESSBOARD)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.AB, on_button_pressed_ab)


def on_button_pressed_b():
    for indeks2 in range(3):
        music.play_tone(262, music.beat(BeatFraction.QUARTER))
        basic.show_number(1 + indeks2)
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    basic.show_string("GO!")
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.HEART)