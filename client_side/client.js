// const socket=io();
import Socketio from "socket.io-client";
const ENDPOINT='http://localhost:5500/'
const socket=Socketio(ENDPOINT,{transports:['websocket']});
// const socket =io();

const form=document.getElementById('send_container');
const messageInput=document.getElementById('messageimp');
const messageContainer=document.querySelector(".container");

const name=prompt("Enter your name to join");
socket.emit('new-user-joined',name);
