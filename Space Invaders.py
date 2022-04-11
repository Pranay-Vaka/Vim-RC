import turtle
import os
import math

sc = turtle.Screen()
sc.bgcolor("green")
sc.title("Space Invaders")

user = turtle.Turtle()
user.color("red")
user.shape("triangle")
user.penup()
user.speed(0)
user.setposition(0, -280)
user.setheading(90)
userspeed = 15

enemy = turtle.Turtle()
enemy.color("blue")
enemy.shape("circle")
enemy.penup()
enemy.speed(-10)
enemy.setposition(-200, 250)
enemyspeed = 2

attack = turtle.Turtle()
attack.color("yellow")
attack.shape("triangle")
attack.penup()
attack.speed(0)
attack.setheading(90)
attack.shapesize(0.5, 0.5)
attack.hideturtle()

border_pen = turtle.Turtle()
border_pen.speed(0)
border_pen.color("orange")
border_pen.penup()
border_pen.setposition(-300,-300)
border_pen.pendown()
border_pen.pensize(5)

for side in range(4):
    border_pen.fd(600)
    border_pen.lt(90)
border_pen.hideturtle()

def move_left():
    x = user.xcor()
    x -= userspeed
    if x < -280:
        x = -280
    user.setx(x)

def move_right():
    x = user.xcor()
    x += userspeed
    if x > 280:
        x = 280
    user.setx(x)

def fire_attack():
    global attackstate
    if attackstate == "ready":
        attackstate = "fire"
        x = user.xcor()
        y = user.ycor() +10
        attack.setposition(x, y)
        attack.showturtle()

def isCollision(t1, t2):
    distance = math.sqrt(math.pow(t1.xcor()-t2.xcor(),2)+math.pow(t1.ycor()-t2.ycor(),2))
    if distance < 15:
        return True

turtle.listen()
turtle.onkey(move_left, "Left")
turtle.onkey(move_right, "Right")
turtle.onkey(fire_attack, "space")

attackspeed = 20
attackstate = "ready"

while True:
    x = enemy.xcor()
    x += enemyspeed
    enemy.setx(x)

    if enemy.xcor() > 280:
        y = enemy.ycor()
        y -= 40
        enemyspeed *= -1
        enemy.sety(y)
    
    if enemy.xcor() < -280:
        y = enemy.ycor()
        y -=40
        enemyspeed *= -1
        enemy.sety(y)
    if attackstate == "fire":
        y = attack.ycor()
        y += attackspeed
        attack.sety(y)

    if attack.ycor() > 275:
        attack.hideturtle()
        attackstate = "ready"
    if isCollision(attack, enemy):
        attack.hideturtle()
        attackstate = "ready"
        attack.setposition(0, -400)
        enemy.setposition(-200, 250)
    if enemy.ycor() > 280:
        attack.hideturtle()
        enemy.hideturtle()
        user.hideturtle()
        break

    
delay = input("Press enter to finish")
