let $ = document ;
const startbtn = $.getElementById("start");
const stopbtn = $.getElementById("stop");
const resetbtn = $.getElementById("reset");

class stopWatch{
   private duration : number ;
   private status : string ;
   private currentTime : number ;

    constructor(){
        this.duration = 0 ;
        this.status = "stopped";
    }
    public start(){
        if(this.status === "started"){
            throw new Error("already started .");
        }
        this.currentTime = Date.now();
        this.status = "started" ;
    }
    public stop(){
        if(this.status === "sttoped"){
            throw new Error("not is sttoped .");
        }
        this.duration = Date.now() - this.currentTime + this.duration;
        this.status = "stopped" ;
        console.log((this.duration / 1000).toFixed(2));
    }
    public reset(){
        if(this.status === "reset"){
            this.stop();
        }
        this.duration = 0 ;
    }
}
let timer = new stopWatch();
console.log(timer.start());
setTimeout(()=>{
     console.log(timer.stop());
},3000)

// startbtn?.addEventListener("click" , startHandaler());
// stopbtn?.addEventListener("click" , stopHandler());
// resetbtn?.addEventListener("click" , resetHandler());



