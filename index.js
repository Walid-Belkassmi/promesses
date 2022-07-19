// const returnHello = () => {
//     const hello = "hello world"

//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(hello){
//                 resolve(hello)
//             }else{
//                 reject("impossible de l'afficher")
//             }
//         }, 2000)
//     })
// }

// const waitForMyResult = async () => {
//     try{
//         console.log("loading...")
//         const result = await returnHello()
//         console.log(result)
//     }catch(error){
//         console.log("error")
//     }
// }

// waitForMyResult()

const isItCold = () => {
    return new Promise((resolve, reject) => {
        const temperature = 2

        setTimeout(() => {
            if(temperature <= 10){
                resolve("Il fait froid")
            }else{
                reject("Il fait chaud")
            }
        }, 4000)
    })
}

const waitForMyResult = async () => {
    try{
        console.log("J'attend 4 secondes")
        const result = await isItCold()
        console.log(result)
    }catch(error){
        console.log("Error")
    }
}

waitForMyResult()