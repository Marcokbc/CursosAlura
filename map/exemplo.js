const tvShows = [
    { name: 'Breaking Bad', releaseYear: 2008},
    { name: 'Mr. Robot', releaseYear: 2015},
    { name: 'Watchman', releaseYear: 2019}
];

const showNames = tvShows.map(tvShows => tvShows.name);
// const showNames = tvShows.map(({ name }) => name); Ele entende que o objeto referenciado é o retornado

console.log(showNames);