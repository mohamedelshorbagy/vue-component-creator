const touch = require("touch");
const fs = require("fs");
const path = require("path");
const os = require("os");




const createVueComponent = (argvName) => {

    let OsType = os.platform();


    let argvParam = argvName;
    let fileName = argvParam + ".vue";
    let documnetData = `<template>
    <div id="app">
        <p>Component ${argvParam} is Working!</p>
    </div>
</template>
    
<script>
    export default {
    
    }
</script>
<style scoped>
</style>
    `;

    let fullDir;
    if (OsType.indexOf("win") != -1) { // Windows Case
        fullDir = process.cwd() + "\\" + argvParam + "\\" + fileName;
    } else { // Any OS Case
        fullDir = process.cwd() + "/" + argvParam + "/" + fileName;
    }



    if (!fs.existsSync(argvParam)) {
        fs.mkdirSync(argvParam);
        touch(fullDir, function (resp) {
            fs.writeFile(fullDir, documnetData, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(argvParam + " Component Was Created!");
            });
        })
    } else {
        console.log("Component is already Created");
    }


}





module.exports = createVueComponent;