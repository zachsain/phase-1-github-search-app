

function gitRequest(user) {
fetch(`https://api.github.com/search/users?q=${user}`)
.then(r => r.json())
.then(data => (console.log(data), appendSearchData(data)))
}

function appendSearchData(data) {

    data.forEach(obj => {

    for (let key in obj){

        let ulContainer = document.querySelector('#user-list')

        let name = document.createElement('li')
        name.textContent = key.login

        console.log(key.login)

        ulContainer.appendChild(name)
    }

})

    // data.forEach(item => {

    //     const ulContainer = document.querySelector('#user-list')

    //     const name = document.createElement('li')
    //     name.textContent = item.login

    //     ulContainer.appendChild(name)
        

    // })
}


function diplayData(array) {
    const sumbitBtn = document.querySelector('#github-form')
    sumbitBtn.addEventListener('submit', e => {
        e.preventDefault()
        console.log(e.target.value)
    })
}



document.addEventListener('DOMContentLoaded', () => {
    // gitRequest()
    // diplayData()

    // let formInput = document.querySelector('#search')

    const submitForm = document.getElementById('github-form')
    submitForm.addEventListener('submit', gitHubSearch)

})

function gitHubSearch(e){
    e.preventDefault()
    const formInput = document.getElementById('search')
    const searchValue = formInput.value
    // console.log(searchValue)

    gitRequest(searchValue)

    



}
// want to take value from submit field and search github users 


