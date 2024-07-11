class Game {
  constructor(id, title, description, img, downloadLink) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.img = img;
    this.downloadLink = downloadLink;
  }
}

const app = new Vue({
  el: '#app',
  data: {
    search: '',
    games: [
      new Game(
        1,
        'Game 1',
        'Description for Game 1',
        'game1.jpg',
        'https://example.com/download/game1'
      ),
   
      new Game(
        1,
        'Game 2',
        'Description for Game 2',
        'game2.jpg',
        'https://example.com/download/game2'
      ),
         
      new Game(
        1,
        'Game 2',
        'Description for Game 2',
        'game2.jpg',
        'https://example.com/download/game2'
      ),
         
      new Game(
        1,
        'Game 2',
        'Description for Game 2',
        'game2.jpg',
        'https://example.com/download/game2'
      ),
         
      new Game(
        1,
        'Game 2',
        'Description for Game 2',
        'game2.jpg',
        'https://example.com/download/game2'
      ),
         
      new Game(
        1,
        'Game 2',
        'Description for Game 2',
        'game2.jpg',
        'https://example.com/download/game2'
      ),
         
      new Game(
        1,
        'Game 2',
        'Description for Game 2',
        'game2.jpg',
        'https://example.com/download/game2'
      ),
         
      new Game(
        1,
        'Game 2',
        'Description for Game 2',
        'game2.jpg',
        'https://example.com/download/game2'
      ),
         
      new Game(
        1,
        'Game 2',
        'Description for Game 2',
        'game2.jpg',
        'https://example.com/download/game2'
      ),

      // Add more games as needed
    ]
  },
  computed: {
    filteredList() {
      return this.games.filter(game => {
        return game.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    downloadGame(id) {
      // Implement download functionality here if needed
    }
  }
});
