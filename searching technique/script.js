 // Function to perform search
 // Function to perform search
function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (searchInput.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    const githubUrl = `https://api.github.com/search/repositories?q=${searchInput}`;
    const wikipediaUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchInput}`;
    const omdbUrl = `http://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&s=${searchInput}`; // Replace 'YOUR_OMDB_API_KEY' with your actual OMDb API key
    const newsApiUrl = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=YOUR_NEWSAPI_KEY`; // Replace 'YOUR_NEWSAPI_KEY' with your actual News API key

    const promises = [
        fetch(githubUrl)
            .then(response => response.json())
            .then(data => ({
                name: 'GitHub',
                results: data.items
            }))
            .catch(error => console.error('GitHub Error:', error)),
        fetch(wikipediaUrl)
            .then(response => response.json())
            .then(data => ({
                name: 'Wikipedia',
                results: data.query.search
            }))
            .catch(error => console.error('Wikipedia Error:', error)),
        fetch(omdbUrl)
            .then(response => response.json())
            .then(data => ({
                name: 'OMDb',
                results: data.Search
            }))
            .catch(error => console.error('OMDb Error:', error)),
        fetch(newsApiUrl)
            .then(response => response.json())
            .then(data => ({
                name: 'News',
                results: data.articles
            }))
            .catch(error => console.error('News API Error:', error))
    ];

    Promise.all(promises)
        .then(results => {
            results.forEach(result => {
                const apiName = result.name;
                const apiResults = result.results;

                if (apiResults && apiResults.length > 0) {
                    const header = document.createElement('li');
                    header.textContent = `${apiName} Results:`;
                    header.style.fontWeight = 'bold';
                    searchResults.appendChild(header);

                    apiResults.forEach(item => {
                        const li = document.createElement('li');
                        if (apiName === 'GitHub') {
                            li.innerHTML = `<a href="${item.html_url}" target="_blank">${item.full_name}</a><p>${item.description}</p>`;
                        } else if (apiName === 'Wikipedia') {
                            li.innerHTML = `<a href="https://en.wikipedia.org/wiki/${item.title}" target="_blank">${item.title}</a><p>${item.snippet}</p>`;
                        } else if (apiName === 'OMDb') {
                            li.innerHTML = `<a href="https://www.imdb.com/title/${item.imdbID}" target="_blank">${item.Title}</a><p>${item.Year}</p>`;
                        } else if (apiName === 'News') {
                            li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a><p>${item.description}</p>`;
                        }
                        searchResults.appendChild(li);
                    });
                }
            });

            searchResults.style.display = 'block';
        })
        .catch(error => console.error('Error:', error));

}



// // Function to perform search
// function search() {
//     const searchInput = document.getElementById('searchInput').value.toLowerCase();
//     const searchResults = document.getElementById('searchResults');
//     searchResults.innerHTML = '';

//     if (searchInput.length === 0) {
//         searchResults.style.display = 'none';
//         return;
//     }

//     const githubUrl = `https://api.github.com/search/repositories?q=${searchInput}`;
//     const wikipediaUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchInput}`;
//     const omdbUrl = `https://www.omdbapi.com/?apikey=YOUR_OMDB_API_KEY&s=${searchInput}`; // Replace 'YOUR_OMDB_API_KEY' with your actual OMDb API key

//     const apiConfigs = {
//         'GitHub': {
//             url: githubUrl,
//             process: data => data.items.map(item => ({
//                 title: item.full_name,
//                 link: item.html_url,
//                 description: item.description
//             }))
//         },
//         'Wikipedia': {
//             url: wikipediaUrl,
//             process: data => data.query.search.map(item => ({
//                 title: item.title,
//                 link: `https://en.wikipedia.org/wiki/${item.title}`,
//                 description: item.snippet
//             }))
//         },
//         'OMDb': {
//             url: omdbUrl,
//             process: data => data.Search.map(item => ({
//                 title: item.Title,
//                 link: `https://www.imdb.com/title/${item.imdbID}`,
//                 description: `${item.Year} - ${item.Type}`
//             }))
//         }
//     };

//     const promises = Object.entries(apiConfigs).map(([apiName, config]) =>
//         fetch(config.url)
//             .then(response => response.json())
//             .then(data => ({
//                 name: apiName,
//                 results: config.process(data)
//             }))
//             .catch(error => console.error(`${apiName} Error:`, error))
//     );

//     Promise.all(promises)
//         .then(results => {
//             results.forEach(result => {
//                 const apiName = result.name;
//                 const apiResults = result.results;

//                 if (apiResults && apiResults.length > 0) {
//                     const header = document.createElement('li');
//                     header.textContent = `${apiName} Results:`;
//                     header.style.fontWeight = 'bold';
//                     searchResults.appendChild(header);

//                     apiResults.forEach(item => {
//                         const li = document.createElement('li');
//                         li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a><p>${item.description}</p>`;
//                         searchResults.appendChild(li);
//                     });
//                 }
//             });

//             searchResults.style.display = 'block';
//         })
//         .catch(error => console.error('Error:', error));
// }

