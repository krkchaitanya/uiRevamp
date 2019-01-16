const posts = [
    {
        title: 'post one',
        description: 'This is post one information'
    },
    {
        title: 'post two',
        description: 'This is post two information'
    }
];

function getPosts() {
    console.log('--> Triggered getPosts() method ');
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById("promisesSection").innerHTML = output;
    },1000);
}

function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error =  false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went rong');
            }

        }, 2000);
    });
}

createPost({
    title: "new great post",
    description: "dfljn dskhv kdhlsjvl kd kudyd gdukgy dukli"
}).then(getPosts);

// Promise.all   // Synchronus operations
const theNewPromise1 = fetch('https://jsonplaceholder.typicode.com/users');
const theNewPromise2 = new Promise((resolve,reject) => {
    resolve("Its the new Promise2 functionslity");
});

Promise.all([theNewPromise1, theNewPromise2]).then((resObj) => {
    console.log('theNewPromise2 -> ', resObj[1]);
    resObj[0].json().then((data) => {
        console.log(' Response data after maing fetch call -> ', data);
    })
});

// ASYNC and AWait -> Built on Promises // Under the hood we deal with ES6 Promises
async function fetchUserData() {
    const userFetchOperation = await fetch('https://jsonplaceholder.typicode.com/users');
    const userPromiseOutput = await userFetchOperation.json();
    console.log('userPromiseOutput -> ', userPromiseOutput);
}
fetchUserData();