let Score = 0
let StartGame = 0
let NextGame = 0
let Move = 0
let Maze_1 = 0
let Counter = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Score = 0
    StartGame = 0
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    basic.pause(500)
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.clearScreen()
    basic.pause(200)
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showString("Hello! Now loading game!")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
    basic.pause(500)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.clearScreen()
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showString("Now Shake!!!")
    StartGame = 1
    basic.showString("" + (Score))
})
input.onSound(DetectedSound.Loud, function () {
    if (NextGame == 5) {
        Move += 1
        if (Move == 1) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . # . . .
                # . . . .
                . . . . #
                # . # . .
                # . # . .
                `)
        }
        if (Move == 2) {
            music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # # . . .
                . . . . #
                # . # . .
                # . # . .
                `)
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . #
                # . # . .
                # . # . .
                `)
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # # . . .
                . . . . #
                # . # . .
                # . # . .
                `)
        }
        if (Move == 3) {
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # . . . .
                . . # . #
                # . # . .
                # . # . .
                `)
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # . . # .
                . . . . #
                # . # . .
                # . # . .
                `)
        }
        if (Move == 4) {
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # . . . #
                . . . . #
                # . # . .
                # . # . .
                `)
            music.play(music.createSoundExpression(WaveShape.Square, 1, 849, 255, 255, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # . . . .
                . . . . #
                # . # . .
                # . # . .
                `)
            basic.showIcon(IconNames.Yes)
            music.play(music.stringPlayable("G - G - G C5 - - ", 260), music.PlaybackMode.UntilDone)
            basic.showString("Course: 2")
            music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . # . #
                . . . . #
                # . . . #
                . # . . #
                `)
        }
        if (Move == 5) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . # . #
                . . . . #
                # . . # .
                . # . . #
                `)
            music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . # . #
                . . # . #
                # . . . .
                . # . . #
                `)
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . # . #
                . . . . #
                # # . . .
                . # . . #
                `)
        }
        if (Move == 6) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 750, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            basic.showLeds(`
                . . . . .
                . . # . #
                . # . . #
                # . . . .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                # . # . #
                . . . . #
                # . . . .
                . # . . #
                `)
        }
        if (Move == 7) {
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . # . #
                # . . . #
                # . . . .
                . # . . #
                `)
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                # . # . #
                . . . . #
                # . . . .
                . # . . #
                `)
        }
        if (Move == 8) {
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 1, 582, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . # . . .
                . . # . #
                . . . . #
                # . . . .
                . # . . #
                `)
            music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . # # . #
                . . . . #
                # . . . .
                . # . . #
                `)
        }
        if (Move == 9) {
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . # . . .
                . . # . #
                . . . . #
                # . . . .
                . # . . #
                `)
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . # . .
                . . # . #
                . . . . #
                # . . . .
                . # . . #
                `)
        }
        if (Move == 10) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . # .
                . . # . #
                . . . . #
                # . . . .
                . # . . #
                `)
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . #
                . . # . #
                . . . . #
                # . . . .
                . # . . #
                `)
        }
        if (Move == 11) {
            music.play(music.createSoundExpression(WaveShape.Square, 500, 1146, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . # . #
                . . . . #
                # . . . .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.showString("Course: 3")
            music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . #
                . . . . #
                . # . . .
                . . . . .
                # . . # .
                `)
        }
        if (Move == 12) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . # .
                . . . . #
                . # . . .
                . . . . .
                # . . # .
                `)
        }
        if (Move == 13) {
            music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . # . .
                . . . . #
                . # . . .
                . . . . .
                # . . # .
                `)
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . # . . #
                . # . . .
                . . . . .
                # . . # .
                `)
        }
        if (Move == 14) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            basic.showLeds(`
                . . # . .
                . . . . #
                . # . . .
                . . . . .
                # . . # .
                `)
            music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . . # #
                . # . . .
                . . . . .
                # . . # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . # . # .
                . . . . .
                # . . # .
                `)
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            basic.showLeds(`
                . . . . .
                . . . . #
                . # . . .
                . . . # .
                # . . # .
                `)
        }
        if (Move == 15) {
            music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . . . #
                . # . . .
                . . # . .
                # . . # .
                `)
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 1, 306, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . . . #
                . # . . .
                . # . . .
                # . . # .
                `)
        }
        if (Move == 16) {
            music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . . . #
                . # . . .
                # . . . .
                # . . # .
                `)
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 1, 306, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
        if (Move == 17) {
            music.play(music.createSoundExpression(WaveShape.Square, 1, 849, 255, 255, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . . . #
                . # . . .
                . . . . .
                # . . # .
                `)
            basic.pause(1000)
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                . # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . # . .
                . # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            music.play(music.stringPlayable("E G B C5 - C5 - C5 ", 120), music.PlaybackMode.UntilDone)
            basic.showString("Good Job! You have beat the whole game! Bye!")
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (NextGame == 5) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . # . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . # . .
            . . . . .
            # # . . .
            `)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . # . .
            . . . . .
            # # # . .
            `)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . # . .
            . . . . .
            # # # # .
            `)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . # . .
            . . . . .
            # # # # #
            `)
        basic.showString("Now, complete 3 parkour courses! To move, clap!")
        Move = 1
        basic.showString("Course: 1")
        music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . #
            # . # . .
            # . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (NextGame == 2) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.clearScreen()
        basic.showString("Go through 3 mazes!")
        basic.showString("Press")
        basic.showLeds(`
            . # # # .
            # . . . #
            # # . # #
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("to move!")
        basic.showString("Maze: 1")
        Maze_1 = 0
        NextGame = 3
        music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Counter == 1) {
        NextGame = 0
        Score += 1
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showString("" + (Score))
    }
    if (Score == 10) {
        basic.showIcon(IconNames.Yes)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.clearScreen()
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.clearScreen()
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.clearScreen()
        NextGame = 1
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (NextGame == 3) {
        Maze_1 += 1
        if (Maze_1 == 1) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # # # .
                . # . # .
                `)
        }
        if (Maze_1 == 2) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # .
                . # . # .
                . # . # .
                `)
        }
        if (Maze_1 == 3) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . # . # .
                . # # # .
                . # . # .
                . # . # .
                . # . # .
                `)
        }
        if (Maze_1 == 4) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . # # # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
        }
        if (Maze_1 == 5) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.pause(2000)
            basic.showString("Maze: 2 ")
            music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # . # # #
                # . . . #
                # # # # #
                `)
        }
        if (Maze_1 == 6) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # . # # #
                # . . # .
                # # # # #
                `)
        }
        if (Maze_1 == 7) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # . # # #
                # . # . .
                # # # # #
                `)
        }
        if (Maze_1 == 8) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # . # # #
                # # . . .
                # # # # #
                `)
        }
        if (Maze_1 == 9) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                # . . . .
                # # # # #
                `)
        }
        if (Maze_1 == 10) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # # . . .
                # . # # #
                # . . . .
                # # # # #
                `)
        }
        if (Maze_1 == 11) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . # . .
                # . # # #
                # . . . .
                # # # # #
                `)
        }
        if (Maze_1 == 12) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . # .
                # . # # #
                # . . . .
                # # # # #
                `)
        }
        if (Maze_1 == 13) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . #
                # . # # #
                # . . . .
                # # # # #
                `)
        }
        if (Maze_1 == 14) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # . # # #
                # . . . .
                # # # # #
                `)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.pause(200)
            basic.showString("Maze: 3")
            music.play(music.createSoundExpression(WaveShape.Square, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . #
                # . # # #
                # # . . .
                # # # # #
                `)
        }
        if (Maze_1 == 15) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . # .
                # . # # #
                # # . . .
                # # # # #
                `)
        }
        if (Maze_1 == 16) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . # . .
                # . # # #
                # # . . .
                # # # # #
                `)
        }
        if (Maze_1 == 17) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # # . . .
                # . # # #
                # # . . .
                # # # # #
                `)
        }
        if (Maze_1 == 18) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                # # . . .
                # # # # #
                `)
        }
        if (Maze_1 == 19) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # . # # #
                # # # . .
                # # # # #
                `)
        }
        if (Maze_1 == 20) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # . # # #
                # # . # .
                # # # # #
                `)
        }
        if (Maze_1 == 21) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # . # # #
                # # . . #
                # # # # #
                `)
        }
        if (Maze_1 == 22) {
            music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.showLeds(`
                # # # # #
                # . . . .
                # . # # #
                # # . . .
                # # # # #
                `)
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                . # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . # . .
                . # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
            basic.showString("Good Job!")
            NextGame = 4
            basic.showString("Press 'A' and 'B'!")
            basic.showLeds(`
                . . . # .
                . . # . .
                . # # # #
                . . # . .
                . . . # .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.showLeds(`
                . # . . .
                . . # . .
                # # # # .
                . . # . .
                . # . . .
                `)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
            basic.clearScreen()
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
            NextGame = 5
        }
    }
})
basic.forever(function () {
    if (NextGame == 1) {
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            # # . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            # # # . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(1000)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Yes)
        basic.showString("Click 'B'!")
        basic.showLeds(`
            . # . . .
            . . # . .
            # # # # .
            . . # . .
            . # . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        NextGame = 2
    }
})
basic.forever(function () {
    if (StartGame == 1) {
        Counter = 1
    }
})
