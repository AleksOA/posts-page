


createStartPage();
const postWrapper = document.querySelector('.post__wrapper');
function createStartPage() {
    const body = document.querySelector('body');
    body.innerHTML = `
    <div class="container">
        <main>
            <div class="post__wrapper">
                <div class="button-get-posts">
                    <button id="buttonGetPost" >Get post</button>
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

// Pagination
// =======================================
function pagination(quantityPosts, page){
    let quantityPage = Math.ceil(quantityPosts / 10);
    let pageID= page[0].userId
    function btnPage(pageID){
        let btnPage = `<button class="post__btn-page" id="btnPage${pageID}" data-page-id="${pageID}">${pageID}</button>`;
        return btnPage
    }

    let paginationBlockElem = `<div class="post__quantity"></div>`;
    postWrapper.innerHTML += paginationBlockElem;

    let paginationBlock = document.querySelector('.post__quantity')


    let separator = `<span class="post__separator"> . . . </span>`;
    let btnPrevious = `
        <span class="post__button-previous">
            <button class="post__btn-previous" id="btnPrevious">Previous</button>            
        </span>
        `;
    let btnNext = `
        <span class="post__button-next">
            <button class="post__btn-next" id="btnNext">Next</button>            
        </span>
        `;



    if(quantityPage<7){
        if(pageID == 1 ) {

            paginationBlock.innerHTML += btnPage(1);
            for(let i=2; i< 7; i++){
                paginationBlock.innerHTML += btnPage(i);
            }
            paginationBlock.innerHTML += btnNext;

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }

        if(pageID >1 && pageID <6) {
            paginationBlock.innerHTML += btnPrevious;
            paginationBlock.innerHTML += btnPage(1);
            for(let i=2; i< 7; i++){
                paginationBlock.innerHTML += btnPage(i);
            }
            paginationBlock.innerHTML += btnNext;

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }

        if(pageID == 6 ) {
            paginationBlock.innerHTML += btnPrevious;
            paginationBlock.innerHTML += btnPage(1);
            for(let i=2; i< 7; i++){
                paginationBlock.innerHTML += btnPage(i);
            }

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }

    }

    if(quantityPage>=7){
        if(pageID == 1 ) {

            paginationBlock.innerHTML += btnPage(1);
            for(let i=2; i< 4; i++){
                paginationBlock.innerHTML += btnPage(i);
            }
            paginationBlock.innerHTML += separator;
            paginationBlock.innerHTML += btnPage(quantityPage);
            paginationBlock.innerHTML += btnNext;

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();

        }

        if(pageID == 2 ) {
            paginationBlock.innerHTML += btnPrevious;
            paginationBlock.innerHTML += btnPage(pageID-1);
            paginationBlock.innerHTML += btnPage(pageID);
            paginationBlock.innerHTML += btnPage(pageID+1);
            paginationBlock.innerHTML += separator;
            paginationBlock.innerHTML += btnPage(quantityPage);
            paginationBlock.innerHTML += btnNext;

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }
        if(pageID == 3 ) {
            paginationBlock.innerHTML += btnPrevious;
            paginationBlock.innerHTML += btnPage(pageID-2);
            paginationBlock.innerHTML += btnPage(pageID-1);
            paginationBlock.innerHTML += btnPage(pageID);
            paginationBlock.innerHTML += btnPage(pageID+1);
            paginationBlock.innerHTML += separator;
            paginationBlock.innerHTML += btnPage(quantityPage);
            paginationBlock.innerHTML += btnNext;

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }
        if(pageID == 4 ) {
            paginationBlock.innerHTML += btnPrevious;
            paginationBlock.innerHTML += btnPage(pageID-3);
            paginationBlock.innerHTML += btnPage(pageID-2);
            paginationBlock.innerHTML += btnPage(pageID-1);
            paginationBlock.innerHTML += btnPage(pageID);
            paginationBlock.innerHTML += btnPage(pageID+1);
            paginationBlock.innerHTML += separator;
            paginationBlock.innerHTML += btnPage(quantityPage);
            paginationBlock.innerHTML += btnNext;

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }

        if(pageID != 1 && pageID >4 && pageID < quantityPage-3 && pageID != quantityPage) {

            paginationBlock.innerHTML += btnPrevious;
            paginationBlock.innerHTML += btnPage(1);
            paginationBlock.innerHTML += separator;
            paginationBlock.innerHTML += btnPage(pageID-1);
            paginationBlock.innerHTML += btnPage(pageID);
            paginationBlock.innerHTML += btnPage(pageID+1);
            paginationBlock.innerHTML += separator;
            paginationBlock.innerHTML += btnPage(quantityPage);
            paginationBlock.innerHTML += btnNext;

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }
        if(pageID == quantityPage-3) {
            paginationBlock.innerHTML += btnPrevious;
            paginationBlock.innerHTML += btnPage(1);
            paginationBlock.innerHTML += separator;
            paginationBlock.innerHTML += btnPage(pageID-1);
            paginationBlock.innerHTML += btnPage(pageID);
            paginationBlock.innerHTML += btnPage(pageID+1);
            paginationBlock.innerHTML += btnPage(pageID+2);
            paginationBlock.innerHTML += btnPage(quantityPage);
            paginationBlock.innerHTML += btnNext;

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }

        if(pageID == quantityPage-2) {
            paginationBlock.innerHTML += btnPrevious;
            paginationBlock.innerHTML += btnPage(1);
            paginationBlock.innerHTML += separator;
            paginationBlock.innerHTML += btnPage(pageID-1);
            paginationBlock.innerHTML += btnPage(pageID);
            paginationBlock.innerHTML += btnPage(pageID+1);
            paginationBlock.innerHTML += btnPage(quantityPage);
            paginationBlock.innerHTML += btnNext;

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }

        if(pageID == quantityPage-1) {
            paginationBlock.innerHTML += btnPrevious;
            paginationBlock.innerHTML += btnPage(1);
            paginationBlock.innerHTML += separator;
            paginationBlock.innerHTML += btnPage(pageID-2);
            paginationBlock.innerHTML += btnPage(pageID-1);
            paginationBlock.innerHTML += btnPage(pageID);
            paginationBlock.innerHTML += btnPage(quantityPage);
            paginationBlock.innerHTML += btnNext;

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }

        if(pageID == quantityPage) {

            paginationBlock.innerHTML += btnPrevious;
            paginationBlock.innerHTML += btnPage(1);
            paginationBlock.innerHTML += separator;
            for(let i=quantityPage-2; i<quantityPage; i++){
                paginationBlock.innerHTML += btnPage(i);
            }
            paginationBlock.innerHTML += btnPage(quantityPage);

            let currentPage= document.getElementById(`btnPage${pageID}`);
            currentPage.classList.add('active');
            btnsPrviousNext(currentPage,pageID,quantityPage);
            buttonPage();
        }
    }


    function btnsPrviousNext(data, pageID, quantityPage){
        let currentPage = data;
        if(pageID>1) {
            let previousBtn = document.getElementById('btnPrevious');

            previousBtn.addEventListener('click',() => {
                let pageId = currentPage.getAttribute('data-page-id')-1;
                let variableData = {
                    'pageId': pageId
                }
                let allPost = document.querySelectorAll('.post');
                allPost.forEach(post  => {
                    post.remove();
                });
                paginationBlock.remove();
                newPage(mainSourceData(variableData));
            });
        }

        if(pageID<quantityPage) {
            let nextBtn = document.getElementById('btnNext');

            nextBtn.addEventListener('click',() => {
                let pageId = Number(currentPage.getAttribute('data-page-id'))+1;
                let variableData = {
                    'pageId': pageId
                }
                let allPost = document.querySelectorAll('.post');
                allPost.forEach(post  => {
                    post.remove();
                });
                paginationBlock.remove();
                newPage(mainSourceData(variableData));
            });
        }
    }


    function buttonPage() {
        let btnPages = document.querySelectorAll('.post__btn-page');
        btnPages.forEach(btnPage  => {
            btnPage.addEventListener('click',() => {
                let pageId = btnPage.getAttribute('data-page-id');
                let variableData = {
                    'pageId': pageId
                }
                let allPost = document.querySelectorAll('.post');
                allPost.forEach(post  => {
                    post.remove();
                });
                paginationBlock.remove();
                newPage(mainSourceData(variableData));
            });
        })
    }


}

// ============================================


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
        let page = value[1];
        let quantityPosts = value[0].length;
        pagination(quantityPosts, page);


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


