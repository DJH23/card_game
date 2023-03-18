const prompt = require('prompt-sync')();

class Player {
    _opponent;
    _currentHealth;
    _deck;
    _hand;
    _discardPile;
    name;

    constructor(deck, name) {
        this._currentHealth = 20;
        this._deck = deck;
        this._hand = [];
        this._discardPile = [];
        this.name = name;
    }

    get opponent() {
        return this._opponent;
    }

    set opponent(player) {
        this._opponent = player;

    }

    get currentHealth() {
        return this._currentHealth;
    }

    set currentHealth(value) {
        this._currentHealth = value;
    }

    get hand() {
        return this._hand;
    }

    set hand(value) {
        this._hand = value;
    }

    get discardPile() {
        return this._discardPile;
    }

    set discardPile(value) {
        this._discardPile = value;
    }

    get deck() {
        return this._deck;
    }

    set deck(value) {
        this._deck = value;
    }

    drawCard() {
        if (this.deck.length == 0) {
            return false;
        } else {
            this.hand.push(this.deck.splice(0, 1)[0]);
            console.log(this.name + " draws ");
            return true;
        }
    }

    playCard(card) {
        card.effectt(this);
        console.log(this.name + " plays " + card.getName())
    }

    myTurn() {

    }

}

class ComputerPlayer extends Player {
    constructor(deck, name) {
        super(deck, name);
    }

    myTurn() {

        while (this.hand.length > 5) {

            let randomC = this.hand.splice(Math.floor(Math.random() * this.hand.length), 1);

            this.playCard(randomC[0]);

            if (Math.random() < 0.5) {
                break;
            }

        }
    }

}

class HumanPlayer extends Player {
    constructor(deck, name) {
        super(deck, name);
    }

    myTurn() {
        while (this.hand.length > 5) {
            console.log("Choose a card from your hand")
            for (let i = 0; i < this.hand.length; i++) {
                console.log(i + " - " + this.hand[i].getName());
            }
            let choice = parseInt(prompt());

            let userC = this.hand.splice(choice, 1);

            this.playCard(userC[0]);

            if (this.hand.length > 5) {
                console.log("[C]ontinue or [P]ass")

                let pass = prompt();
                if (pass === "P") {
                    break;
                }
            }
        }
    }


}

module.exports = {
    Player: Player,
    ComputerPlayer: ComputerPlayer,
    HumanPlayer: HumanPlayer
};

