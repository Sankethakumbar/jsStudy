/*------Promise---------------*/
const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ user: "sanketha", pass: "123" })
        } else {
            reject("ERROR: Js went wrong");
        }
    }, 1000)
});


async function consumePromise() {
    try {
        const response = await promise;
        console.log(response)
    } catch(error) {
        console.log(error)
    }

}
consumePromise()
