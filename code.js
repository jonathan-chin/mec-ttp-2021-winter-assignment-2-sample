/*
   MEC TTP 2021 Winter Assignment 2: War Game Engine

   Use this js file to write your project outline and your core game logic.
   You will use your browser's javascript console to interact with the game.

   Background: War is played between 2 players, they each have half of a deck
   of cards. They reveal the top card of their personal decks at the same time.
   The highest card wins. The winner takes both cards and they continue until
   one player runs out.

   # Purpose
   Have an interactive card game of war between 2 players using only the JS console.

   # Major Features / User Stories
   User must have half a deck of cards.
   User must be able to reveal a randomly chosen card.
   User must be able to put 3 cards face down first, and then reveal the next card.
   User must be able to lose / win / tie, and collect cards as needed.
   User must be able to see the state of the game.
   User must be able to reset.
   User must be able to start.

   deal_out_cards(){}
   play_one_hand(){}
   determine_outcome(){}
   collect_cards(){}
   state(){}
   reset(){}
   start(){}

   assume players are only using number cards, no suits
   assume players are drawing from the same deck
   assume no ties

 */

let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let wins = 0;
let losses = 0;
// let ties = 0;

let user_deck = [];
let ai_deck = [];

function deal_out_cards(){
    user_deck = [];
    ai_deck = [];
    for(let index = 0; index < deck.length; index++){
	// todo: make sure that the two player's decks are of equal length
	if(Math.random() < .5){
	    // give to the player
	    if(Math.random() < .5){
		user_deck.push(deck[index]);
	    }else{
		user_deck.unshift(deck[index]);
	    }
	}else{
	    // give to the ai
	    if(Math.random() < .5){
		ai_deck.push(deck[index]);
	    }else{
		ai_deck.unshift(deck[index]);
	    }
	}
	
    }
}

function play_one_hand(){
    return {
	user_card: user_deck.pop(),
	ai_card: ai_deck.pop()
    }
}

function determine_outcome(hand){
    if(hand.user_card > hand.ai_card){
	console.log('you won!');
	wins++;
    }else{
	console.log('sorry, you lost!');
	losses++;
    }
}


function start(){
    deal_out_cards();
    let hand = play_one_hand();
    console.log(hand);
    determine_outcome(hand);
}
