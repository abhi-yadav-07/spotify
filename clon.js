console.log ("write sone code in js");

async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();
    console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;
 
    let as = div .getElementsByTagName("a");
    let songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/songs/`)[0]);
        }
    }
    return songs
}
let currentSong = new Audio();
const playMusic = (track)=>{
    // let audio = new Audio("/songs/" + track)
    currentSong.src = "/songs/" + track
    currentSong.play()
    }
async function main() {
    let songs = await getsongs()
    console.log(songs)

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
             <img class="invert" height="33px" src="music.png" alt="">
                     <div class="info">
                        <div>${song .replaceAll("%5","" ) .replaceAll("%20","") .replaceAll("http://127.0.0.1:3000/CsongsC"," ")}</div>
                        <div>Abhishek Yadav</div>
                     </div>
                     <div class="playnow">
                        <span>PlayNow</span>
                        <img class="invert" height="30px" src="play.png" alt=""> 
        
        
        </li>`;
    }
    //attach an event listener to each song
   Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click",element =>{
   
    playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
   })
   })


//attach an event listener to play previous 
play.addEventListener("click",()=>{
    if (currentSong .paused){
        currentSong.play()
        play.scr = "pause.svg"
   
    }
    else{
        currentSong.pause()
        play.scr = "pause.svg"
    }
})

}
main()
