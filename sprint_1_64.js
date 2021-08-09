console.log(snapCrackle(15))

console.log(snapCracklePrime(100))



function snapCracklePrime(maxValue){
    let theReturn = ""
    let word1 = " SnapCrackle"
    let word2 = "Snap"
    let word3 = "Crackle"
    let word4 = "Prime"
    let prime = []

    prime = primos(maxValue)


    for (let i=1; i<=maxValue; i++){
        
        if (i%2 !== 0 && i%5 === 0){
            theReturn = theReturn + word1

            for(let j=0; j<=i; j++){
                if (i === prime[j]){
                    theReturn = theReturn + word4
                }
            }
            
            if (i !== maxValue){
                theReturn = theReturn + ", "
            }

        }else if (i%2 !== 0 && i%5 !== 0){
            theReturn = theReturn + word2

            for(let j=0; j<=i; j++){
                if (i === prime[j]){
                    theReturn = theReturn + word4
                }
            }

            if (i !== maxValue){
                theReturn = theReturn + ", "
            }

        }else if (i%5 === 0 && i%2 ===0){
            theReturn = theReturn + word3

            for(let j=0; j<=i; j++){
                if (i === prime[j]){
                    theReturn = theReturn + word4
                }
            }

            if (i !== maxValue){
                theReturn = theReturn + ", "
            }

        }else {
            let ehPrimo = false            
            for(let j=0; j<=i; j++){
                if (i === prime[j]){
                    theReturn = theReturn + word4
                    ehPrimo = true
                }
            }

            if ((i !== (i%2 !== 0 && i%5 === 0)) && i!== (i%2 !== 0 && i%5 !== 0) && i !== (i%5 === 0 && i%2 ===0)){
                if (ehPrimo === false){
                    theReturn = theReturn + i
                }
                                
            }

            if (i !== maxValue){
                theReturn = theReturn + ", "
            }

        }
        
    }
    return theReturn
}


function snapCrackle(maxValue){
    let theReturn = ""
    let word1 = " SnapCrackle"
    let word2 = "Snap"
    let word3 = "Crackle"


    for (let i=1; i<=maxValue; i++){
        
        if (i%2 !== 0 && i%5 === 0){
            theReturn = theReturn + word1
            
            if (i !== maxValue){
                theReturn = theReturn + ", "
            }

        }else if (i%2 !== 0 && i%5 !== 0){
            theReturn = theReturn + word2

            if (i !== maxValue){
                theReturn = theReturn + ", "
            }

        }else if (i%5 === 0 && i%2 ===0){
            theReturn = theReturn + word3

            if (i !== maxValue){
                theReturn = theReturn + ", "
            }

        }else {
            theReturn = theReturn + i

            if (i !== maxValue){
                theReturn = theReturn + ", "
            }

        }
        
    }
    return theReturn
}

function primos(mxSeq){
    let c=1, contDiv=0, n=1, n2=mxSeq, primos=[]

do{
    
    do{

        if (n%c ===0){
            contDiv++
        }
    
        c++

    }while (c <= n)

    if (contDiv !== 2){
        
    }else if (contDiv === 2){
        primos.push(n)
    }

    n++
    c=1
    contDiv=0

}while (n<n2)

    return primos
}