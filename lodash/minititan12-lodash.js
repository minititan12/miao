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

        for(let i = 0; i < all.length; i++){
            let val = all[i];
            if(check[val] > 1){
                result.push(val);
                check[val] = 1;
            }
        }

        return result;
    }

    //将array中的所有元素转换为由separator分隔的字符串
    function join(ary = [],separator = ","){
        let result = [];
        for(let i = 0; i < ary.length; i++){
            if(i == ary.length - 1){
                result = result + ary[i];
            }else{
                result = result  + ary[i] + separator;
            }
        }
        return result;
    }

    //获取array中的最后一个元素
    function last(ary = []){
        return ary[ary.length -1];
    }

    //获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素
    function nth(ary = [], n = 0){
        let len = ary.length;
        if(n < 0){
            n = len + n;
        }
        for(let i = 0; i < len; i++){
            if(i == n){
                return ary[i];
            }
        }
        return undefined;
    }

    //移除数组array中所有和给定值相等的元素，使用全等比较
    function pull(ary = [],...values){
        let value = [].concat(...values);
        return ary.filter(function(item){
            return value.indexOf(item) == -1;
        })
    }
    // function pull(ary = [],...values){
    //     let value = [].concat(values);
    //     for(let i = 0; i < value.length; i++){
    //         for(let j = 0; j < ary.length; j++){
    //             if(ary[j] === value[i]){
    //                 del(ary,j);
    //                 j--;
    //             }
    //         }
    //     }
    //     return ary;
    //     function del(ary, n){
    //         for(let i = 0; i < ary.length; i++){
    //             if(i >= n){
    //                 ary[i] = ary[i + 1];
    //             }
    //         }
    //         ary.pop();
    //         return ary;
    //     }
    // }

    //翻转数组
    function reverse(ary = []){
        let len = ary.length;
        for(let i = len - 1; i >= 0; i--){
            ary.push(ary[i]);
        }

        for(let i = 0; i < len; i++){
            ary.shift();
        }
        return ary;
    }

    //裁剪数组，从start开始到end结束，但不包括end本身的位置
    function slice(ary = [],start = 0, end = ary.length){
        let result = [];
        for(let i = start; i < end; i++){
            result.push(ary[i]);
        }
        return result;
    }

    //获取除了array数组第一个元素以外的全部元素
    function tail(ary = []){
        let result = [];
        for(let i = 1; i < ary.length; i++){
            result.push(ary[i]);
        }
        return result;
    }

    //创建一个数组切片,从array数组的起始元素开始提取n个元素
    function take(ary = [],n = 1){
        let result = [];
        for(let i = 0; i < n; i++){
            result.push(ary[i]);
        }
        return result;
    }

    //创建一个数组切片，从array数组的最后一个元素开始提取n个元素
    function takeRight(ary = [],n = 1){
        let result = [];
        let len = ary.length;
        if(n > len){
            n = len;
        }
        for(let i = len - n; i < len; i++){
            result.push(ary[i]);
        }
        return result;
    }

    //创建一个按顺序排列的唯一值的数组(所有给定数组的并集)
    function union(...ary){
        let all = [].concat(...ary);
        let result = all.filter(function(item,index){
            let check = all.indexOf(item);
            return check == index ? true : false;
        })
        return result;
    }
    // function union(...ary){
    //     let result = [];
    //     let all = [].concat(...ary);
    //     let check = {};

    //     for(let i = 0; i < all.length; i++){
    //         let val = all[i];
    //         if(val in check){
    //             check[val]++;
    //         }else{
    //             check[val] = 1;
    //         }
    //     }

    //     for(let i = 0; i < all.length; i++){
    //         let val = all[i];
    //         if(check[val]>=1){
    //             result.push(val);
    //             check[val] = 0;
    //         }
    //     }
    //     return result;
    // }

    //创建一个去重后的array数组副本
    function uniq(ary = []){
        let result = ary.filter(function(item,index){
            let check = ary.indexOf(item);
            return check == index ? true : false;
        })
        return result;
    }
    // function uniq(ary = []){
    //     let len = ary.length;
    //     let check = {};
    //     let result = [];
    //     for(let i = 0; i < len; i++){
    //         let val = ary[i];
    //         if(val in check){
    //             check[val]++;
    //         }else{
    //             check[val] = 1;
    //         }
    //     }

    //     for(let i = 0; i < len; i++){
    //         let val = ary[i];
    //         if(check[val] == 1){
    //             result.push(val);
    //         }else if(check[val] > 1){
    //             result.push(val);
    //             check[val] = 0;
    //         }
    //     }

    //     return result;
    // }

    //创建一个剔除所有给定值的新数组，剔除时用全等
    function without(ary = [],...values){
        let value = [].concat(...values);
        let result = ary.filter(function(item){
            return value.indexOf(item) == -1;
        })
        return result;
    }

    //创建一个给定数组唯一值的数组,返回值的顺序取决于他们数组的出现顺序
    function xor(...ary){
        let result = [];
        let len = arguments.length;
        for(let i = 0; i < len; i++){
            result.push(arguments[i][i]);
        }
        return result;
    }

    //创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素,依次类推
    function zip(...ary){
        let len = arguments.length;
        let result = [];
        let max = 0;

        for(let i = 0; i < len; i++){
            let l = arguments[i].length;
            if(l > max){
                max = l;
            }
        }

        for(let i = 0; i < max; i++){
            let pick = [];
            for(let j = 0; j < len; j++){
                let val = arguments[j][i];
                if(val){
                    pick.push(val);
                }
            }
            result.push(pick);
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
        initial: initial,
        intersection: intersection,
        join: join,
        last: last,
        nth: nth,
        pull: pull,
        reverse: reverse,
        slice: slice,
        tail: tail,
        take: take,
        takeRight: takeRight,
        union: union,
        uniq: uniq,
        without: without,
        xor: xor,
        zip: zip,
    }
}()