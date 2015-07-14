# quizz
This is a simple quizz system for use at Dreamhack Valencia in Colaboration with the Valencia Hackerspace

You are supposed to set the questions in the test.js file using json format, then run the system.

During the game:
n will show the next question (if marked as guessed or failed)
o will mark the question as guessed and grant points
r will cause a rebound and remove points
f will mark the question as failed and remove points
w will say player 1 knows the answer
a will say player 2 knows the answer
s will say player 3 knows the answer
d will say player 4 knows the answer

All this code is licensed uder Affero GPL v3.0 or at your choice any higher version

You need to set up some sound files:
failure.mp3 played after the question is considered invalid
player1.mp3 played after player 1 presses the button
player2.mp3 played after player 2 presses the button
player3.mp3 played after player 3 presses the button
player4.mp3 played after player 4 presses the button
rebound.mp3 played after a question is rebounded
success.mp3 played after a question is guessed
