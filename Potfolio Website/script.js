const moon=document.querySelector(".moon")
const famoon=document.querySelector("#darkmoon");
moon.onclick =function()
{
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme"))
    {
        famoon.src = "dark theme icon/sun.png";
    }
    else
    {
         famoon.src = "dark theme icon/moon.png";
    }

}
