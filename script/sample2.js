/*
红绿灯的时间不应该是一样的,黄灯是切换灯,间隔暂定为1秒,红灯定为5秒,绿灯定为3秒
 */

class TrafficLight{
    constructor(stop=5,pass=3,wait=1,traffic="traffic",time="time"){
        this.stop_dur = stop;
        this.pass_dur = pass;
        this.wait_dur = wait;
        this.light = document.getElementById(traffic);
        this.dur_box = document.getElementById(time);

        this.timeout_id = 0;
        this.curStat = "";
        this.index = 0;
        this.stop_stat = "stop";
        this.pass_stat = "pass";
        this.wait_stat = "wait";
    }

    get running(){
        return this.timeout_id>0;
    }

    run(){
        if(this.running){
            console.warn("traffic light is runing")
            return;
        }

        this.turnRed();
    }

    stop(){
        clearTimeout(this.timeout_id);
        this.timeout_id = 0;
        this.curStat = 0;
    }

    turnRed(){
        this.light.className = "wait";
        this.timeout_id = setTimeout(()=>{
            this.light.className = "stop";
            this.timeout_id = setTimeout(()=>{
                this.turnGreen();
            },this.stop_dur);
        },this.wait_dur);
    }

    turnGreen(){
        this.light.className = "wait";
        this.timeout_id = setTimeout(()=>{
            this.light.className = "pass";
            this.timeout_id = setTimeout(()=>{
                this.turnRed();
            },this.pass_dur);
        },this.wait_dur);
    }

}

export {TrafficLight};


