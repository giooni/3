function sumoflst(lst1, lst2){
    let lst =[]
    if(lst1.length>= lst2.length){
        for(let i=0; i<lst1.length; i++){
            if(lst1[i] && lst2[i]){
                lst.push(lst1[i]+ lst2[i])
            }
            else if(lst1[i]){
                lst.push(lst1[i])
            }
           
            
    
        }
    }else if (lst1.length<lst2.length){
        for(let i=0; i<lst2.length; i++){
            if(lst1[i] && lst2[i]){
                lst.push(lst1[i]+ lst2[i])
            }
            else if(lst2[i]){
                lst.push(lst2[i])
            }
           
            
    
        }
        

    }

    return lst
}
console.log(sumoflst([1,2,3],[2,5,7,11]))


function mergearr(arr1, arr2){
    let arr =[]
    for(var i of arr1){
        arr.push(i)
        for(var k of arr2){
            if(i!==k){
                arr.push(k)


            }
        }
        return arr
    }
    
}
console.log(mergearr([1,2],[2,4,7]))



function delfalsy(lst){
    var lst1 = [];
    for(var el of lst){
        if(el){
            lst1.push(el)

        }
    }
    return lst1
}
console.log(delfalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]))


function getvalue (colors, o){
    string = ""
    for(var i=0; i<colors.length; i++){
        if(i ===0){
            string += "1"+o[i+1] +" "+ "choice is" + " " +colors[i]+"."
        }
        else if(i ===1){
            string += i+1+o[i+1] +" "+ "choice is" + " " +colors[i]+"."
        }
        else if( i ===2){
            string+= i+1 + o[i+1]+ " " + "choice is" + " "+colors[i]+"."
        }
        else if( i>2){
            string += i+1 + o[0]+ " " + "choice is" + " "+colors[i]+"."
        
        }

        
    }
    return string
}
console.log(getvalue(color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],["th","st","nd","rd"]))



function checkIfEven(n){
    if(n%2===0){
        return true
    }return false
}
console.log(checkIfEven(3))