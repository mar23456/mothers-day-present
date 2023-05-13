input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    music.playMelody("G B A G C5 B A B ", 129)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("G F G A - F E D ", Math.min(1, 3))
})
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
})
basic.showString("happy mothers day")
basic.showIcon(IconNames.Happy)
