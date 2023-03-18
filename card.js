const {HumanPlayer, ComputerPlayer} = require("./player");

class Card {
    constructor() {

    }

    getName() {
        return "Card";
    }

    effectt(player) {
        console.log("not implemented");
    }

    static shuffleDeck(deck) {
        deck.sort(() => Math.random() - 0.5)
        return deck;
    }
}

class PainfulLesson extends Card {
    constructor() {
        super();
    }

    getName() {
        return "Painful Lesson";
    }

    effectt(player) {
        player.opponent.currentHealth -= 2;
        player.opponent.drawCard();
        player.opponent.drawCard();
    }

}

class Spite extends Card {
    constructor() {
        super();
    }

    getName() {
        return "Spite";
    }

    effectt(player) {
        player.opponent.currentHealth -= 1;
    }

    //toString() {
    //    return "Spite Object";
    //}

}

class FullHeal extends Card {
    constructor() {
        super();
    }

    getName() {
        return "Full Heal";
    }

    effectt(player) {
        player.currentHealth = 20;
    }
}

class Switcheroo extends Card {
    constructor() {
        super();
    }

    getName() {
        return "Switcheroo";
    }

    effectt(player) {
        let temp = player.hand;
        player.hand = player.opponent.hand;
        player.opponent.hand = temp;
    }
}

class Refresh extends Card {
    constructor() {
        super();
    }

    getName() {
        return "Refresh";
    }

    effectt(player) {
        player.currentHealth -= 3;
        player.hand = player.hand.concat(player.discardPile);
        player.discardPile = [];
        Card.shuffleDeck(player.hand);
    }
}

class Peek extends Card {
    constructor() {
        super();
    }

    getName() {
        return "Peek";
    }

    effectt(player) {
        console.log("Peak " + player.opponent.hand[0].getName());
    }
}

module.exports = {
    Card: Card,
    PainfulLesson: PainfulLesson,
    Spite: Spite,
    FullHeal: FullHeal,
    Switcheroo: Switcheroo,
    Refresh: Refresh,
    Peek: Peek
};