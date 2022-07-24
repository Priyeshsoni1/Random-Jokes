 const jo=document.getElementById("jo");
 const joke=document.getElementById("joke");
 const newjoke=document.getElementById("newjoke");
const whatsapp =document.getElementById("whatsapp");



let realData="";

const what=()=>{
    let whats='whatsapp://send?text=blahblah';
    window.open(whats);

}



const getjokes=async()=>{
    const api="https://v2.jokeapi.dev/joke/Any";
    try{
        let data=await fetch(api);
        let realData=await data.json();
        jo.innerText=realData.setup;
        joke.innerText=realData.delivery;
    } catch(error){}

};
newjoke.addEventListener("click",getjokes);
whatsapp.addEventListener("click",what);
getjokes();