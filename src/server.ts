interface user {
    name: string
    age: number
}

function saveUserToDatabase(user: user){

    console.log(user)
}
saveUserToDatabase({
    name: 'diego',
    age: 28
})
