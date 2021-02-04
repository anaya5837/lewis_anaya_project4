while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) < -2) {
        light.setAll(light.rgb(100, 0, 100))
        pause(3000)
        light.clear
        pause(3000)
    } else if (input.rotation(Rotation.Pitch) > 5) {
        light.setAll(light.rgb(0, 100, 100))
        pause(3000)
        light.clear
        pause(3000)
    } else {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
