const fs = require("fs").promises;
const fileName = "myfile.txt";
const fileContent = ", is an online learning platform.";

const updateFile = async (fileName, fileContent) => {
  //Write your code here to overwrite the file content
  //Don't change function name
 const fileData = fs.readFileSync(fileName);
   let contents = fileData.toString();
    contents = contents+fileContent;
   fs.writeFileSync(fileName,contents);
   
};

module.exports = updateFile;
