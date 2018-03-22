const parent = document.getElementById('wrapper');


function parseUrl() {
    const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';
    const { search: urlSearch } = window.location;

    if (!urlSearch) {
        getData(`${API_ENDPOINT}/posts`, renderPosts);
        return
    }
    
    const [ matchExp, matchKey, matchvalue ] = urlSearch.match(/\?(.+)=(\d)/)

    if (matchKey === 'postId') {
        getData(`${API_ENDPOINT}/posts/${matchvalue}`, renderPost);
        getData(`${API_ENDPOINT}/comments${matchExp}`, renderComments);
    } else if (matchKey === 'userId') {
        getData(`${API_ENDPOINT}/posts${matchExp}`, renderPosts);
    } else {
        getData(`${API_ENDPOINT}/posts`, renderPosts);
    }

    console.log(urlSearch, matchExp, matchKey, matchvalue)
}


parseUrl()


function renderPosts(posts) {
    posts.forEach(post => {
        renderPost(post);
    })
}


function renderPost(post) {
    const container = document.createElement('div');

    container.innerHTML =
    `
    <h2>${post.title}</h2>
    <div>${post.body}</div>
    <a href='?postId=${post.id}'>Read more...</a>
    <a href='?userId=${post.userId}'>Author: ${post.userId}</a>
    `

    parent.appendChild(container);
}


function renderComments(comments) {
    const header = document.createElement('h2');
    header.innerText = 'Comments'

    parent.appendChild(header);

    comments.forEach(comment => {
        const container = document.createElement('div');

        container.innerHTML =
        `
        <h2>${comment.name}</h2>
        <div>${comment.email}</div>
        <div>${comment.body}</div>
        `

        parent.appendChild(container);
    })
}


function getData(url, fn) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            fn(data)
        })
        .catch(error => console.error(error));
}