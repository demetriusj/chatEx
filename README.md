# Crazy Fun Mountain Dew Code-A-Thon

 The challenge to write a Socket.IO chat server with nodejs! You start from scratch and you have 5 hours. 

## Description

  After launching the node server, users can access the system through their web browser. Once loaded, the web page should never need to reload. The user should enter their name and be able to start chatting immediately. They should see a list of all users in the chat room, and be able to type messages in a box by typing and pressing enter. A list of chat messages should also be displayed. It is only necessary to show chat messages that were sent after the user has logged in (i.e. no history storage is necessary).

  The messages should be sent over websockets as "push" notifications. That is, there should be no polling at all, as soon as a message is typed by one user it should show up on all other logged in users screens instantly.

  On the front-end, only one HTML page is required with inline CSS and Javascript, this HTML file should be served by the node.js script. The node.js script should also handle all websocket communication.

  Must be launchable by "node script.js <port>"
  node.js must also be the web server and handle the web sockets with socket.io

## How it will be judged

* Contains all required features
* Uses specifies libraries
* Quality and structure of code
* Use of tests
