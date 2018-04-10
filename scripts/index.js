'use strict';
// mockData for testing purposes only
const mockData = {
    'kind': 'youtube#searchListResponse',
    'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/oEv89t51Sd8ORH2C2kRAmfcSnhA"',
    'nextPageToken': 'CAUQAA',
    'regionCode': 'US',
    'pageInfo': {
        'totalResults': 1000000,
        'resultsPerPage': 5
    },
    'items': [
        {
            'kind': 'youtube#searchResult',
            'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/_MkRnwqaJXMWSxS07gHgGxwatjc"',
            'id': {
                'kind': 'youtube#video',
                'videoId': 'pAsN4lSa7O0'
            },
            'snippet': {
                'publishedAt': '2017-09-08T10:00:03.000Z',
                'channelId': 'UC9nxc-xiH1AnL9RGstfgurg',
                'title': 'Blake Shelton - "I\'ll Name The Dogs" (Official Music Video)',
                'description': 'NEW ALBUM "Texoma Shore" available NOW: https://BlakeShelton.lnk.to/texomashore See Blake on the "Country Music Freaks" Tour with Brett Eldredge and Carly Pearce! Tickets on sale now. Visit...',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/pAsN4lSa7O0/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/pAsN4lSa7O0/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/pAsN4lSa7O0/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    }
                },
                'channelTitle': 'Blake Shelton',
                'liveBroadcastContent': 'none'
            }
        },
        {
            'kind': 'youtube#searchResult',
            'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/UbYHD7HGUye1kPQMzZ8JlNRamik"',
            'id': {
                'kind': 'youtube#video',
                'videoId': '4A3tcUUb6M4'
            },
            'snippet': {
                'publishedAt': '2017-09-09T10:32:28.000Z',
                'channelId': 'UC3ZhVuv7S48bAVJsYGMC_bQ',
                'title': 'Blake Shelton - I\'ll Name The Dogs (LYRICS)',
                'description': 'Blake Shelton I\'ll Name The Dogs lyrics Blake shelton i\'ll name the dogs lyrics blake shelton i will name the dogs Lyrics.',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/4A3tcUUb6M4/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/4A3tcUUb6M4/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/4A3tcUUb6M4/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    }
                },
                'channelTitle': 'Music Lyrics',
                'liveBroadcastContent': 'none'
            }
        },
        {
            'kind': 'youtube#searchResult',
            'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/LX5jpXx9Zq8byA0OggXWZ5Lz9d4"',
            'id': {
                'kind': 'youtube#video',
                'videoId': 'X_mbNE5UzHI'
            },
            'snippet': {
                'publishedAt': '2015-04-04T14:20:55.000Z',
                'channelId': 'UCSY5Ca_55GqRJfWE3lu1cEw',
                'title': 'dogs called by name one at a time',
                'description': 'These patient dogs have all learnt to wait until their name is called before they eat!',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/X_mbNE5UzHI/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/X_mbNE5UzHI/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/X_mbNE5UzHI/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    }
                },
                'channelTitle': 'wonderfull World',
                'liveBroadcastContent': 'none'
            }
        },
        {
            'kind': 'youtube#searchResult',
            'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/FpT3xFzdHQdZnG0XWpfHKURn1yw"',
            'id': {
                'kind': 'youtube#video',
                'videoId': 'DZDZANu33rY'
            },
            'snippet': {
                'publishedAt': '2017-10-06T13:00:02.000Z',
                'channelId': 'UCINb0wqPz-A0dV9nARjJlOQ',
                'title': 'SMART Dog Knows Toys By Name | The Dodo',
                'description': 'SMART Dog Knows All Her Toys By Name | This super smart dog knows her toys by name — but can she remember them ALL? Special thanks to Ori Lieberman for this amazing video! For more of this...',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/DZDZANu33rY/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/DZDZANu33rY/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/DZDZANu33rY/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    }
                },
                'channelTitle': 'The Dodo',
                'liveBroadcastContent': 'none'
            }
        },
        {
            'kind': 'youtube#searchResult',
            'etag': '"RmznBCICv9YtgWaaa_nWDIH1_GM/jDPAii3DzqTksIqmS593cNmrm_o"',
            'id': {
                'kind': 'youtube#video',
                'videoId': 'V0aydZb5eA0'
            },
            'snippet': {
                'publishedAt': '2018-03-15T10:18:44.000Z',
                'channelId': 'UC7xz_YipuZtypOuVALNzeog',
                'title': 'In the Name of Jesus (feat. October London)',
                'description': 'Provided to YouTube by Sony Music Entertainment In the Name of Jesus (feat. October London) · Snoop Dogg · October London Snoop Dogg Presents Bible of Love ℗ An RCA Inspiration release....',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/V0aydZb5eA0/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/V0aydZb5eA0/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/V0aydZb5eA0/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    }
                },
                'channelTitle': 'Snoop Dogg - Topic',
                'liveBroadcastContent': 'none'
            }
        }
    ]
};

// DONE!
const API_KEY = 'AIzaSyBFz0lxQL-8arxYWSUs8rmCQSLM6jqAwrI';

/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
    videos: []
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
// DONE!
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// DONE!
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
// DONE!
const fetchVideos = function (searchTerm, callback) {
    const query = {
        q: `${searchTerm} in:name`,
        key: API_KEY,
        part: 'snippet'
    };
    $.getJSON(BASE_URL, query, callback);
};


// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function (response) {
    return response.items.map(item => { 
        const id = item.id.videoId; 
        const title = item.snippet.title; 
        const thumbnail = item.snippet.thumbnails.default.url; 
        return { id, title, thumbnail, }; 
    });
};

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function (video) {
    return `
    <li> <img src="${video.thumbnail}"> <p>${video.title}</p> </li> `;
};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function (videos) {
    store.videos = videos;
};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function () {
  
};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function () {

};

// When DOM is ready:
$(function () {
    // TASK:
    // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
