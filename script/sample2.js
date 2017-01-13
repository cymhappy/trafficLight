/*
红绿灯的持续时间可配置
红绿灯的时间不应该是一样的,黄灯是切换灯,间隔暂定为1秒,红灯定为5秒,绿灯定为3秒
 */

class TrafficLight{
    constructor(stop=5000,pass=3000,wait=1000,traffic="traffic",time="time"){
        this.stop_dur = stop;
        this.pass_dur = pass;
        this.wait_dur = wait;
        this.light = document.getElementById(traffic);
        this.dur_box = document.getElementById(time);

        this.timeout_id = 0;
        this._curStat = "";
        this.stop_stat = "stop";
        this.pass_stat = "pass";
        this.wait_stat = "wait";
    }

    get running(){
        return this.timeout_id>0;
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
            console.warn("traffic light is runing");
            return;
        }

        this.switchLihgt();
    }

    switchLihgt(){
        this.light.className = this.stop_stat;
        this.curStat = this.stop_stat;
        //红
        this.timeout_id = setTimeout(()=>{
            this.light.className = this.wait_stat;
            this.curStat = this.wait_stat;
            //黄
            this.timeout_id = setTimeout(()=>{
                this.light.className = this.pass_stat;
                this.curStat = this.pass_stat;
                //绿
                this.timeout_id = setTimeout(()=>{
                    this.light.className = this.wait_stat;
                    this.curStat = this.wait_stat;
                    //黄
                    this.timeout_id = setTimeout(()=>{
                        this.switchLihgt();
                    },this.wait_dur);
                },this.pass_dur);
            },this.wait_dur);
        },this.stop_dur);
    }





    stop(){
        clearTimeout(this.timeout_id);
        this.timeout_id = 0;
        this.curStat = 0;
    }

}

export {TrafficLight};


