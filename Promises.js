// There are several ways to create Promises in Javascript

// Promise No 1

const promisOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task is completed after 1 sec")
        resolve()
    },1000)
})
promisOne.then(()=>{
    console.log("Promise is consumed")
})

// Way no 2

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Task numer 2 is completed")
        resolve()
    },1000)
}).then(()=>{
    console.log("2nd Promise is consumed")
})

// By this way we can extract values from resolve , cuz this also relates with then()
const promisThird = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Task number 3 is about resolve")
        resolve({user: "Haseeb Saryal", id: "2309" })
    })
})
promisThird.then((user)=>{
    console.log(user)
})

// Way 4 we can also say this method : IS Chaining
const four = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        console.log("Async task 4 is completed")
        if(!error){
            resolve({name: "Faisal", password: "@123123", id : "user~gmial"})
        }
        else{
            reject("Error: The program can't be further executed")
        }
        
    }, 1000)

})
four.then((username)=>{
    return username.id
}).
then((userInfo)=>{
    console.log(userInfo)
}).
catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("this programme has been completed!")
})

// We can also use async await functions

async function five(){
   try {
    const resp = await promise
    console.log(resp)
    
   } catch (error) {
    console.log(error)
    
   }
}
five()

// Here are the some example of fetch api calling

async function AllUsers() {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    console.log(data)
    
}
AllUsers()
.then((vales)=>{
    return vales.id
}).then((alluse)=>{
    console.log(alluse)
}).catch((error)=>{
    console.log("error")
})