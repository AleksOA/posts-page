
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
            <button class="post_btn" data-post-id="${data.id}" data-page-post="${data.userId}"></button>
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
    let variableData = {
        'pageId': 1
    }
    if(mainSourceData(getUrlParameters()).options_userId == 'userId=null') {
        newPage(mainSourceData(variableData));
    }
    else if(mainSourceData(getUrlParameters()).options_userId != undefined &&
            mainSourceData(getUrlParameters()).options_userId != undefined){
        newPage(mainSourceData(getUrlParameters()));
        popup(mainSourceData(getUrlParameters()), "browser");
    }

    else{
        newPage(mainSourceData(getUrlParameters()));
    }
    let buttonGetPosts = document.querySelector('.button-get-posts');
    buttonGetPosts.remove();

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

    let paginationBlock = document.querySelector('.post__quantity');


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
            for(let i=2; i< 6; i++){
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
            paginationBlock.innerHTML += btnPage(pageID+2);
            paginationBlock.innerHTML += btnPage(pageID+3);
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
            paginationBlock.innerHTML += btnPage(pageID+2);
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
    let idPageFromBrowser = queryParametersFromBrowser.pageId;

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
        'options_userId': `userId=${idPageFromBrowser}`,
        'options_photosId':
            {'forBrowser': idPhotoFromBrowser,
                'forFetch': idPhotoFromFetch
            },
        'options_postId':
            {'forBrowser': idPostFromBrowser,
                'forFetch': idPostFromFetch
            },
        'browser': queryParametersFromBrowser
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
        postMore();
    });

}

function postMore(){
    let postsBtn = document.querySelectorAll('.post_btn');
    postsBtn.forEach(postBtn => {
        postBtn.addEventListener('click', popup);
    })
}

function popup(main_source_data, source) {
    let postID = '';
    let pageID = '';
    let photoID = '';
    if(source == 'browser') {
        postID = mainSourceData(getUrlParameters()).browser.postId;
        pageID  = mainSourceData(getUrlParameters()).browser.pageId;
        photoID = mainSourceData(getUrlParameters()).browser.photoId;
    }else {
        postID = this.getAttribute('data-post-id');
        pageID = this.getAttribute('data-page-post');
        photoID = postID;
    }

    if(postID > 50) {
        photoID = postID-50;
    }

    let variableData = {
        'pageId': pageID,
        'photoId': photoID,
        'postId': postID
    }

    let currentData = mainSourceData(variableData);
    let post = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts' + `?${currentData.options_postId.forFetch}`)
            .then((response) => {
                resolve(response.json());
            })
    });

    let photo = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos' + `?${currentData.options_photosId.forFetch}`)
            .then((response) => {
                resolve(response.json());
            })
    });

    Promise.all ([post, photo]).then(value => {
        displayPopupContent(value);
        });

    function displayPopupContent(content) {
        let title = content[0][0].title;
        let description = content[0][0].body;
        let urlImg = content[1][0].url;
        let popupHTML= `
                <div class="popup">
                    <div class="popup__body">
                        <div class="popup__content-box">
                            <span class="popup__button-close">
                                <button class="popup__btn-close"></button>
                            </span>
                            <div class="popup__content-box-inner">
                                <div class="popup__content">
                                    <h2 class="popup__content-title">${title}</h2>
                                    <div class="popup__content-image">
                                        <img class="popup__content-img" src="${urlImg}" alt="Plesholder">
                                    </div>
                                    <p class="popup_content-description">${description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        postWrapper.innerHTML += popupHTML;

        let btnClose = document.querySelector('.popup__btn-close');
        let popup = document.querySelector('.popup');
        btnClose.addEventListener('click', closePopup);
        popup.addEventListener('click', close);

        function close(event){
            if(!event.target.closest('.popup__content-box')){
                closePopup();
            }
        }

        function closePopup() {
            let pageID = content[0][0].userId;
            let popups = document.querySelector('.popup');
            popups.remove();
            let variableData = {
                'pageId': pageID
            }
            let paginationBlock = document.querySelector('.post__quantity');
            let posts = document.querySelectorAll('.post');
            posts.forEach(post =>{
                post.remove();
            })
            paginationBlock.remove();
            newPage(mainSourceData(variableData));

        }
    }
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


