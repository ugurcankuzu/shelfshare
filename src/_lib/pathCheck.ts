
export default function pathCheck(currentPath:string, searchedPath:string){
    const path = currentPath.split('/');
    return path.includes(searchedPath)
}