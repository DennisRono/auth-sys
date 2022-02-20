let fs = require('fs');
const Format = require('json-format');
let filename = 'testinsdfg.json';

//formatter config
let config = {
    type: 'space',
    size: 2
}

function checkFileExistsSync(filepath){
    let flag = true;
    try{
      fs.accessSync(filepath, fs.constants.F_OK);
    }catch(e){
      flag = false;
    }
    return flag;
}

if(!checkFileExistsSync(filename)){
    fs.open(filename, 'w', function (err) {
        if (err){
            throw err;
        } else {
            console.log('Created file: '+filename);
            fs.writeFileSync(filename, Format({}, config));
            //add logfile to gitignore
            fs.appendFile('.gitignore', filename+'\n', function (err) {
              if (err) throw err;
            });
        }
    });
  }else{
    console.log("exists");
}