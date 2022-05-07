const posts = [
    { 'title': 'post one', 'body': 'This is post one', createdAt: new Date().getTime() }, { 'title': 'post two', 'body': 'This is post two', createdAt: new Date().getTime() }
]

let intervalId;
function getPosts() {
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} - ${Math.floor((new Date().getTime() - post.createdAt) / 1000)} seconds ago</li>`;
        })
        document.body.innerHTML = output;
        // console.log(intervalId)
    }, 1000);
}

function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            const err = false;
            if (!err) {
                return resolve();
            }
            else {
                reject('Error: Something went wrong')
            }
        }, 2000);

    })

}
createPosts({title:"Post 5",body:"this is Post 5"})
.then(getPosts)
.catch((err) => console.log(err)).then(getLastUpdateTime);


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.pop()

            if (posts.length > 0) {
                resolve()
            }
            else {
                reject('Array is empty now')
            }
        }, 1000)
    })
}

deletePost()
    .then()
    .catch(err => console.log(err))


let cleaner = 0;
function getLastUpdateTime() {
    clearInterval(cleaner);
    cleaner = setInterval(() => {
        let last = "";
        last = `<ul> Last Updated ${new Date().getSeconds()} seconds ago</ul>`;
        document.body.innerHTML = document.body.innerHTML + last;
    }, 500)
}