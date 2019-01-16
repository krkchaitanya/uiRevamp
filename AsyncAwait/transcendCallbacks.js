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
    console.log('getPosts() method got triggered');
    setTimeout(() => {
        let output=[];
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById("callbacksSection").innerHTML = output;
    }, 1000);
}

getPosts();

function createPosts(post, callback) {
    console.log('createPosts() method got triggered');
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000);
}

createPosts({
    title: 'post threee',
    description: 'This is post threee description'
}, getPosts);