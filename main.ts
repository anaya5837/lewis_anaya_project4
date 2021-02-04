while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) < -4) {
        light.setAll(light.rgb(100, 0, 100))
    } else if (input.rotation(Rotation.Pitch) > 5) {
        light.setAll(light.rgb(0, 100, 100))
    } else {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
