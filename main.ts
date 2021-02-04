while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) <= -2) {
        light.setAll(light.rgb(100, 0, 100))
        light.clear
        pause(300)
        light.clear
    } else if (input.rotation(Rotation.Pitch) >= 3) {
        light.setAll(light.rgb(0, 100, 100))
        light.clear
        pause(300)
        light.clear
    } else {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
