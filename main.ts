basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(500)
    }
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(1000)
    }
})
