//Basic synatx of promise

/**To create your own Promise object, you use the new keyword to create an instance of the built-in Promise class. */
const promise1 = new Promise(function (resolve, reject) {
    //doan async task
});


//--------------------------------------------
//create a promise
const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //console.log("Hello after 2 seconds");
    }, 2000);
});
//consume the promise
promise2
    .then(function () {
        console.log("promise connected");
    })
    .catch(function (err) {
        console.log("Not connected");
    });





//-----------------------------------------------
/*We wrote the code but they are not connected with each other so we use resolve()*/

//create a promise
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //console.log("Hello after 2 seconds");
        resolve()
    }, 2000);
});
//consume the promise
promise3
    .then(function () {
        //console.log("promise connected");
    })
    .catch(function (err) {
        //console.log("Not connected");
    });


//----------------------
new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async task");
        // resolve()
        resolve("Async Task");//this will not be printed
    }, 1000)

}).then(function () {
    //console.log("Used");
})

//----------------------data is passed through resolve( ) and then will provide all the details returns
new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async task");
        // resolve()
        resolve("Async Task with resolve");//this will not be printed put will be passed
    }, 1000)

}).then(function (msg) {
    //console.log(msg);
})


/*----------------------------------------*/
const promise4 = new Promise(function (resolve, reject) {
    let success = true;

    if (success) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed.");
    }
});

promise4
    .then(function (result) {
        console.log("Success:", result);
    })
    .catch(function (error) {
        console.log("Error:", error);
    });


/**-----------Chaining--------- */
const promiseChain = new Promise(function (resolve, reject) {
    let error = false
    if (!error) {
        resolve({ username: "sanku", password: "123456" })
    } else {
        reject("ERROR: Something went wrong")
    }
})

promiseChain
    .then((msg) => {
        console.log(msg);
        return msg.username;
    }).then((username) => {
        console.log(username);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("This is finally block")
    })


/**----------------------------------*/
const promise5 = new Promise(function (resolve, reject) {
    let error = false;
    if (!error) {
        resolve({ username: "sanku", password: "123456" });
    } else {
        reject("ERROR: Something went wrong");
    }

})