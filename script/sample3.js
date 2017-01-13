/**
 * Created by Keith on 2017/1/11.
 */
class TrafficLight {
    constructor(stop = 5000, pass = 3000, wait = 1000, traffic = "traffic", time = "time") {
        this.stop_dur = stop;
        this.pass_dur = pass;
        this.wait_dur = wait;
        this.light = document.getElementById(traffic);
        this.dur_box = document.getElementById(time);

        this.interval_id = 0;
        this._curStat = "";
        this.stop_stat = "stop";
        this.pass_stat = "pass";
        this.wait_stat = "wait";
    }
    get running(){
        return this.interval_id>0;
    }

    set curStat(v){
        this._curStat = v;
        console.log("红绿灯现在的状态为:"+v);
    }

    get curStat(){
        return this._curStat;
    }

    run(){
        if(this.running){
            console.log("红绿灯已经在运行了 !");
            return;
        }
        let tickNum = 0;
        this.interval_id = setInterval(()=>{
            tickNum++;
            
        },1000);
    }

}