while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) <= -2) {
        light.setAll(light.rgb(100, 0, 100))
        pause(300)
        light.clear
        pause(300)
    } else if (input.rotation(Rotation.Pitch) >= 1) {
        light.setAll(light.rgb(0, 100, 100))
        pause(300)
        light.clear
        pause(300)
    } else {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
