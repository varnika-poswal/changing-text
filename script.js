var text=document.getElementById("container");
text.addEventListener("click",()=>{
   // console.log(text.innerHTML);
    if(text.innerHTML==="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa minus ad placeat officiis voluptas perspiciatis eaque vel, ratione soluta, repudiandae quos. Nulla, voluptate repellat atque praesentium ullam dignissimos doloremque?"){
        text.innerHTML="Done reading:♥ !! !!!!"
        console.log(text.innerHTML);
    }else{
        text.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa minus ad placeat officiis voluptas perspiciatis eaque vel, ratione soluta, repudiandae quos. Nulla, voluptate repellat atque praesentium ullam dignissimos doloremque?" 
    }
})