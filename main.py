
while True:
    print(input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) <= -2:
        light.set_all(light.rgb(100, 0, 100))
        pause(300)
        light.clear
        pause(300)
    elif input.rotation(Rotation.PITCH) >= 1:
        light.set_all(light.rgb(0, 100, 100))
        pause(300)
        light.clear
        pause(300)
    else:
        light.set_all(light.rgb(0, 0, 0))
