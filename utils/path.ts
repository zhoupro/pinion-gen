import path from 'path';


 function getRootPackagesPath() {
    let dirname = __dirname
    let projectRoot = path.dirname(dirname)
    return `${projectRoot}/packages` 
}

function getPathLastName(pathString:string) {
    let pathArray = pathString.split(path.sep)
    return pathArray[pathArray.length-1]
}




export {
    getRootPackagesPath,
    getPathLastName
}