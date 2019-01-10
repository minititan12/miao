var minititan12 = function(){

    function chunk(ary,size){

    }
    function compact(ary){
        var result = [];
        var len = ary.length;
        for(i = 0; i < len; i++){
            if(ary[i]){
                result.push(ary[i]);
            }
        }
        return result;
    }

    return {
        chunk:chunk,
        compact:compact,
    }
}()