let fs = require('fs');
let filename = 'deno.json';
const Format = require('json-format');

//formatter config
let config = {
    type: 'space',
    size: 2
}

  //get today's time
const getTime = () => {
    return new Date(Date.now()).toLocaleString("en-US", { timeZone: "Africa/Nairobi" });
  }

//today's date
const todayDate = () => {
    const today = new Date();
    let todaydate = "log"+today.getDate()+""+(today.getMonth()+1)+""+today.getFullYear();
    return todaydate
}

//read the json file
const getLogs = () => {
    var webProjects = JSON.parse(fs.readFileSync(filename));
    if(Object.entries(webProjects).length === 0){
        return {data: webProjects, state: "Empty"}
    } else{
        return {data: webProjects, state: "Not Empty"}
    }
}
let newlogs =  {
    Status: 'nothing to commit, working tree clean',
    TimePushed: getTime()
  }
const writingLogs = () => {
    //generate unique id
    let id = Math.random().toString(36).substr(2, 5);
    //check logs state
    let logs;
    if(getLogs().state === "Empty"){
        let tod = todayDate();
        newlogs = '{"'+tod+'"'+' :['+JSON.stringify(newlogs)+']}';
        logs = JSON.parse(newlogs);
        fs.writeFileSync(filename, Format(logs, config));
    }else{
        //get last key input from the json data
        var lastKey;
        for(var key in getLogs().data){
            if(getLogs().data.hasOwnProperty(key)){
                lastKey = key;
            }
        }
        console.log(lastKey+" === "+todayDate());
        if(lastKey === todayDate()){
            console.log("Runnig");
            let cutlogs = JSON.stringify(getLogs().data).slice(0, JSON.stringify(getLogs().data).length-2);
            logs = cutlogs+','+JSON.stringify(newlogs)+']}';
            logs = JSON.parse(logs);
            fs.writeFileSync(filename, Format(logs, config));
        }
    }
}

writingLogs()