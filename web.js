const script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://cdn.socket.io/3.1.1/socket.io.min.js";
document.head.appendChild(script);

setTimeout(() => {
    const socket = io("http://localhost:3232");

    setInterval(() => {
        const data = {};
        data.wpm = document.getElementById("liveWpm").textContent;
        data.accuracy = document.getElementById("liveAcc").textContent;
        data.timer = document.getElementById("timerNumber").textContent.replace(/\n/g, "");
        data.username = document.getElementById("menu").textContent.replace(/\n/g, "");
        data.version = document.getElementById("bottom").textContent.match(/v\d+\.\d+\.\d+/)[0];

        socket.emit("status_update", data);
    }, 1000);
}, 5000);

