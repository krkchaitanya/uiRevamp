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
