const glob = require('glob');
const path = require('path');

class FileUpload {
    uploadSingleFileFromTestFolder(testFileName){
        const filePath = path.join(__dirname, `../../test_files/${testFileName}`);
        return $('.uploader__files').$('form').$('input[type=file]').setValue(filePath);
    }

    uploadSingleFileTypeFromTestFolder(testFileType){
        const getFilePath = glob.sync(`test_files//**/*${testFileType}`)
        const getAbsoluteFilePath = path.join(__dirname, `../../${getFilePath[0]}`)
        return $('.uploader__files').$('form').$('input[type=file]').setValue(getAbsoluteFilePath);
    }
}
module.exports = new FileUpload();
