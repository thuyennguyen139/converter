var enterNumber = document.getElementById("enterNumber");
var dataFrom = document.getElementById("data-from");
var dataTo = document.getElementById("data-to");
var dataResult = document.getElementById("data-result");


console.log(dataResult.value);

function reset(){
    enterNumber.value = "";
    dataFrom.value ="2";
    dataResult.value = "";
    dataTo.value ="2";
}

function convert(){
    if(dataFrom.value == dataTo.value){
        var res = enterNumber.value;
        if(dataFrom.value == 2){
            if(!checkBi(res)){
                dataResult.value = "Please check input";
                return;
            }
        }

        if(dataFrom.value == 10){
            if(!checkDe(res)){
                dataResult.value = "Please check input";
                return;
            }
        }
        if(dataFrom.value == 16){
            if(!checkHe(res)){
                dataResult.value = "Please check input";
                return;
            }
        }


        dataResult.value = enterNumber.value;
        return;
    }
    if(dataTo.value == 10){
        var res = enterNumber.value;
        if(dataFrom.value == 2){
            dataResult.value = converBitoDe(res);
            return;
        }else{
            dataResult.value = converHetoDe(res);
            return;
        }

    }
    if(dataFrom.value == 10){
        var res = enterNumber.value;
        if(!checkDe(res)){
            dataResult.value = "Please check input";
            return;
        }
        if(dataTo.value == 2){
            dataResult.value = converDetoBi(res);
            return;
        }else{
            dataResult.value = converDetoHe(res);
            return;
        }
    }

    if(dataFrom.value == 2){
        var res = enterNumber.value;
        if(!checkBi(res)){
            dataResult.value = "Please check input";
            return;
        }
        
        var pas = converBitoDe(res);
        dataResult.value = converDetoHe(pas);
        return;
    }

    
    if(dataFrom.value == 16){
        var res = enterNumber.value;
        if(!checkHe(res)){
            dataResult.value = "Please check input";
            return;
        }
        var pas = converHetoDe(res);
        dataResult.value = converDetoBi(pas);
        return;
    }
}

function swap(){
    var a = dataFrom.value;
    dataFrom.value = dataTo.value;
    dataTo.value = a;
    dataResult.value="";
}

function converDetoBi(s){
    var res = Number(s).toString(2);
    return res;
}

function converDetoHe(s){
    var res = Number(s).toString(16);
    return res;
}

function converBitoDe(s){
    var res = parseInt(s, 2);
    return res;
}

function converHetoDe(s){
    var res = parseInt(s, 16);
    return res;
}

function checkBi(s){
    var len = s.length;
    for(let i = 0; i < len ; i++){
        if(s[i] != '0' && s[i] != '1'){
            return false;
        }
    }
    return true;
}

function checkDe(s){
    var len = s.length;
    for(let i = 0; i < len ; i++){
        if(s[i] < '0' || s[i] > '9'){
            
            return false;
        }
    }
    return true;
}

function checkDe(s){
    var len = s.length;
    for(let i = 0; i < len ; i++){
        if(s[i] < '0' || s[i] > '9'){
            return false;
        }
    }
    return true;
}

function checkHe(s){
    var len = s.length;
    for(let i = 0; i < len ; i++){
        if( s[i] < '0' || ( s[i] > 'F' && s[i]< 'a' )|| s[i] > 'f' ){
            return false;
        }
    }
    return true;
}






