const test = QUnit.test;
QUnit.module('main ul item rendering');

test('render content to main UL', function(assert){
    //arrange
    function renderListItem(movie) {
        const template = document.createElement('template');
        const html = `<li class = "card">
        <a href="../detailview.html?id=${movie.id}">${movie.title}</a>
    </li>`;
        template.innerHTML = html;
        return template.content;
    }
    
    const movieData = {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95",
        "people": [
            "https://ghibliapi.herokuapp.com/people/"
        ],
        "species": [
            "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
        ],
        "locations": [
            "https://ghibliapi.herokuapp.com/locations/"
        ],
        "vehicles": [
            "https://ghibliapi.herokuapp.com/vehicles/"
        ],
        "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
    };
    //act
    const expected = `<li class="card">
    <a href="../detailview.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky</a>
 </li>`;
    
    const result = renderListItem(movieData);
    //assert
    assert.htmlEqual(result, expected);
});
