const clientId = "ClientID";
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
    if(!RPC) return;
    RPC.setActivity({
        details: "your details",
        state: "your state",
        largeImageKey: "your image key",
        //startTimestamp: "", //If you want timestamp
        largeImageText: "your image text",
        smallImageKey: "small image key",
        smallImageText: "small image text",
        instance: false
    })
}

RPC.on("ready", async () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * 1000);
})

RPC.login({ clientId }).catch(err => console.error(err))