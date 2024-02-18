basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    """)
basic.show_leds("""
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    """)
basic.show_leds("""
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    """)
basic.show_leds("""
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    """)
basic.show_leds("""
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    """)
music.play(music.create_sound_expression(WaveShape.NOISE,
        523,
        1,
        255,
        0,
        100,
        SoundExpressionEffect.WARBLE,
        InterpolationCurve.LOGARITHMIC),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.string_playable("G - G - G C5 - - ", 480),
    music.PlaybackMode.UNTIL_DONE)
basic.show_string("Welcome to The Meters App!")
basic.show_string("Please Tilt The Micro:Bit to Start!")
radio.send_string("HELLO! I am stalking you!")