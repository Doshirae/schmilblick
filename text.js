window.onload = function() {

	//  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
	//  Although it will work fine with this tutorial, it's almost certainly not the most current version.
	//  Be sure to replace it with an updated version before you start experimenting with adding your own code.

	var game = new Phaser.Game(950, 650, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

	function preload () {

		game.stage.backgroundColor = '#85b5e1';
		game.load.crossOrigin = 'anonymous';
		// game.load.image('monstre','images/monstre');

	}


	//var keycodes = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

	var word;
	var word2;
	var correct = [];
	var words = [];

	function create () {
		var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
		for (var i = 0; i < words.length; i++){
			correct[words[i]] = false;
		}

		word = game.add.text(game.world.centerX-300, 0, "salut", style);
		word2 = game.add.text(game.world.centerX-300, 50, "mystere", style);

		game.input.keyboard.addCallbacks(this, null, null, keyPressAlt);

		words = [word, word2];

	}

	function update () {

	}

	function keyPress(char) {

		//  Loop through each letter of the word being entered and check them against the key that was pressed
		for (var i = 0; i < words.length; i++){
			var mot = words[i]
			var letter = mot.text[0];

			//  If they pressed one of the letters in the word, flag it as correct
			if (char === letter){
				correct[letter] = true;
			}

			if (correct[letter]){
				removeFirstLetter(mot);
			}
		}

	}


	function removeFirstLetter(mot){
		var newText = "";
		for(var i = 1; i< mot.text.length; i++){
			newText += mot.text[i];
		}

		mot.setText(newText);
	}

	function render() {
	}

};
