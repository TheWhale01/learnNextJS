# NextJS Test
This is a simple chat client using FastAPI, socketio, NextJS.
The goal of this was to learn a bit of React/NextJS.
For the moment there is no style on  the page but maybe I will add it later on

## How to run
```shell
docker compose up --build -d
```

The frontend powered by NextJS is located at [http://localhost:3000/](http://localhost:3000)
The backend, is located at [http://localhost:3030](http://localhost:3000)

## Infos
There are no API endpoints, just the socketio server running.
It took me like 4 hours to make it, knowing that I didn't know react before
and I've never worked with socketio.

Usually I use VueJS for the frontend. Switching this time to NextJS/React was
kind a struggle as they have nothing in common, appart from the use of typescript.

## What I've learnt
 - How to create a socketio server in fastapi
 - Create some simple React components (eg: Button)
 - Organise the project in a scalable way.

## What I did not understand
 - What excatly is useState, useEffect and what are the differences.
 - Why do I received each messages from the socketio server multiple times.
 - It seems that the code in the useEffect, is executed once, the rest, outside, seems to be re-rendered by the server without the user action needed.
