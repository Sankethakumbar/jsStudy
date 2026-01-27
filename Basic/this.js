//this -keyword
/**this it give current context */
//browser -global object=window object

/*-----------------------------this----------------------- */
const user = {
    userName: "sanketha",
    price: 99,
    welcomeMsg: function () {
        console.log(`${this.userName} ,welcome to the website`)
        console.log(this,"Inside the fn")
    }
}
//console.log(user)
user.welcomeMsg()
console.log(user.userName)

//current context this is empty-{}
console.log(this,"outside the fn")

//this in function --object of global
function thisInfn() {
    console.log(this);
    let username = "sanku";
    //console.log(this.username)--undefined because this cannot be used in functions
}
thisInfn()

