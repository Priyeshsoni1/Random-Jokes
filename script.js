 const jo=document.getElementById("jo");
 const joke=document.getElementById("joke");
 const newjoke=document.getElementById("newjoke");
const whatsapp =document.getElementById("whatsapp");



let realData="";

const what=()=>{
    let whats='whatsapp://send?text=data1';
    window.open(whats);

}



const getjokes=async()=>{
    const api="https://v2.jokeapi.dev/joke/Any";
    try{
        let data=await fetch(api);
        let realData=await data.json();
        data1=realData.setup;
        data2=realData.delivery;
        jo.innerText=data1;
        joke.innerText=data2;
    } catch(error){}

};
newjoke.addEventListener("click",getjokes);
whatsapp.addEventListener("click",what);
getjokes();
