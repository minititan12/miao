var minititan12 = function(){

    //将数组拆分为多个size的区块,最后不够size的自成一个区块
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

    //创建一个新数组,包含原数组中的非假值的元素
    function compact(ary){
        let result = [];
        for(let val of ary){
            if(val){
                result.push(val);
            }
        }
        return result;
    }

    //创建一个新数组，将array与任何数组 或 值连接在一起
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

    //对比array和values组成的数组,返回一个array中和values不同的元素组成的数组
    function difference(array,...values){
        let result = [];
        let check = [].concat(...values);       //把所有的value值合并为一个数组

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

    //返回一个从左开始切掉n个元素的数组
    function drop(ary = [],n =1){
        let result = [];
        let count = n;

        for(i = count; i < ary.length; i++){
            result.push(ary[i]);
        }

        return result;
    }

    //返回一个从右开始切掉n个元素的数组
    function dropRight(ary = [],n = 1){
        let result = [];
        let count = n;

        for(i = 0; i < ary.length-count; i++){
            result.push(ary[i]);
        }
        return result;
    }

    //使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）
    //会改变ary
    function fill(ary = [],value,start = 0,end = ary.length){
        if(arguments.length == 1){
            return ary;
        }
        if(start < 0){
            start = 0;
        }
        if(end > ary.length){
            end = ary.length;
        }
        for(i = start; i < end; i++){
            ary[i] = value;
        }

        return ary;
    }

    //减少一级数组嵌套深度
    function flatten(ary = []){
        let result = [];
        for(let val of ary){
            if(Array.isArray(val)){
                for(let v of val){
                    result.push(v);
                }
            }else {
                result.push(val);
            }
        }
        return result;
    }

    //把数组递归为一维数组
    function flattenDeep(ary = []){
        let result = [];

        let check = function deep(ary1){
            for( let val of ary1){
                if(Array.isArray(val)){
                    deep(val);
                }else{
                    result.push(val);
                }
            }
        }(ary);

        return result;
    }

    //获取数组ary的第一个元素
    function head(ary = []){
        return ary[0];
    }

    //返回首次 value 在数组array中被找到的索引值
    function indexOf(ary = [],value,fromIndex = 0){
        fromIndex < 0 ? 0 : fromIndex;

        for(let i = fromIndex; i < ary.length; i++){
            if(ary[i] == value){
                return i;
            }
        }

        return -1;
    }

    //获取数组array中除了最后一个元素之外的所有元素
    function initial(ary = []){
        ary.pop();
        return ary;
    }

    //返回给定数组的交集
    function intersection(...ary){
        let check = {};
        let all = [].concat(...ary);
        let result = [];
        for(let i = 0; i < all.length; i++){
            let val = all[i];
            if(val in check){
                check[val] += 1;
            }else{
                check[val] = 1;
            }
        }

        for(let val in check){
            if(check[val] >= arguments.length){
                result.push(+val);
            }
        }

        return result;
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
        flatten: flatten,
        flattenDeep: flattenDeep,
        head: head,
        indexOf: indexOf,
        initial: initial
    }
}()