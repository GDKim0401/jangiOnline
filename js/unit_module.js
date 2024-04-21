let bgm = new Audio();
let SELECTED = [];
let MAP = {
    WIDTH : 800,
    HEIGHT : 800
}
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
        // audio.attribute = 'loop';
        console.log(audio)
        audio.play();
    }
}

/*
    게임 시작
*/
const start=()=>{   
   // SOUNDS.play('bgm',bgm);
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
    unitDiv.style.top = ((_this.init_position[1]*100)-(_this.height/2))+'px';
    unitDiv.style.left = ((_this.init_position[0]*100)-(_this.width/2))+'px';
    // unitDiv.style.borderRadius = '10px';
    return unitDiv;
}



/*
    유닛 경로 함수
*/
const calculMovePosition=()=>{//유닛이동범위계산
    console.log("현재위치 >> "+getUnitPosition());
    console.log(getUnit())
    let name = getUnit().name;
    let currentPosition = getUnitPosition();
    let unit = getUnit();
    let X_min = 0;
    let X_max = 800;
    let Y_min = 0;
    let Y_max = 800;
    let DIRECTION = getUnit().DIRECTION;

    //accessZonePs 초기화
    if(getUnit().accessZonePs.length > 0 ){getUnit().accessZonePs = [];}

    // console.log(" ---- 이동 가능한 지역 ---- ");
    for (let d = 0; d < DIRECTION.length; d++) {
        //console.log(DIRECTION[d][0] + ', ' +DIRECTION[d][1])
        let d_x = 0;
        let d_y = 0;
        if(name==='JANG' || name==='SAR' || name==='SAL'){
            //이동이 제한적인 유닛
            d_x = DIRECTION[d][0]*100;
            d_y = DIRECTION[d][1]*100;
            if((currentPosition[0]*100) == d_x && (currentPosition[1]*100) == d_y){continue;};//같은위치는 표시하지 않는다.
            if(d_x < X_min || d_x > X_max || d_y < Y_min || d_y > Y_max){
                console.log("갈수 없는 위치" +' [ ' , DIRECTION[d][0],',',DIRECTION[d][1],' ]')
            }else{
                getUnit().accessZonePs.push([d_x,d_y]);
            }
        }else if(name==='CHAL' || name==='CHAR'){
            for (let c = 0; c <= 8; c++) {m
                d_x = (currentPosition[0]*100)+(DIRECTION[d][0]*100*c);
                d_y = (currentPosition[1]*100)+(DIRECTION[d][1]*100*c);
                // console.log(' [ ' , d_x,',',d_y,' ]')
                if((currentPosition[0]*100) == d_x && (currentPosition[1]*100) == d_y){continue;};//같은위치는 표시하지 않는다.
                if(d_x < X_min || d_x > X_max || d_y < Y_min || d_y > Y_max){
                    console.log("갈수 없는 위치" +' [ ' , DIRECTION[d][0],',',DIRECTION[d][1],' ]')
                }else{
                    getUnit().accessZonePs.push([d_x,d_y]);
                }
            }
        }else{
            //이동이 자유로운 유닛
            d_x = (currentPosition[0]*100)+(DIRECTION[d][0]*100);
            d_y = (currentPosition[1]*100)+(DIRECTION[d][1]*100);
            if((currentPosition[0]*100) == d_x && (currentPosition[1]*100) == d_y){continue;};//같은위치는 표시하지 않는다.
            if(d_x < X_min || d_x > X_max || d_y < Y_min || d_y > Y_max){
                console.log("갈수 없는 위치" +' [ ' , DIRECTION[d][0],',',DIRECTION[d][1],' ]')
            }else{
                getUnit().accessZonePs.push([d_x,d_y]);
            }
        }

    }
    makeAccessPoint(getUnit().accessZonePs);
    console.log(" ---- 이동 가능한 지역 >" ,getUnit().accessZonePs);

}


const calculMovePosition_refect=()=>{//유닛이동범위계산
    console.log("현재위치 >> "+getUnitPosition());
    console.log(getUnit())
    let name = getUnit().name;
    let currentPosition = getUnitPosition();
    let unit = getUnit();
    let X_min = 0;
    let X_max = 800;
    let Y_min = 0;
    let Y_max = 800;
    let DIRECTION = getUnit().DIRECTION;
    let UNIT_MOVE_TEMP = getUnit().MOVE;


    for (let i = 0; i < UNIT_MOVE_TEMP['U'].length; i++) {
        let d_x = 0;
        let d_y = 0;
        console.log(UNIT_MOVE_TEMP['U'][i][0]);
        console.log(UNIT_MOVE_TEMP['U'][i][1]);
        d_x = (currentPosition[0]*100)+(UNIT_MOVE_TEMP['U'][i][0]*100);
        d_y = (currentPosition[1]*100)+(UNIT_MOVE_TEMP['U'][i][1]*100);
        console.log(d_x, " ," , d_y);
    }

    
}



/*
    유닛 이동 함수
    (이동 중 유닛 이동 가능 체크 필요)
*/
const move=(_target)=>{
    console.log(Math.floor(_target.dataset.x) + " / " + Math.floor(_target.dataset.y))
    if(SELECTED.length > 0){
        console.log("선택된 유닛 있음")
        //이동 가능한 지역이 아니면 return;
        let flag = getUnit().accessZonePs.filter((e)=>{if(e[0] == _target.dataset.x && e[1] == _target.dataset.y){return true;}})
        if(flag.length > 0){
            console.log("이동할수 있는 위치")
        }else{
            alert("이동할수 없는 위치 입니다.")
            return;
        }
       // SOUNDS.play('attack',bgm);
        let s_unit = SELECTED[0];
        s_unit['tag'].style.left = (_target.dataset.x-(s_unit.unit.width/2))+'px';
        s_unit['tag'].style.top = (_target.dataset.y-(s_unit.unit.height/2))+'px';
        getUnit().current = [Number(_target.dataset.x/100),Number(_target.dataset.y/100)];
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
        removeDivByClass('apoint');//이동할때마다 이동가능 포인트요소 지워주기
        SELECTED = [];
    }else{
        //이동준비중인 유닛
        _unit.selected = true;
        _tag.style.border = '3px solid #424242';
        SELECTED.push({unit : _unit, tag : _tag});
        calculMovePosition_refect();
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
const makeAccessPoint=(accessZonePs)=>{
    let WIDTH = 50;
    let HEIGHT = 50;
    for (let i = 0; i < accessZonePs.length; i++) {
        let pointDiv = document.createElement('div');
        pointDiv.className = 'apoint blz-button';
        pointDiv.style.position = 'absolute';
        pointDiv.style.background = 'rgba(126, 255, 85, 0.5)';
        pointDiv.style.borderRadius = '50px';
        pointDiv.style.width = WIDTH+'px';
        pointDiv.style.height = HEIGHT+'px';
        pointDiv.style.top = (accessZonePs[i][1]-(HEIGHT/2)+2)+'px';
        pointDiv.style.left = (accessZonePs[i][0]-(WIDTH/2)+2)+'px';
        document.getElementById('content').appendChild(pointDiv);
        
    }
}




