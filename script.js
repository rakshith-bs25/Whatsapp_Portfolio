var audio = new Audio('audio/sent.mp3');
var receiveAudio = new Audio('audio/receive.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+91 9986328773'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>+91 9986328773</label></div> </a> <a href='mailto:rakshith.bs2024@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/rakshith-bs25'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/919986328773'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/iam_rakshith_gowda/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/rakshithgowdaa/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";

var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'>" +
                   "<div class='downloadSpace'>" +
                   "<div class='pdfname'><img src='images/pdf.png'>" +
                   "<label>Rakshith B S.pdf</label></div>" +
                   "<a href='documents/Rakshith_BS_Resume.pdf' download='Rakshith_BS_Resume.pdf'>" +
                   "<img class='download' src='images/downloadIcon.svg'></a></div>";

var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3110.4606108!2d76.6809743!3d12.3203348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1688139609838!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>14, Near Milk Dairy, Bevinahalli Village,<br>T Narasipura Taluk, Mysuru District,<br>State- Karnataka, <br>Country- India <br>Pin Code- 571101</address>";

var certificatesString = "<div class='social'>  <a href='https://www.freecodecamp.org/rakshithbs'> <div class='socialItem'><img class='socialItemI' src='images/freecodecamp.svg' alt='freecodecamp'></div> </a> <a target='_blank' href='https://www.coursera.org/user/07f3baab9801d6cd04ae6a8557ba7ffc'> <div class='socialItem'><img class='socialItemI' src='images/coursera.svg' alt='coursera'></div> </a>  </div>";




function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hi there 👋🏻<br><br>My name is <span class='bold'><a class='alink'>Rakshith B S</a>.</span><br><br>I am a Full-Stack Java Developer 👨‍💻 with 3 years of experience. I'm passionate about building scalable web applications using Java, Spring framework, and microservices 🌐.<br><br>Want to know more about my projects and skills? Send <span class='alink'>'more'</span> to dive deeper!🚀<br>");
            }, 2000);
            break;
        case "more":
        case "help":
            sendTextMessage("<span class='sk'>Type below keywords to know about me:<br><br><span class='bold'>'Skills'</span> - to know my skills<br><span class='bold'>'Resume'</span> - to get my Resume<br><span class='bold'>'Education'</span> - to get my Education details<br><span class='bold'>'Address'</span> - to get my Address<br><span class='bold'>'Contact'</span> - to get ways to connect me<br><span class='bold'>'Projects'</span> - to get details of my projects<br>  <span class='bold'>'Certificates'</span> - to get details of my certificates<br> <span class='bold'>'About'</span> - to know about this site<br> <span class='bold'>'Clear'</span> - to clear conversation</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;

        case "certificates":
            sendTextMessage(certificatesString);
            break;

        case "skills":
            sendTextMessage("<span class='sk'>My skills:<br><br>Programming Languages: <span class='bold'>Java, Python, SQL, PL/SQL</span><br>Data Structures and Algorithms (DSA)<br>Web Frameworks: <span class='bold'>Spring MVC, Spring Boot, Microservices</span><br>Frontend Technologies: <span class='bold'>HTML, CSS, JavaScript, jQuery, AJAX, React.js</span><br>Database: <span class='bold'>MySQL</span><br>Data Visualization: <span class='bold'>Tableau,Microsoft Excel</span><br>Non-Technical Skills: <span class='bold'>Communication, Teamwork, Problem Solving, Time Management</span></span>");

            break;

            case "education":
                sendTextMessage("I am currently working as an Associate Software Engineer💻, where I design and develop scalable web applications, ensuring robust functionality and enhancing user experience.✨<br> <br>Bachelor of Engineering (B.E.) in Mechanical Engineering<br>P.E.S. College of Engineering, Mandya<br>Passing Year: 2021<br>Result: 7.9 CGPA🌟<br><br>Pre-University (PU) College🏫<br>Mother Theresa PU College, Mysore<br>Passing Year: 2017<br>Result: 77%📈<br>");
                break


        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript. <br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' ><span class='bold'>Rakshith B S</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("All my projects are in my GitHub Account.<br><br><div class='social'><a target='_blank' href='https://github.com/rakshith-bs25'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey, I couldn't catch you...😢<br>Send 'help' to know how to chat with me.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playReceiveSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}



function playReceiveSound() {
    receiveAudio.play();
}