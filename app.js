const fs = require("fs");
const os = require("os");




const createVueComponent = (argvName, dir) => {

    let OsType = os.platform();
    let fileName = argvName + ".vue";
    let documnetData = `<template>
    <div id="app">
        <p>Component ${argvName} is Working!</p>
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
    let componentFolder;
    if (OsType.indexOf("win") != -1) { // Windows OS Case
        if (dir) {
            fullDir = process.cwd() + "\\src\\components\\" + fileName;
            componentFolder = process.cwd() + "\\src\\components";
        } else {
            fullDir = process.cwd() + "\\src\\" + fileName;
        }
    } else { // Other OS Types
        if (dir) {
            fullDir = process.cwd() + "/src/components/" + fileName;
            componentFolder = process.cwd() + "/src/components";
        } else {
            fullDir = process.cwd() + "/src/" + fileName;
        }
    }

    if (dir) {
        if (!fs.existsSync(componentFolder)) {
            fs.mkdirSync(componentFolder);
        }
    }

    if (!fs.existsSync(fullDir)) {
        fs.writeFile(fullDir, documnetData, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log(argvName + " Component Was Created!");
        });
    } else {
        console.log("Component is already Created");
    }
}





module.exports = createVueComponent;