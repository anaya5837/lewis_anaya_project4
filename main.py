light.set_brightness(50)
while True:
    print(input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) <= -2:
        light.set_all(light.rgb(100, 0, 100))
        pause(300)
        light.clear()
        pause(300)
    elif input.rotation(Rotation.PITCH) >= 3:
        light.set_all(light.rgb(255, 200, 0))
        pause(300)
        light.clear()
        pause(300)
    else:
        light.set_all(light.rgb(0, 0, 0))
