const returnHello = () => {
    const hello = "hello world"

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(hello){
                resolve(hello)
            }else{
                reject("impossible de l'afficher")
            }
        }, 2000)
    })
}

const waitForMyResult = async () => {
    try{
        console.log("loading...")
        const result = await returnHello()
        console.log(result)
    }catch(error){
        console.log("error")
    }
}

waitForMyResult()