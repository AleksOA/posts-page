


createStartPage();
function createStartPage() {
    const body = document.querySelector('body');
    body.innerHTML = `
    <div class="container">
        <main>
            <div class="post__wrapper">
                <div class="button-get-posts">
                    <button id="buttonGetPost" >Gat post</button>
                </div>
            </div>
        </main>  
    </div>`;
    let btnGetPost = document.getElementById('buttonGetPost');
    btnGetPost.addEventListener('click', getPosts);
}

// Create post
// ====================
function createPost(data) {
   let divPost = `
        <div class="post">
            <h2 class="post__title">${data.title}</h2>
            <button class="post_btn" data-post-id="${data.id}"></button>
        </div>   
    `;
    return divPost;
}

// ====================




// Get posts
//===========================

function getPosts(){
    outputPosts();
}

// btnGetPost.addEventListener('click', getPosts);
//===========================

// Output posts
// ============================
function outputPosts() {
    let postWrapper = document.querySelector('.post__wrapper');
    let postItems = `<div class="post__items"></div>`;
    postWrapper.innerHTML += postItems;
    newPage(mainSourceData(getUrlParameters()));
}
// ============================



function updateURL(data) {
    let options_userId = data.options_userId;
    let options_photosId = data.options_photosId.forBrowser;
    let options_postId = data.options_postId.forBrowser;
    let parameterTwo = '';
    let separatorTwo = '';
    if(options_photosId != undefined) {
        parameterTwo = options_photosId;
        separatorTwo = '&';
    }
    let parameterThree = '';
    let separatorThree = '';
    if(options_postId != undefined) {
        parameterThree = options_postId;
        separatorThree = '&';
    }
    if (history.pushState) {
        let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        let newUrl = `${baseUrl}?${options_userId}${separatorTwo}${parameterTwo}${separatorThree}${parameterThree}`;
        history.pushState(null, null, newUrl);
    }
    else {
        console.warn('History API not supported');
    }
}


// Get URL Parameters
//============================

function getUrlParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let padeIdFromBrowser = urlParams.get('userId');
    let photoIdFromBrowser = urlParams.get('photoId');
    let postIdFromBrowser = urlParams.get('postId');
    let queryParametersFromBrowser = {
        'pageId': padeIdFromBrowser,
        'photoId': photoIdFromBrowser,
        'postId': postIdFromBrowser
    }
    return queryParametersFromBrowser
}
//============================


function mainSourceData(queryParametersFromBrowser) {
    let idPhotoFromBrowser = '';
    if(queryParametersFromBrowser.photoId == undefined){
        idPhotoFromBrowser = undefined;
        idPhotoFromFetch = undefined;
    }else {
        idPhotoFromBrowser = `photoId=${queryParametersFromBrowser.photoId}`;
        idPhotoFromFetch = `id=${queryParametersFromBrowser.photoId}`;
    }

    let idPostFromBrowser = '';
    if(queryParametersFromBrowser.postId == undefined){
        idPostFromBrowser = undefined;
        idPostFromFetch = undefined;

    }else {
        idPostFromBrowser = `postId=${queryParametersFromBrowser.postId}`;
        idPostFromFetch = `id=${queryParametersFromBrowser.postId}`;
    }

    let mainSourceData = {
        'options_userId': `userId=${queryParametersFromBrowser.pageId}`,
        'options_photosId':
            {'forBrowser': idPhotoFromBrowser,
                'forFetch': idPhotoFromFetch
            },
        'options_postId':
            {'forBrowser': idPostFromBrowser,
                'forFetch': idPostFromFetch
            }
    }
    updateURL(mainSourceData);
    return mainSourceData
}

function newPage(data){
    updateURL(data);

    let allPosts = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                resolve(response.json());
            })
    });

    let page = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts' + `?${data.options_userId}`)
            .then((response) => {
                resolve(response.json());
            })
    });


    Promise.all ([allPosts, page]).then(value => {
        let allPosts = value[0];
        let page = value[1];

        // display posts on the page
        let postItems = document.querySelector('.post__items');
        page.forEach(post => {
            postItems.innerHTML += createPost(post);
        });

    });

}




// ================================================================================================================

function newPostsPage(data) {
    updateURL(data);
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));


    fetch('https://jsonplaceholder.typicode.com/posts' + `?${data.options_userId}`)
        .then((response) => response.json())
        .then((json) => console.log(json));


    if(data.options_photosId.forFetch != undefined) {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos' + `?${data.options_photosId.forFetch}`)
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    if(data.options_postId.forFetch != undefined) {
        fetch('https://jsonplaceholder.typicode.com/posts' + `?${data.options_postId.forFetch}`)
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
}


// output data from URL same had enter browser````

// ================
// newPostsPage(mainSourceData(getUrlParameters()));
//=================



let variableData = {
    'pageId': 7,
    'photoId': 5,
    'postId': 5

}

// newPostsPage(mainSourceData(variableData));


