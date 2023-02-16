const fs = require('fs');
const parseReplay = require('fortnite-replay-parser');
const dir = "C:/Users/arkan/AppData/Local/FortniteGame/Saved/Demos"
const rdifName = "Top1_LateGame"
const listReplays = fs.readdirSync(dir)
const replayBuffer = fs.readFileSync(`${dir}/${rdifName}.replay`);

const config = {
    parseLevel: 10,
    debug: true,
}

parseReplay(replayBuffer, config).then((parsedReplay) => {
    fs.writeFileSync(`replayData_${rdifName}.json`, JSON.stringify(parsedReplay));
}).catch((err) => {
    console.error('An error occured while parsing the replay!', err);
});