import {Chatroom} from "./chat.js";
import { Lielements } from "./lielement.js";
import "@fortawesome/fontawesome-free/css/all.min.css";


// UI 
const chatrooms = document.querySelector('.chatrooms');
const chatul = document.querySelector('.chat-ul');
const chatform = document.querySelector('.chat-form');
const userform = document.querySelector('.user-form');
const msg = document.querySelector('.msg');
const roomtitle = document.querySelector('.roomtitle');

const getlocalname = localStorage.username ? localStorage.username : "Guest";
userform.username.placeholder = `username is ${getlocalname}`;


// Chatroom instance
const chatroom = Chatroom("general",getlocalname);
roomtitle.textContent = "General";

// Start chat
chatform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = chatform.message.value.trim();
    chatroom.addChat(message)
    .then(()=>chatform.reset())
    .catch(err => console.log(err));
});

//Update username
userform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const newusername = userform.username.value.trim();
    chatroom.updateUsername(newusername);
    userform.reset();

    // show & hide msg
    msg.innerText = `New name is updated to ${newusername}`;
    userform.username.placeholder = `Username is ${newusername}`;

    setTimeout(()=>msg.innerText='',3000);
    
});

// Update chatroom
chatrooms.addEventListener('click',(e)=>{
    e.preventDefault();

    const getbtn = e.target.closest('button');
    // console.log(getbtn);

    if(getbtn){
        // reset li , clear all previous lis
        domli.resetli();

        const getroomid = getbtn.getAttribute('id');
        // console.log(getroomid);
        const gettitle = getbtn.querySelector('h3').innerText;

        roomtitle.textContent = gettitle;

        //update room title dynamically
        // roomtitle.textContent = gettitle;
        
        // update chatroom
        chatroom.updateChatroom(getroomid);

        // fetch get chats
        chatroom.getChats((data)=>{
            domli.newli(data);
        });
    }
});


// Get chatas

chatroom.getChats((data)=>{
    return data;
});

// Initialize the UI element instance
const domli = Lielements(chatul);

// Fetch and display existing chats
chatroom.getChats((data) => {
    domli.newli(data);
});
















