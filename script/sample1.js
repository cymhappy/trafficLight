/**
 * Created by Keith on 2017/1/10.
 */
let traffic = document.getElementById("traffic");
let classes = ["stop","wait","pass"];
let index = 0;


function changeColor(){
    traffic.className = classes[index++%classes.length];
    setTimeout(changeColor,2000);
}
export {changeColor};