

const handlerAPIUrl = "http://localhost:4000/data"
let maindata = ''
async function handler(){
   try{
        const users = await fetch(handlerAPIUrl)
        if(!users.ok){
            throw new Error(`http error code ${users.status}`)
        }
        const userdata = await users.text()
        //console.log(userdata)
        maindata = JSON.parse(userdata)
        //console.log(maindata)
        //now operations can be performed on this maindata
        for(const user of maindata){
            console.log(user.id)
            console.log(user.first_name)
        }
        console.log(1)
        populateresponse(maindata)



   }catch(error){
    console.log(`error ${error} occured`)
   }
   
   
    
}

function populateresponse(obj){
    for(const user of obj){
        console.log(user.id)
        console.log(user.first_name)
    }
    
    const section = document.querySelector("section")
    for(const user of obj){
        const firstname = document.createElement("h2")
        const lastname = document.createElement("h2")
        const email = document.createElement("p")
        const gender = document.createElement("p")
        const ipaddress = document.createElement("p")

        firstname.textContent = user.first_name
        lastname.textContent = user.last_name
        email.textContent = `${user.first_name}'s email is ${user.email}`
        gender.textContent = `${user.first_name}' is ${user.gender}`
        ipaddress.textContent = `${user.first_name}'s ip is ${user.ipaddress}`

        section.appendChild(firstname)
        section.appendChild(lastname)
        section.appendChild(email)
        section.appendChild(gender)
        section.appendChild(ipaddress)



    }
}


handler()

// data has been fetched from 
// now we need to beautify it and show it on the webpage
