


function updateURL(data) {
    let options_userId = data.options_userId;
    let options_photosId = data.options_photosId;
    let parameterTwo = '';
    let separator = '';
    if(options_photosId != undefined) {
        parameterTwo = options_photosId;
        separator = '&';
    }
    if (history.pushState) {
        let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        let newUrl = `${baseUrl}?${options_userId}${separator}${parameterTwo}`;
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
    let userIdFromUrl = urlParams.get('userId');
    let idFromUrl = urlParams.get('id');

    let queryParametersFromBrowser = {
        'userId': userIdFromUrl,
        'id': idFromUrl
    }
    // mainSourceData(queryParametersFromBrowser);
    return queryParametersFromBrowser
}

//============================



function mainSourceData(queryParametersFromBrowser) {
    let idFromBrowser = '';
    if(queryParametersFromBrowser.id == undefined){
        idFromBrowser = undefined;
    }else {
        idFromBrowser = `id=${queryParametersFromBrowser.id}`;
    }

    let mainSourceData = {
        'options_userId': `userId=${queryParametersFromBrowser.userId}`,
        'options_photosId': idFromBrowser
    }
    updateURL(mainSourceData);
    return mainSourceData
}




function newPostsPage(data) {
    updateURL(data);
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));


    fetch('https://jsonplaceholder.typicode.com/posts' + `?${data.options_userId}`)
        .then((response) => response.json())
        .then((json) => console.log(json));

    console.log(data.options_photosId);
    if(data.options_photosId != undefined) {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos' + `?${data.options_photosId}`)
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


}



// output data from URL same had enter browser
// ================
newPostsPage(mainSourceData(getUrlParameters()));
//=================



let variableData = {
    'userId': 5,
    // 'id': 3
}
newPostsPage(mainSourceData(variableData));


