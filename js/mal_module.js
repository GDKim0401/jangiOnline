let bgm = new Audio();
let SELECTED = [];
let UNITS = {
    blue:{},
    red:{}
};
let SOUNDS = {
    bgm : {
        src:"./sound/TerranBGM.mp3"
    },
    move : {
        src:"./sound/move.mp3"
    },
    attack : {
        src:"./sound/unitclick.mp3"
    },
    click: {
        src:"./sound/click.mp3"
    },
    play:function(type,audio){
        audio.src = this[type].src;
        console.log(audio)
        audio.play();
    }
}

/*
    게임 시작
*/
const start=()=>{   
    SOUNDS.play('bgm',bgm);
    init();
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
    SOUNDS.play('bgm',bgm);
    removeDivByClass('units');
    removeDivByClass('apoint');
    init();
}



/*
    유닛 셋팅 함수
*/

const set_style=(_this)=>{
    let unitDiv = document.createElement('div');
    unitDiv.style.background = "url('img/"+_this.team+"_"+_this.name+".PNG') no-repeat"; 
    unitDiv.style.backgroundSize = "contain";
    unitDiv.style.backgroundPosition = "center";
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
    // unitDiv.style.borderRadius = '10px';
    return unitDiv;
}



/*
    유닛 경로 함수
*/
const calculMovePosition=()=>{//유닛이동범위계산
    console.log("현재위치 >> "+getUnitPosition());
    console.log(getUnit())
    let currentPosition = getUnitPosition();
    let accessZonePs=[];
    let unit = getUnit();
    let X_min = 0;
    let X_max = 8;
    let Y_min = 0;
    let Y_max = 8;
    let DIRECTION = getUnit().DIRECTION;
    
    // console.log(" ---- 이동 가능한 지역 ---- ");
    for (let d = 0; d < DIRECTION.length; d++) {
        //console.log(DIRECTION[d][0] + ', ' +DIRECTION[d][1])
        let d_x = currentPosition[0]+(DIRECTION[d][0]*100);
        let d_y = currentPosition[1]+(DIRECTION[d][1]*100);
        //if(DIRECTION[d][0]<X_min || DIRECTION[d][0]>X_max){continue;};
        if(currentPosition[0] == d_x && currentPosition[1] == d_y){continue;};//같은위치는 표시하지 않는다.
        accessZonePs.push([currentPosition[0]+(DIRECTION[d][0]*100),currentPosition[1]+(DIRECTION[d][1]*100)]);
        makeAccessPoint(currentPosition[0]+(DIRECTION[d][0]*100),currentPosition[1]+(DIRECTION[d][1]*100));
       // console.log(currentPosition[0]+(DIRECTION[d][0]*100), ' ::' , currentPosition[1]+(DIRECTION[d][1]*100))
    }
    console.log(" ---- 이동 가능한 지역 >" ,accessZonePs);

}


/*
    유닛 이동 함수
*/
const move=(_target)=>{
    console.log(Math.floor(_target.dataset.x/100) + " / " + Math.floor(_target.dataset.y/100))
    if(SELECTED.length > 0){
        console.log("선택된 유닛 있음")
       // SOUNDS.play('attack',bgm);
        let s_unit = SELECTED[0];
        s_unit['tag'].style.left = (_target.dataset.x-(s_unit.unit.width/2))+'px';
        s_unit['tag'].style.top = (_target.dataset.y-(s_unit.unit.height/2))+'px';
        getUnit().current = [Number(_target.dataset.x),Number(_target.dataset.y)];
        removeDivByClass('apoint');//이동할때마다 이동가능 포인트요소 지워주기
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
        calculMovePosition();
    }
}

/*
    유닛 상태 함수
*/
const attach=(unit,moveTO)=>{
    
}
const getUnitPosition=()=>{
    return [Math.floor(SELECTED[0].unit.current[0]),Math.floor(SELECTED[0].unit.current[1])];
}
const getUnit=()=>{
    return SELECTED[0]['unit'];
}

const removeDivByClass=(_className)=>{
    var units = Array.prototype.slice.call(document.getElementsByClassName(_className), 0);
    for(let i = 0; i < units.length; i++){units[i].remove();};
}

//이동가능한 지역 포인트 
const makeAccessPoint=(x,y)=>{
    let WIDTH = 50;
    let HEIGHT = 50;
    let pointDiv = document.createElement('div');
    pointDiv.className = 'apoint';
    pointDiv.style.position = 'absolute';
    pointDiv.style.background = 'red';
    pointDiv.style.width = WIDTH+'px';
    pointDiv.style.height = HEIGHT+'px';
    pointDiv.style.top = (y-(HEIGHT/2))+'px';
    pointDiv.style.left = (x-(WIDTH/2))+'px';
    document.getElementById('content').appendChild(pointDiv);
}




