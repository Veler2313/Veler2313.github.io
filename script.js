
document.addEventListener("DOMContentLoaded", () => {
  meTime();
  meUser();
  const gb = document.getElementById("gmailButton")
  if (gb){
    gb.addEventListener("click", () => {
      // Open the link in a new tab
      window.location.href = "https://mail.google.com/mail/u/0/#inbox";
    });
  }
  const mb = document.getElementById("meetButton")
  if (mb){
    mb.addEventListener("click", () => {
      // Open the link in a new tab
      window.location.href = "https://meet.google.com/";
    });
  }
  const ct = document.getElementById("ct")
  if (ct){
    ct.addEventListener("click", () => {
      closeOverlay();
    });
  }
  const input = document.getElementById("terminalInput");
  if (input){
    input.addEventListener("blur", () => {
      closeOverlay();
    });
  }
});

setInterval(() => { meTime(); }, 1000);
setInterval(() => { meUser(); }, 700);

function meTime(){
  const element = document.getElementById("datetime");
  if (element)
  {
    var now = new Date();
    let hours = now.getHours();
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Converts "0" (midnight) to "12"
    var datetime = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear()
    + " " + getDayName(now.getDay()) + " " + hours + ":"
    + now.getMinutes().toString().padStart(2, "0") + " " + amPm;
    element.textContent = datetime;
  }
  else
  {
    console.error("Element with id 'datetime' not found.");
  }
}

let qMark = false;

function meUser(){
  const user = document.getElementById("user");
  if (user)
  {
    if (qMark)
    {
      user.textContent = "root?";
      qMark = false;
    }
    else
    {
      user.textContent = "root ";
      qMark = true;
    }
  }
  else
  {
    console.error("Element with id 'user' not found.");
  }
}

function getDayName(dayNumber) {
  const daysOfWeek = [
    "Sunday",    // 0
    "Monday",    // 1
    "Tuesday",   // 2
    "Wednesday", // 3
    "Thursday",  // 4
    "Friday",    // 5
    "Saturday"   // 6
  ];

  // Ensure dayNumber is valid
  if (dayNumber < 0 || dayNumber > 6) {
    return "Invalid day number";
  }

  return daysOfWeek[dayNumber];
}

class TriggerWord {
  constructor(word, action) {
    this.word = word;
    this.action = action;
  }
}

let latestKey = '';
let typedBuffer = '';
let isAnim = false;
let isInInter = false;
let colorIndex = 0;
let colorList = ["green", "lime", "yellow", "gold", "orange", "brown", "red", "megenta", "pink", "purple", "blue", "cyan", "teal"];
const triggers = [
  new TriggerWord('meet', () => { window.location.href = "https://meet.google.com/"; } ),
  new TriggerWord('gmail', () => { window.location.href = "https://mail.google.com/mail/u/0/#inbox"; } ),
  new TriggerWord('hello', () => { window.location.href = "https://chatgpt.com/"; }),

  new TriggerWord('green', () => {
    document.documentElement.style.setProperty('--main-color', '#00ff00');
    document.documentElement.style.setProperty('--sec-color', '#69ff69');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('red', () => {
    document.documentElement.style.setProperty('--main-color', '#ff0000');
    document.documentElement.style.setProperty('--sec-color', '#ff6969');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('blue', () => {
    document.documentElement.style.setProperty('--main-color', '#0000ff');
    document.documentElement.style.setProperty('--sec-color', '#6969ff');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('white', () => {
    document.documentElement.style.setProperty('--main-color', '#ffffff');
    document.documentElement.style.setProperty('--sec-color', '#888888');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('yellow', () => {
    document.documentElement.style.setProperty('--main-color', '#ffff00');
    document.documentElement.style.setProperty('--sec-color', '#ffff69');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('gold', () => {
    document.documentElement.style.setProperty('--main-color', '#ffc800');
    document.documentElement.style.setProperty('--sec-color', '#ffe173');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('orange', () => {
    document.documentElement.style.setProperty('--main-color', '#ffa200');
    document.documentElement.style.setProperty('--sec-color', '#ffc663');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('purple', () => {
    document.documentElement.style.setProperty('--main-color', '#b300ff');
    document.documentElement.style.setProperty('--sec-color', '#d269ff');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('pink', () => {
    document.documentElement.style.setProperty('--main-color', '#ff61d7');
    document.documentElement.style.setProperty('--sec-color', '#ff99e5');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('megenta', () => {
    document.documentElement.style.setProperty('--main-color', '#ff008c');
    document.documentElement.style.setProperty('--sec-color', '#ff70bf');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('cyan', () => {
    document.documentElement.style.setProperty('--main-color', '#00ffff');
    document.documentElement.style.setProperty('--sec-color', '#69ffff');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('teal', () => {
    document.documentElement.style.setProperty('--main-color', '#00ff95');
    document.documentElement.style.setProperty('--sec-color', '#5cffbb');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('lime', () => {
    document.documentElement.style.setProperty('--main-color', '#a9ff00');
    document.documentElement.style.setProperty('--sec-color', '#ccff68');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('brown', () => {
    document.documentElement.style.setProperty('--main-color', '#a34401');
    document.documentElement.style.setProperty('--sec-color', '#b7784c');
    document.documentElement.style.setProperty('--background-color', '#00000016');
  }),
  new TriggerWord('black', () => {
    document.documentElement.style.setProperty('--main-color', '#000000');
    document.documentElement.style.setProperty('--sec-color', '#000000');
    document.documentElement.style.setProperty('--background-color', '#ffffff16');
  }),

  new TriggerWord('anim', () => {
    if (isAnim)
    {
      isAnim = false;
      colorIndex = 0;
    }
    else
    {
      isAnim = true;
      colorIndex = 0;
    }
    if (isInInter === false)
    {
      setInterval(() => {
        if (isAnim)
        {
          for (let i = 0; i < triggers.length; i++)
          {
            if (triggers[i].word === colorList[colorIndex])
            {
              triggers[i].action();
            }
          }
          colorIndex++;
          if (colorIndex > colorList.length)
          {
            colorIndex = 0;
          }
        }
      }, 500);
      isInInter = true;
    }
  }),

  new TriggerWord('yes', () => { alert('OK'); }),
  new TriggerWord('cmd', () => { openOverlay(); } ),
];

document.addEventListener('keydown', (event) => {
  // Ignore special keys like Shift, Ctrl, etc.
  if (event.key.length === 1) {

    const input = document.getElementById("terminalInput");
    if (document.activeElement === input) {
      return;
    }

    latestKey = event.key;
    typedBuffer += latestKey;

    // Optional: keep buffer short if you expect short words
    if (typedBuffer.length > 20) {
      typedBuffer = typedBuffer.slice(-20); // keep last 20 characters
    }

    // Check if buffer ends with any trigger word
    for (const trigger of triggers) {
      if (typedBuffer.endsWith(trigger.word)) {
        trigger.action(); // Call the associated function
      }
    }
  }
});

function openOverlay() {
  const overlay = document.getElementById("commandOverlay");
  overlay.style.display = "flex";
  setTimeout(() => {
    document.getElementById("terminalInput").focus();
  }, 50);
}

function closeOverlay() {
  document.getElementById("commandOverlay").style.display = "none";
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const command = e.target.value.trim();
    const args = command.trim().split(/\s+/);
    if (args.length > 0){
      if (args[0].toLowerCase() === "color"){
        if (args.length > 1 && args[1].startsWith('#')){
          document.documentElement.style.setProperty('--main-color', args[1]);
        }
      }
      else if (args[0].toLowerCase() === "sec-color"){
        if (args.length > 1 && args[1].startsWith('#')){
          document.documentElement.style.setProperty('--sec-color', args[1]);
        }
      }
      else if (args[0].toLowerCase() === "back-color"){
        if (args.length > 1 && args[1].startsWith('#')){
          document.documentElement.style.setProperty('--background-color', args[1]);
        }
      }
      else if (args[0].toLowerCase() === "site"){
        if (args.length > 1){
          let domain = "com"
          if (args.length > 2){
            domain = args[2];
          }
          window.location.href = "https://" + args[1] + "." + domain;
        }
      }
    }
    e.target.value = ""; // Clear input after command
    closeOverlay();
  }
  if (e.key === "Escape") {
    closeOverlay();
  }
});
