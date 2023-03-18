const {Player, ComputerPlayer, HumanPlayer} = require('./player.js');
const {Card, PainfulLesson, Spite, FullHeal, Switcheroo, Refresh, Peek} = require('./card.js');

class Game {
    _player1;
    _player2;

    constructor() {
        this._player1 = new HumanPlayer(Game.createDeck(), 'p1');
        this._player2 = new ComputerPlayer(Game.createDeck(), 'p2');

        this._player1.opponent = this._player2;
        this._player2.opponent = this._player1;
    }

    start() {
        let p1Lose = false;
        let p2Lose = false;

        let round = 1;
        while (true) {
            console.log("round "+ round);
            console.log("p1 health : " + this._player1.currentHealth)
            console.log("p1 deck : " + this._player1.deck.length)
            console.log("p1 hand : " + this._player1.hand.length)
            console.log("p2 health :" + this._player2.currentHealth)
            console.log("p2 deck :" + this._player2.deck.length)
            console.log("p1 hand : " + this._player1.hand.length)

            p1Lose = !(this._player1.drawCard());
            this._player1.myTurn();

            if(this._player2.currentHealth <= 0){
                p2Lose = true;
            }

            p2Lose = !(this._player2.drawCard());
            this._player2.myTurn();

            if(this._player1.currentHealth <= 0){
                p1Lose = true;
            }



            // p1Lose || p2Lose = !(!p1Lose && !p2Lose)

            if (p1Lose  || p2Lose){
                break;
            }
            round++;
        }

        console.log("game ends")


    }

    static createDeck() {
        let deck = [new PainfulLesson(), new PainfulLesson(), new PainfulLesson(),
            new PainfulLesson(), new PainfulLesson(), new Spite(), new Spite(),
            new Spite(), new Spite(), new Spite(), new Spite(), new FullHeal(),
            new Switcheroo(), new Switcheroo(), new Refresh(), new Refresh(),
            new Peek(), new Peek(), new Peek(), new Peek()];
        deck = Game.shuffleDeck(deck);
        return deck;
    }

    static shuffleDeck(deck) {
        deck.sort(() => Math.random() - 0.5)
        return deck;
    }
}


let game = new Game();


game.start();

