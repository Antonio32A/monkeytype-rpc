const io = require("socket.io")(3232, {
    cors: {
        origin: "*"
    }
});
const RPC = require("discord-rpc");

const clientId = "750701334331785276";
const rpc = new RPC.Client({ transport: "ipc" });

let timestamp = Date.now();
let lastData = {
    wpm: "0",
    accuracy: "0",
    timer: "0%",
    username: "null",
    version: "0.0.0"
};

io.on("connection", socket => {
    timestamp = Date.now();
    socket.on("status_update", data => lastData = data);
});

rpc.on("ready", () => setInterval(updateActivity, 15000));

const updateActivity = () => {
    rpc.setActivity({
        details: `${lastData.wpm} WPM | ${lastData.accuracy} | ${lastData.timer}`,
        state: `Playing as ${lastData.username}`,
        startTimestamp: timestamp,
        largeImageKey: "monkeytype",
        largeImageText: "monkeytype.com",
        smallImageKey: "miodec",
        smallImageText: "Crafted by Miodec",
        instance: false,
        buttons: [
            {
                label: "monkeytype " + lastData.version,
                url: "https://monkeytype.com"
            }
        ]
    }).catch(console.error);
};

rpc.login({ clientId }).catch(console.error);