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
        if(arguments.length == 0){
            return [];
        }

        let count = n||1;

        for(i = count; i > 0; i--){
            ary.shift();
            if(ary.length == 0){
                return ary;
            }
        }
        return ary;
    }

    function dropRight(ary,n){
        if(arguments.length == 0){
            return [];
        }

        let count = n||1;

        for(i = count; i > 0; i--){
            ary.pop();
            if(ary.length == 0){
                return ary;
            }
        }
        return ary;
    }

    return {
        chunk: chunk,
        compact: compact,
        concat: concat,
        difference: difference,
        differenceBy: differenceBy,
        drop: drop,
        dropRight: dropRight,
    }
}()