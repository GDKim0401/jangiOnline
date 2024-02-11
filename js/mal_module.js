let SELECTED = [];
let UNITS = {
    blue:{},
    red:{}
};


/*
    유닛 객체
*/
class JANG{
    constructor(){
        this.name = 'JANG';
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 80;
        this.height = 80;
        this.color;
    }
    
    setUnit(team){
        this.team = team;
        if(team === 'blue'){this.init_position = [400,110];}
        else if(team === 'red'){this.init_position = [400,770];}

        this.current = this.init_position;
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}


class CHA{
    constructor(){
        this.name = 'CHA';
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 60;
        this.height = 60;
        this.color;
    }
    
    setUnit(team,up){
        this.team = team;
        if(team === 'blue' && up === 'L'){this.init_position = [0,0];}
        else if(team === 'blue' && up === 'R'){this.init_position = [800,0];}
        else if(team === 'red' && up === 'L'){this.init_position = [0,880];}
        else if(team === 'red' && up === 'R'){this.init_position = [800,880];}

        this.current = this.init_position;
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}


class PO{
    constructor(){
        this.name = 'PO';
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 60;
        this.height = 60;
        this.color;
        // this.team=='blue'?this.color = 'rgba(0,0,255,1)':this.color = 'rgba(255,0,0,1)';
    }
            
    setUnit(team,up){
        this.team = team;
        if(team === 'blue' && up === 'L'){this.init_position = [100,220];}
        else if(team === 'blue' && up === 'R'){this.init_position = [700,220];}
        else if(team === 'red' && up === 'L'){this.init_position = [100,660];}
        else if(team === 'red' && up === 'R'){this.init_position = [700,660];}

        this.current = this.init_position;
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}


class JOL{
    constructor(){
        this.name = 'JOL';
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 45;
        this.height = 45;
        this.color;
        // this.team=='blue'?this.color = 'rgba(0,0,255,1)':this.color = 'rgba(255,0,0,1)';
    }
            
    setUnit(team,up){
        this.team = team;
        if(team === 'blue' && up === '1'){this.init_position = [0,330];}
        else if(team === 'blue' && up === '2'){this.init_position = [200,330];}
        else if(team === 'blue' && up === '3'){this.init_position = [400,330];}
        else if(team === 'blue' && up === '4'){this.init_position = [600,330];}
        else if(team === 'blue' && up === '5'){this.init_position = [800,330];}
        else if(team === 'red' && up === '1'){this.init_position = [0,550];}
        else if(team === 'red' && up === '2'){this.init_position = [200,550];}
        else if(team === 'red' && up === '3'){this.init_position = [400,550];}
        else if(team === 'red' && up === '4'){this.init_position = [600,550];}
        else if(team === 'red' && up === '5'){this.init_position = [800,550];}
        
        this.current = this.init_position;
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}


class MA{
    constructor(){
        this.name = 'MA';
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 60;
        this.height = 60;
        this.color;
        // this.team=='blue'?this.color = 'rgba(0,0,255,1)':this.color = 'rgba(255,0,0,1)';
    }
            
    setUnit(team,up,up2){
        this.team = team;
        if(team === 'blue' && up === 'L' && up2 === 'L'){this.init_position = [100,0];}
        else if(team === 'blue' && up === 'L' && up2 === 'R'){this.init_position = [200,0];}
        else if(team === 'blue' && up === 'R' && up2 === 'L'){this.init_position = [600,0];}
        else if(team === 'blue' && up === 'R' && up2 === 'R'){this.init_position = [700,0];}
        else if(team === 'red' && up === 'L' && up2 === 'L'){this.init_position = [100,880];}
        else if(team === 'red' && up === 'L' && up2 === 'R'){this.init_position = [200,880];}
        else if(team === 'red' && up === 'R' && up2 === 'L'){this.init_position = [600,880];}
        else if(team === 'red' && up === 'R' && up2 === 'R'){this.init_position = [700,880];}
        
        this.current = this.init_position;
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}


class SANG{
    constructor(){
        this.name = 'SANG';
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 60;
        this.height = 60;
        this.color;
        // this.team=='blue'?this.color = 'rgba(0,0,255,1)':this.color = 'rgba(255,0,0,1)';
    }
            
    setUnit(team,up,up2){
        this.team = team;
        if(team === 'blue' && up === 'L' && up2 === 'L'){this.init_position = [100,0];}
        else if(team === 'blue' && up === 'L' && up2 === 'R'){this.init_position = [200,0];}
        else if(team === 'blue' && up === 'R' && up2 === 'L'){this.init_position = [600,0];}
        else if(team === 'blue' && up === 'R' && up2 === 'R'){this.init_position = [700,0];}
        else if(team === 'red' && up === 'L' && up2 === 'L'){this.init_position = [100,880];}
        else if(team === 'red' && up === 'L' && up2 === 'R'){this.init_position = [200,880];}
        else if(team === 'red' && up === 'R' && up2 === 'L'){this.init_position = [600,880];}
        else if(team === 'red' && up === 'R' && up2 === 'R'){this.init_position = [700,880];}
        
        this.current = this.init_position;
        let unitDiv = document.createElement('div');
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}

class SA{
    constructor(){
        this.name = 'SA';
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 45;
        this.height = 45;
        this.color;
        // this.team=='blue'?this.color = 'rgba(0,0,255,1)':this.color = 'rgba(255,0,0,1)';
    }
            
    setUnit(team,up,up2){
        this.team = team;
        if(team === 'blue' && up === 'L'){this.init_position = [300,0];}
        else if(team === 'blue' && up === 'R'){this.init_position = [500,0];}
        else if(team === 'red' && up === 'L'){this.init_position = [300,880];}
        else if(team === 'red' && up === 'R'){this.init_position = [500,880];}
        
        this.current = this.init_position;
        let unitDiv = document.createElement('div');
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}


/*
    유닛 셋팅 함수
*/

const set_style=(_this)=>{
    let unitDiv = document.createElement('div');
    unitDiv.style.background = "url('img/"+_this.team+"_"+_this.name+".PNG') no-repeat"; 
    unitDiv.style.backgroundSize = "cover";
    unitDiv.dataset.team = _this.team;
    unitDiv.dataset.name = _this.name;
    unitDiv.id = _this.team+'-'+_this.name;
    unitDiv.className = 'units'
    unitDiv.style.position = 'absolute';
    unitDiv.style.background = _this.color;
    unitDiv.style.width = _this.width+'px';
    unitDiv.style.height = _this.height+'px';
    unitDiv.style.top = (_this.init_position[1]-(_this.height/2))+'px';
    unitDiv.style.left = (_this.init_position[0]-(_this.width/2))+'px';
    unitDiv.style.borderRadius = '50px';
    return unitDiv;
}



/*
    유닛 경로 함수
*/

/*
    유닛 이동 함수
*/
const move=(_target)=>{
    if(SELECTED.length > 0){
        console.log("선택된 유닛 있음")
        let s_unit = SELECTED[0];
        s_unit['tag'].style.left = (_target.dataset.x-(s_unit.unit.width/2))+'px';
        s_unit['tag'].style.top = (_target.dataset.y-(s_unit.unit.height/2))+'px';
        selected(s_unit['unit'],s_unit['tag'])
    }
}
/*
    유닛 선택 함수
*/
const selected = (_unit,_tag) =>{
    if (_unit.selected) {
        //이동취소 or 완료 유닛
        _unit.selected = false;
        _tag.style.border = 'none';
        SELECTED = [];
    }else{
        //이동준비중인 유닛
        _unit.selected = true;
        _tag.style.border = '3px solid #424242';
        SELECTED.push({unit : _unit, tag : _tag});
        move();

    }
}

/*
    유닛 상태 함수
*/
const attach=(unit,moveTO)=>{
    

}


/*
    게임 리셋
*/
const reset=()=>{
    SELECTED = [];
    UNITS = {
        blue:{},
        red:{}
    };
    var units = Array.prototype.slice.call(document.getElementsByClassName('units'), 0);
    for(let i = 0; i < units.length; i++){units[i].remove();};
    init();
}