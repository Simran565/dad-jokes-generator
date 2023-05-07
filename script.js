const joke= document.getElementById("joke");
const btn = document.getElementById("btn");

// const generateJoke= ()=>
// {
//     const setHeader={
//         headers:{
//             Accept:"application/json"
//         }
//     }

    // fetch('https://icanhazdadjoke.com', setHeader)//promise
    // .then((res)=>res.json())
    // .then((data)=> 
    // { joke.innerHTML=data.joke}).catch((error) => 
    // {console.log(error);
    // })
//}

const generateJoke = async ()=>//asynch wait with error handling
{
    try{
    const setHeader={
        headers:{
            Accept:"application/json"
        }
    }
const res = await fetch('https://icanhazdadjoke.com', setHeader);
const data= await res.json();
joke.innerHTML=data.joke
}catch(err)
{console.log(error);}
}

btn.addEventListener('click', generateJoke);
generateJoke();