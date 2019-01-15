var minititan12 = function(){

    function chunk(ary,size){
        if(arguments.length < 2){
            if(arguments.length == 1){
                return ary;
            }else{
                return [];
            }
        }
        let result = [];
        for(let i = 0; i < ary.length; i++){
            result.push(ary.slice(i,i+size));
            i = i + size - 1;
        }
        return result;
    }

    function compact(ary){
        let result = [];
        for(let val of ary){
            if(val){
                result.push(val);
            }
        }
        return result;
    }

    function concat(ary,...values){
        let result = [];
        for(let aryVal of ary){
            result.push(aryVal);
        }
        for(let val of values){
            if(Array.isArray(val)){
                for(let v of val){
                    result.push(v);
                }
            }else{
                result.push(val);
            }
        }
        return result;
    }

    function difference(array,...values){
        let result = [];
        let check = [].concat(...values);
        // for(let val of values){
        //     if(Array.isArray(val)){
        //         for(let v of val){
        //             check.push(v);
        //         }
        //     }else{
        //         check.push(val);
        //     }
        // }
        for(let aryVal of array){
            let diff = false;
            for(let c of check){
                if(aryVal == c){
                    diff = true;
                }
            }
            if(!diff){
                result.push(aryVal);
            }
        }
        return result;
    }

    function differenceBy(array,values,ite){
        let result = [];
        for(let aryVal of array){
            let diff = false;
            for(let c of values){
                if(ite(aryVal) == ite(c)){
                    diff = true;
                }
            }
            if(!diff){
                result.push(aryVal);
            }
        }
        return result;
    }

    function drop(ary,n){
        let result = [];

        if(arguments.length == 0){
            return [];
        }

        let count = n;
        if(arguments.length == 1){
            count = 1;
        }

        for(i = count; i < ary.length; i++){
            result.push(ary[i]);
        }

        return result;
    }

    function dropRight(ary,n){
        let result = [];
        
        if(arguments.length == 0){
            return [];
        }

        let count = n;
        if(arguments.length == 1){
            count = 1;
        }

        for(i = 0; i < ary.length-count; i++){
            result.push(ary[i]);
        }
        return result;
    }

    function fill(ary,value,){

    }

    return {
        chunk: chunk,
        compact: compact,
        concat: concat,
        difference: difference,
        differenceBy: differenceBy,
        drop: drop,
        dropRight: dropRight,
        fill: fill,
    }
}()