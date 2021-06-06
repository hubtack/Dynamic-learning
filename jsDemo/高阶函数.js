
/*
  * @describe:  高阶函数：函数作为返回值
  * @author BinJ
  * @date 2021-06-06 23:24:19
*/
function once(fn) {
    let done = false
    return function(){
        if(!done){
            done = true
            return fn.apply(this,arguments)
        }
    }
}

let pay = once(function (money){
    console.log(`支付:${money}RMB`)
})

pay(4)
pay(5)
pay(7)
pay(8)
console.log("----------------")

// 模拟常用的高阶函数：map、every、some

// map
const map = (array,fn)=>{
    let results = []
    for(let value of array){
        results.push(fn(value))
    }
    return results
}

// 测试
let arr = [1,3,4,5,6,7,8,9,10]
arr = map(arr,v=>v*v)
console.log(arr)
console.log("----------------")


// every   检测数组中的值是否全部满足设定的条件(全真才真)
// every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。（必须全部满足条件）
const every = (array,fn)=>{
    let result = true
    for(let value of array){
        result = fn(value)
        if(!result){
            break
        }
    }
    return result
}

// 测试
let array = [11,13,14,23,20]
let r = every(array,v=>v<24)
console.log(r)
console.log("----------------")


// some  检测数组中的元素是否有一个满足设定的条件(一真则真)一个满足条件即可
// some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。（一个满足条件即可）
const some = (array,fn)=>{
    let result = false
    for(let value of array){
        result = fn(value)
        if(result){
            break
        }
    }
    return result
}

// 测试
let array2 =  [1,2,3,4]
let q = some(array2,v=>v%2===0)
console.log(q)

/*
  * @describe: 闭包 就是一个函数可以访问到另一个函数的某一变量。
  * 闭包延长了外部函数它内部变量的作用范围。
*/




