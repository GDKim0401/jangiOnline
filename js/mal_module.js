let SELECTED = [];
let UNITS = {
    blue:{

    },
    red:{

    }

};



/*
    유닛 객체
*/
class JANG{
    constructor(team){
        this.name = 'JANG';
        this.selected = false;
        this.team = team;
        this.team=='blue'?this.init_position = [400,110]:this.init_position = [400,770];
        this.current = '';//현재위치
        this.prev = '';//이전위치
        this.width = 70;
        this.height = 70;
    }
    
    setUnit(){
        this.current = this.init_position;
        let unitDiv = document.createElement('div');
        unitDiv.dataset.team = this.team;
        unitDiv.dataset.name = this.name;
        unitDiv.id = this.team+'-'+this.name;
        unitDiv.className = 'units'
        unitDiv.style.position = 'absolute';
        unitDiv.style.background = 'rgba(0,0,255,1)';
        unitDiv.style.width = this.width+'px';
        unitDiv.style.height = this.height+'px';
        unitDiv.style.top = (this.init_position[1]-(this.height/2))+'px';
        unitDiv.style.left = (this.init_position[0]-(this.width/2))+'px';
        unitDiv.style.borderRadius = '50px';
        document.getElementById('content').appendChild(unitDiv);
    }
}

// let unit = {
//     selected:'',
//     jang:{
//         team:'blue',//진영
//         initCorrd:[4,1],//최초위치
//         currentCoord:[0,0],//현재위치
//         prevCoord:[0,0],//이전위치
//         unitCreate:function(){
//         },
//         canmoveCoord:function(){
//             // todo
//             // 이동 탐색 알고리즘
//         }//이동 가능 위치(다중)
//     }
// }

/*
    유닛 셋팅 함수
*/

const fn_create_unit=()=>{



    //todo
}



/*
    유닛 경로 함수
*/

/*
    유닛 이동 함수
*/
const move=()=>{

}
/*
    유닛 선택 함수
*/
const selected = (_unit,_tag) =>{
    if (_unit.selected) {
        //이동취소 or 완료 유닛
        _unit.selected = false;
        _tag.style.background = 'rgba(0,0,255,1)';
        SELECTED = [];
    }else{
        //이동준비중인 유닛
        _unit.selected = true;
        _tag.style.background = 'rgba(0,255,0,0.6)';
        SELECTED.push({unit : _unit, tag : _tag});
    }
}

/*
    유닛 상태 함수
*/


/*
    draw 함수
*/
