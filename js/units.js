
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
        this.accessZonePs = [];//이동가능한지역
        
        //MOVE
        this.DIRECTION = [];
    }
    
    setUnit(team){
        this.team = team;
        if(team === 'blue'){this.init_position = [4,1];}
        else if(team === 'red'){this.init_position = [4,7];}
        this.team === 'blue' ? this.DIRECTION.push([3,0],[3,1],[3,2],[4,0],[4,1],[4,2],[5,0],[5,1],[5,2]) : this.DIRECTION.push([3,6],[3,7],[3,8],[4,6],[4,7],[4,8],[5,6],[5,7],[5,8]);

        this.current = this.init_position;
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }

    move(){

    }
}


class CHA{
    constructor(){
        this.name;
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 60;
        this.height = 60;
        this.color;
        this.accessZonePs = [];//이동가능한지역
        
        //MOVE
        this.DIRECTION = [];
    }
    
    setUnit(team,up){
        this.name = 'CHA'+up;
        this.team = team;
        if(team === 'blue' && up === 'L'){this.init_position = [0,0];}
        else if(team === 'blue' && up === 'R'){this.init_position = [8,0];}
        else if(team === 'red' && up === 'L'){this.init_position = [0,8];}
        else if(team === 'red' && up === 'R'){this.init_position = [8,8];}

        this.DIRECTION.push([-1,0],[1,0],[0,-1],[0,1]);
        this.current = this.init_position;
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}


class PO{
    constructor(){
        this.name;
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 60;
        this.height = 60;
        this.color;
        this.accessZonePs;//이동가능한지역
        // this.team=='blue'?this.color = 'rgba(0,0,255,1)':this.color = 'rgba(255,0,0,1)';
    }
            
    setUnit(team,up){
        this.name = 'PO'+up;
        this.team = team;
        if(team === 'blue' && up === 'L'){this.init_position = [1,2];}
        else if(team === 'blue' && up === 'R'){this.init_position = [7,2];}
        else if(team === 'red' && up === 'L'){this.init_position = [1,6];}
        else if(team === 'red' && up === 'R'){this.init_position = [7,6];}

        this.current = this.init_position;
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}


class JOL{
    constructor(){
        this.name;
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 45;
        this.height = 45;
        this.color;
        this.accessZonePs = [];//이동가능한지역
        //MOVE
        this.DIRECTION = [];
    }
            
    setUnit(team,up){
        this.name = 'JOL'+up;
        this.team = team;
        if(team === 'blue' && up === '1'){this.init_position = [0,3];}
        else if(team === 'blue' && up === '2'){this.init_position = [2,3];}
        else if(team === 'blue' && up === '3'){this.init_position = [4,3];}
        else if(team === 'blue' && up === '4'){this.init_position = [6,3];}
        else if(team === 'blue' && up === '5'){this.init_position = [8,3];}
        else if(team === 'red' && up === '1'){this.init_position = [0,5];}
        else if(team === 'red' && up === '2'){this.init_position = [2,5];}
        else if(team === 'red' && up === '3'){this.init_position = [4,5];}
        else if(team === 'red' && up === '4'){this.init_position = [6,5];}
        else if(team === 'red' && up === '5'){this.init_position = [8,5];}
        
        this.team === 'blue' ? this.DIRECTION.push([0,1]) : this.DIRECTION.push([0,-1]);
        this.DIRECTION.push([0,0]);//뒤로는 못감
        this.DIRECTION.push([-1,0]);
        this.DIRECTION.push([+1,0]);
        
        this.current = this.init_position;
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }

}


class MA{
    constructor(){
        this.name;
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 60;
        this.height = 60;
        this.color;
        this.accessZonePs = [];//이동가능한지역
        //MOVE
        this.DIRECTION = [];
        this.MOVE = {
            U:[
                [[0,-1],[-1,-1]],
                [[0,-1],[1,-1]],
            ],
            R:[
                [[1,0],[1,-1]],
                [[1,0],[1,1]]
            ],
            D:[
                [[0,1],[-1,1]],
                [[0,1],[1,1]]
            ],
            L:[
                [[-1,0],[-1,-1]],
                [[-1,0],[-1,1]]
            ]
        }
    }
            
    setUnit(team,up,up2){
        this.name = 'MA'+up;
        this.team = team;
        if(team === 'blue' && up === 'L' && up2 === 'L'){this.init_position = [1,0];}
        else if(team === 'blue' && up === 'L' && up2 === 'R'){this.init_position = [2,0];}
        else if(team === 'blue' && up === 'R' && up2 === 'L'){this.init_position = [6,0];}
        else if(team === 'blue' && up === 'R' && up2 === 'R'){this.init_position = [7,0];}
        else if(team === 'red' && up === 'L' && up2 === 'L'){this.init_position = [1,8];}
        else if(team === 'red' && up === 'L' && up2 === 'R'){this.init_position = [2,8];}
        else if(team === 'red' && up === 'R' && up2 === 'L'){this.init_position = [6,8];}
        else if(team === 'red' && up === 'R' && up2 === 'R'){this.init_position = [7,8];}

        this.DIRECTION.push([-2,-1],[-2,1],[2,-1],[2,1],[-1,-2],[1,-2],[-1,2],[1,2]);

        this.current = this.init_position;
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}


class SANG{
    constructor(){
        this.name;
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 60;
        this.height = 60;
        this.color;

        this.accessZonePs = [];//이동가능한지역
        //MOVE
        this.DIRECTION = [];
    }
            
    setUnit(team,up,up2){
        this.name = 'SANG'+up;
        this.team = team;
        if(team === 'blue' && up === 'L' && up2 === 'L'){this.init_position = [1,0];}
        else if(team === 'blue' && up === 'L' && up2 === 'R'){this.init_position = [2,0];}
        else if(team === 'blue' && up === 'R' && up2 === 'L'){this.init_position = [6,0];}
        else if(team === 'blue' && up === 'R' && up2 === 'R'){this.init_position = [7,0];}
        else if(team === 'red' && up === 'L' && up2 === 'L'){this.init_position = [1,8];}
        else if(team === 'red' && up === 'L' && up2 === 'R'){this.init_position = [2,8];}
        else if(team === 'red' && up === 'R' && up2 === 'L'){this.init_position = [6,8];}
        else if(team === 'red' && up === 'R' && up2 === 'R'){this.init_position = [7,8];}
        
        this.DIRECTION.push([-3,-2],[-3,2],[3,-2],[3,2],[-2,-3],[2,-3],[-2,3],[2,3]);
        this.current = this.init_position;
        let unitDiv = document.createElement('div');
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}

class SA{
    constructor(){
        this.name;
        this.selected = false;
        this.team;
        this.init_position;
        this.current;//현재위치
        this.prev;//이전위치
        this.width = 45;
        this.height = 45;
        this.color;
        this.accessZonePs = [];//이동가능한지역

        //MOVE
        this.DIRECTION = [];
        // this.team=='blue'?this.color = 'rgba(0,0,255,1)':this.color = 'rgba(255,0,0,1)';
    }
            
    setUnit(team,up){
        this.name = 'SA'+up;
        this.team = team;
        if(team === 'blue' && up === 'L'){this.init_position = [3,0];}
        else if(team === 'blue' && up === 'R'){this.init_position = [5,0];}
        else if(team === 'red' && up === 'L'){this.init_position = [3,8];}
        else if(team === 'red' && up === 'R'){this.init_position = [5,8];}
        this.team === 'blue' ? this.DIRECTION.push([3,0],[3,1],[3,2],[4,0],[4,1],[4,2],[5,0],[5,1],[5,2]) : this.DIRECTION.push([3,6],[3,7],[3,8],[4,6],[4,7],[4,8],[5,6],[5,7],[5,8]);

        this.current = this.init_position;
        let unitDiv = document.createElement('div');
        document.getElementById('content').appendChild(set_style(this));
        UNITS[this.team][this.name] = this;
    }
}