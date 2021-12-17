// code your solution here
function saturdayFun(fun = "roller-skate") {
    return(`This Saturday, I want to ${fun}!`);
    
}

function mondayWork(action = "go to the office") {
    return(`This Monday, I will ${action}.`)
}

function wrapAdjective(pa = "*") {
    return function inner(para="special") {
        return(`You are ${pa}${para}${pa}!`)
    }
}