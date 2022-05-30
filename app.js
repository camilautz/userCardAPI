const getUsers = async() =>{
    const dados = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await dados.json()
    console.log(users)
    buildCard(users)
}

const buildCard = (users) =>{
    users.map(user =>{

        const card = document.querySelector('.card')
        const container = document.createElement('div')

        const fullName = document.createElement('h3')
        fullName.innerHTML = `${user.name} ${user.username}`

        const email = document.createElement('p')
        email.innerHTML = `${user.email}`
        
        const phone = document.createElement('p')
        phone.innerHTML = `${user.phone}`

        container.appendChild(fullName)
        container.appendChild(email)
        container.appendChild(phone)

        card.appendChild(container) 
        container.classList.add('cardUser')
        
    })
}

getUsers()