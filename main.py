while True:
    print(input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) < -2:
        light.set_all(light.rgb(100, 0, 100))
    elif input.rotation(Rotation.PITCH) > 5:
        light.set_all(light.rgb(0, 100, 100))
    else:
        light.set_all(light.rgb(0, 0, 0))
