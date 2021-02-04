
while True:
    print(input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) <= -2:
        light.set_all(light.rgb(100, 0, 100))
        light.clear
        pause(300)
        light.clear
    elif input.rotation(Rotation.PITCH) >= 3:
        light.set_all(light.rgb(0, 100, 100))
        light.clear
        pause(300)
        light.clear
    else:
        light.set_all(light.rgb(0, 0, 0))
