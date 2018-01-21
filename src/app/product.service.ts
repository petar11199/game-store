import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  visibleProducts = [];
  products: any[] = [
    {
      id: 1,
      category: 'base',
      title: 'Munchkin',
      subtitle: 'Base game',
      imageUrl: './assets/images/main-image.jpg',
      cardText: 'Go down in the dungeon. Kill everything you meet. Backstab your friends and steal their stuff. Grab the treasure and run.',
      description: 'Munchkin is the mega-hit card game about dungeon adventure . . .  with none of that stupid roleplaying stuff. You and your friends compete to kill monsters and grab magic items. And what magic items! Don the Horny Helmet and the Boots of Butt-Kicking. Wield the Staff of Napalm . . . or maybe the Chainsaw of Bloody Dismemberment. Start by slaughtering the Potted Plant and the Drooling Slime, and work your way up to the Plutonium Dragon . . . And its illustrated (now in full color!) by John Kovalic! Fast-playing and silly, Munchkin can reduce any roleplaying group to hysteria. And, while they are laughing, you can steal their stuff. For 3-6 players. (2 can play, but more is better). Playing time: about an hour. Designed by Steve Jackson. Illustrated by John Kovalic.',
      price: '24.95'
    },
    {
      id: 2,
      category: 'standalonedlc',
      title: 'Munchkin Axe Cop',
      subtitle: 'Standalone DLC game',
      imageUrl: './assets/images/prod-cop.png',
      cardText: 'Axe Cop is a cop. With an axe. And he knows how to use it.',
      description: 'Axe Cop is the hit webcomic written by Malachai Nicolle (age 5) and drawn by his brother Ethan (age 29). With his friends Dinosaur Soldier and Sockarang, Axe Cop fights crime! He hunts down the bad guys (like Giant Robot Zombie, Vampire Man Baby Kid, and Dr. Stinky Head) and CHOPS THEIR HEADS OFF. Just dont get blood on you, or you might turn into something totally different, like Bat Warthog Man or Avocado Warrior.Theres only one game that can match the anything-goes action of Axe Cop -- and its Munchkin. So clearly we had to bring you . . . Munchkin Axe Cop. Using original art from the series (and a few brand-new pieces by Ethan Nicolle), this game drops you into the world of Axe Cop.You know what to do. Chop the bad guys heads off and TAKE THEIR STUFF!',
      price: '23.95'
    },
    {
      id: 3,
      category: 'standalonedlc',
      title: 'Munchkin Conan',
      subtitle: 'Standalone DLC game',
      imageUrl: './assets/images/prod-conan.png',
      cardText: 'To kill the monsters and take their stuff!',
      description: 'Conan -- challenging the world, slaying monsters, defeating armies, laughing in the face of death. He steals the treasure, spends it, and steals more. Conan is THE Barbarian. Robert E. Howards epic hero gets the full Munchkin treatment in Munchkin Conan, the new core set written by Steve Jackson and illustrated by John Kovalic. Play a Cimmerian Warrior or a Stygian Wizard! Wield the Sword of the Phoenix and poison your foes with Black Lotus! Slay Thoth-Amons minions, Pict raiders, and abominable monsters, and hear the lamentations of their women!',
      price: '24.95'
    },
    {
      id: 4,
      category: 'standalonegame',
      title: 'Super Munchkin',
      subtitle: 'Standalone game',
      imageUrl: './assets/images/prod-super.png',
      cardText: 'Fly through the city. Smash the villains. Backstab your teammates and grab their gadgets.',
      description: 'Munchkin has parodied the classic dungeon, the kung-fu warrior, the space epic, and the creatures of the night. Now its the superheroes turn! Be a Mutant, an Exotic, a Mystic, or a Techno. The higher your Level, the more Powers you can have. Battle dastardly masterminds, devastating monsters, and invading aliens from the next dimension -- from the wimpy Bucketman all the way up to Big Ol Planet Eater Guy himself -- and TAKE THEIR STUFF! With the Electro-Mento-Hat, the Telezapinator, and the (jet-powered) Pogo Stick, no foe can stand before you! Super Munchkin is a stand-alone game, which (of course) can be combined with other Munchkin games. Designed by Steve Jackson and illustrated by John Kovalic, this one is destined to RULE THE WORLD! Mwahahaha!',
      price: '25.95'
    },
    {
      id: 5,
      category: 'standalonedlc',
      title: 'Munchkin Impossible',
      subtitle: 'Standalone DLC game',
      imageUrl: './assets/images/prod-impossible.jpg',
      cardText: 'Now the Munchkins are spies . . . eliminating the opposition, playing with self-destructing gadgets, and changing loyalties even faster than they change Headgear.',
      description: 'Be a Playboy, Tourist, or Assassin. Report to the Americans, Russians, British, or Chinese (itll change!). Wield gadgets from the subtle Cigarette Dart Gun to the amazingly unsubtle Bazooka with Incendiary Ammo. Eliminate foes, from the pathetic Defective Defector, through the Interro-Gator and the Not So Secret Police, up to the mighty Super Spy himself. And (all together now) . . . Take Their Stuff! You can play Munchkin Impossible by itself, or combine it with any number of other Munchkin games for more shameless silliness.',
      price: '24.95'
    },
    {
      id: 6,
      category: 'standalonedlc',
      title: 'Munchkin Pathfinder',
      subtitle: 'Standalone DLC game',
      imageUrl: './assets/images/prod-pathfinder.jpg',
      cardText: 'The award-winning game of killing monsters and taking their stuff meets the award-winning universe of the Pathfinder Roleplaying Game in Munchkin Pathfinder!',
      description: 'Try out new classes like Alchemist and Witch. Join a faction to become an Eagle Knight or a Red Mantis Assassin. Arm yourself with the T-Bone Stake and the Armor of Insults. Youll need them to defeat the Ghoul Friday, the Whispering Tyrant, and especially Lamashtu, the Mother of Monsters. But first you will have to fight your way through all those goblins . . . and kill them and take their stuff. Pathfinder-related characters, plots, themes, and locations are copyright © 2002–2013 by Paizo Inc. All rights reserved. Paizo Inc., Paizo, the Paizo golem logo, Pathfinder, and the Pathfinder logo are registered trademarks of Paizo Inc., and are used under license.',
      price: '19.95'
    },
    {
      id: 7,
      category: 'standalonedlc',
      title: 'Munchkin Apocalypse',
      subtitle: 'Standalone DLC game',
      imageUrl: './assets/images/prod-apocalypse.jpg',
      cardText: 'Its the end of the world!',
      description: 'In Munchkin Apocalypse, every possible natural (and unnatural) disaster has happened . . . or will happen during the game. You are a rugged survivor in a world full of people -- and things -- that want to kill you and take your stuff. So do it to them first! This set introduces four new classes and a new, yet eerily familiar, card type: Disasters! And what is with all these seals running around? Dont they know the worlds about to end? You should really keep an eye on that seventh one in particular . . . You should have a few weeks to play it before the world really ends, at least if the Mayans are right . . .',
      price: '22.95'
    }
  ];

  getProduct(id: number) {
    return this.products.slice(0).find(product => product.id == id)
  }

  getProducts(){
    return this.visibleProducts = this.products.slice(0);
  }
}