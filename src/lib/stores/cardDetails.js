// @ts-ignore
import { writable } from 'svelte/store';

const cardDetails = writable({
  // Humans
  emperor: {
    title: 'emperor',
    displayTitle: 'Emperor',
    points: 10,
    amount: 1,
    rarity: 'legendary',
    traitTitle: 'Unity Pact',
    trait: "Human points are doubled and all races in your hand except xenos will count towards your final score.",
    description: 'The leader of the human race.',
    race: 'human',
    image: '/humans/emperor.png'
  },
  commander: {
    title: 'commander',
    displayTitle: 'Commander',
    points: 7,
    amount: 2,
    rarity: 'epic',
    traitTitle: 'Rally',
    trait: 'When the commander is in your hand, all humans you have will receive +1 point, including commanders. This effect also stacks with the emperor.',
    description: 'Powerful soldier second only to the emperor.',
    race: 'human',
    image: '/humans/commander.png'
  },
  assassin: {
    title: 'assassin',
    displayTitle: 'Assassin',
    points: 6,
    amount: 3,
    rarity: 'amazing',
    traitTitle: '',
    trait: '',
    description: 'A highly skilled professional killer.',
    race: 'human',
    image: '/humans/assassin.png'
  },
  knight: {
    title: 'knight',
    displayTitle: 'Knight',
    points: 5,
    amount: 4,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'A middle ranked soldier.',
    race: 'human',
    image: '/humans/knight.png'
  },
  soldier: {
    title: 'soldier',
    displayTitle: 'Soldier',
    points: 4,
    amount: 4,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'A low ranked soldier.',
    race: 'human',
    image: '/humans/soldier.png'
  },
  scout: {
    title: 'scout',
    displayTitle: 'Scout',
    points: 3,
    amount: 4,
    rarity: 'common',
    traitTitle: '',
    trait: '',
    description: 'The lowest ranked in the human army.',
    race: 'human',
    image: '/humans/scout.png'
  },
  villager: {
    title: 'villager',
    displayTitle: 'Villager',
    points: 1,
    amount: 2,
    rarity: 'common',
    traitTitle: '',
    trait: '',
    description: 'An innocent villager.',
    race: 'human',
    image: '/humans/villager.png'
  },
  villager2: {
    title: 'villager2',
    displayTitle: 'Villager',
    points: 1,
    amount: 2,
    rarity: 'common',
    traitTitle: '',
    trait: '',
    description: 'An innocent villager.',
    race: 'human',
    image: '/humans/villager2.png'
  },

  // Goblins
  goblinLord: {
    title: 'goblinLord',
    displayTitle: 'Goblin Lord',
    points: 11,
    amount: 1,
    rarity: 'legendary',
    traitTitle: 'Gobbledegook',
    trait: "If your hand contains only goblins, you receive an insane amount of bonus points, doesn't count goblin lord's mark. Beware, the elf king can block this trait, resulting in a draw.",
    description: 'The leader of the goblins.',
    race: 'goblin',
    image: '/goblins/goblin-lord.gif'
  },
  goblinLordsMark: {
    title: 'goblinLordsMark',
    displayTitle: "Goblin Lord's Mark",
    points: 0,
    amount: 1,
    rarity: 'epic',
    traitTitle: "Death's Mark",
    trait: 'Draw the goblin lord next turn, only applies if this card is drawn. If no goblin lord, draw a goblin.',
    description: 'A sign that the goblin lord is near.',
    race: 'goblin-ish',
    image: '/goblins/goblin-lord_mark.png'
  },
  warchief: {
    title: 'warchief',
    displayTitle: 'Warchief',
    points: 8,
    amount: 1,
    rarity: 'epic',
    traitTitle: "Chieftain's call",
    trait: "The next card drawn will be the goblin lord's mark, if it's still in the deck.",
    description: 'Born in battle, this brutal war hungry goblin is second only to the goblin lord himself.',
    race: 'goblin',
    image: '/goblins/warchief.png'
  },
  troll: {
    title: 'troll',
    displayTitle: 'Troll',
    points: 7,
    amount: 3,
    rarity: 'amazing',
    traitTitle: '',
    trait: '',
    description: 'Loyal high ranked soldier in the goblin army.',
    race: 'goblin',
    image: '/goblins/troll.png'
  },
  shaman: {
    title: 'shaman',
    displayTitle: 'Shaman',
    points: 6,
    amount: 3,
    rarity: 'rare',
    traitTitle: '',
    trait: '',
    description: 'A magic wielding goblin.',
    race: 'goblin',
    image: '/goblins/shaman.png'
  },
  thief: {
    title: 'thief',
    displayTitle: 'Thief',
    points: 4,
    amount: 3,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'A quick, elusive but weak goblin.',
    race: 'goblin',
    image: '/goblins/thief.png'
  },
  hobgoblin: {
    title: 'hobgoblin',
    displayTitle: 'Hobgoblin',
    points: 3,
    amount: 3,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'A low ranked goblin.',
    race: 'goblin',
    image: '/goblins/hobgoblin.png'
  },
  bokoblin: {
    title: 'bokoblin',
    displayTitle: 'Bokoblin',
    points: 2,
    amount: 3,
    rarity: 'common',
    traitTitle: '',
    trait: '',
    description: 'The weakest of goblins.',
    race: 'goblin',
    image: '/goblins/bokoblin.png'
  },

  // Elves
  elfKing: {
    title: 'elfKing',
    displayTitle: 'Elf King',
    points: 12,
    amount: 1,
    rarity: 'legendary',
    traitTitle: 'Superior Race',
    trait: "If your hand contains only elves, they will have their points trippled, otherwise doubled! The elf king also prevents the enemy from using the goblin lord's special trait.",
    description: 'The purest, most powerful and respected leader of the elves.',
    race: 'elf',
    image: '/elves/elf_king.png'
  },
  elfChampion: {
    title: 'elfChampion',
    displayTitle: 'Elf Champion',
    points: 10,
    amount: 1,
    rarity: 'epic',
    traitTitle: 'Stand Guard',
    trait: 'The elf champion is always the first elf drawn.',
    description: 'Destined to be the next elf king, this elf champion lost an arm in battle and came back even more fierce.',
    race: 'elf',
    image: '/elves/elf_champion.png'
  },
  darkElf: {
    title: 'darkElf',
    displayTitle: 'Dark Elf',
    points: 7,
    amount: 3,
    rarity: 'amazing',
    traitTitle: '',
    trait: '',
    description: 'High ranked powerful elf.',
    race: 'elf',
    image: '/elves/dark_elf.png'
  },
  highElf: {
    title: 'highElf',
    displayTitle: 'High Elf',
    points: 6,
    amount: 3,
    rarity: 'amazing',
    traitTitle: '',
    trait: '',
    description: "An elf in tune with nature, they're quite strong..",
    race: 'elf',
    image: '/elves/high_elf.png'
  },
  nadallen: {
    title: 'nadallen',
    displayTitle: 'Nadallen',
    points: 5,
    amount: 1,
    rarity: 'rare',
    traitTitle: 'Twin Power',
    trait: 'If both Nelladan and Nadallen are in your hand, they both receive +5 bonus points. This effect does not stack with itself or the elf king.',
    description: 'The stronger half of the rare elvan twins.',
    race: 'elf',
    image: '/elves/nadallen.png'
  },
  nelladan: {
    title: 'nelladan',
    displayTitle: 'Nelladan',
    points: 2,
    amount: 4,
    rarity: 'uncommon',
    traitTitle: 'Twin Power',
    trait: 'If both Nelladan and Nadallen are in your hand, they both receive +5 bonus points. This effect does not stack with itself or the elf king.',
    description: 'A rare elvan twin.',
    race: 'elf',
    image: '/elves/nelladan.png'
  },
  woodElf: {
    title: 'woodElf',
    displayTitle: 'Wood Elf',
    points: 4,
    amount: 4,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'An elf who aspires to be a forest dwelling elf.',
    race: 'elf',
    image: '/elves/wood_elf.png'
  },
  forestDweller: {
    title: 'forestDweller',
    displayTitle: 'Wild Elf',
    points: 3,
    amount: 3,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'An elf with no social status.',
    race: 'elf',
    image: '/elves/forest_dweller.png'
  },
  bard: {
    title: 'bard',
    displayTitle: 'Bard',
    points: 1,
    amount: 3,
    rarity: 'common',
    traitTitle: '',
    trait: '',
    description: 'A weak musician.',
    race: 'elf',
    image: '/elves/bard.png'
  },

  // Dwarves
  longbeardLeader: {
    title: 'longbeardLeader',
    displayTitle: 'Longbeard Leader',
    points: 11,
    amount: 1,
    rarity: 'legendary',
    traitTitle: 'Drunken revenge',
    trait: 'If drawn, the next card will be a dwarf. Additionally, gain 5 points for every discarded dwarf.',
    description: 'The bravest and most feared amongst the dwarves.',
    race: 'dwarf',
    image: '/dwarves/longbeard-leader.gif'
  },
  dwarfCommander:  {
    title: 'dwarfCommander',
    displayTitle: 'Dwarf Commander',
    points: 8,
    amount: 2,
    rarity: 'epic',
    traitTitle: 'Recruit',
    trait: 'If drawn, the next card will be a dwarf. Has no effect if there are no remaining dwarves.',
    description: 'Right hand man to the longbeard leader himself.',
    race: 'dwarf',
    image: '/dwarves/dwarf-commander.png'
  },
  alchemist: {
    title: 'alchemist',
    displayTitle: 'Alchemist',
    points: 7,
    amount: 2,
    rarity: 'amazing',
    traitTitle: 'Another Round',
    trait: '50% chance to draw a dwarf next turn when discarded, does not stack.',
    description: 'A dwarven warrior wielding science as magic.',
    race: 'dwarf',
    image: '/dwarves/alchemist.png'
  },
  dwarfWarrior: {
    title: 'dwarfWarrior',
    displayTitle: 'Dwarf Warrior',
    points: 6,
    amount: 2,
    rarity: 'amazing',
    traitTitle: '',
    trait: '',
    description: 'A strong and reliable dwarven warrior.',
    race: 'dwarf',
    image: '/dwarves/warrior.png'
  },
  hunter: {
    title: 'hunter',
    displayTitle: 'Hunter',
    points: 5,
    amount: 3,
    rarity: 'rare',
    traitTitle: '',
    trait: '',
    description: 'A strong and capable hunter.',
    race: 'dwarf',
    image: '/dwarves/hunter.png'
  },
  traveller: {
    title: 'traveller',
    displayTitle: 'Traveller',
    points: 4,
    amount: 2,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'An adventurous but feeble dwarf.',
    race: 'dwarf',
    image: '/dwarves/traveller.png'
  },
  miner: {
    title: 'miner',
    displayTitle: 'Miner',
    points: 3,
    amount: 3,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'An average miner, not great in a fight.',
    race: 'dwarf',
    image: '/dwarves/miner.png'
  },
  blacksmith: {
    title: 'blacksmith',
    displayTitle: 'Blacksmith',
    points: 3,
    amount: 2,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'A typical blacksmith, not very strong.',
    race: 'dwarf',
    image: '/dwarves/blacksmith.png'
  },
  hobbit: {
    title: 'hobbit',
    displayTitle: 'Hobbit',
    points: 2,
    amount: 3,
    rarity: 'uncommon',
    traitTitle: 'Half and half.',
    trait: 'Hobbit points count towards both dwarves and humans.',
    description: "Half dwarf, half human. Although rare and different, they're generally accepted by all dwarves.",
    race: 'dwarf',
    image: '/dwarves/hobbit.png'
  },
  bartender: {
    title: 'bartender',
    displayTitle: 'Bartender',
    points: 1,
    amount: 2,
    rarity: 'common',
    traitTitle: '',
    trait: '',
    description: 'A popular dwarf at the local pub, a serious drinker even amongst dwarves..',
    race: 'dwarf',
    image: '/dwarves/bartender.png'
  },


  // Bots
  ai: {
    title: 'ai',
    displayTitle: 'A.I.',
    points: 11,
    amount: 1,
    rarity: 'legendary',
    traitTitle: 'Binary Manipulator',
    trait: 'ALL bots will receive +2 points, effectively quarantining viruses. Additionally, A.I. will hack all bots and steal their points.',
    description: 'The core of the modern bot society, excels in probability computation and hacking.',
    race: 'bot',
    image: '/bots/ai.png'
  },
  protectron: {
    title: 'protectron',
    displayTitle: 'Protectron',
    points: 9,
    amount: 2,
    rarity: 'epic',
    traitTitle: 'Antivirus',
    trait: 'Reprograms viruses into helpful programs, setting their point value to 6. Protectron will also receive +1 point for every reprogrammed virus.',
    description: 'The most advanced battle bot and previous leader of the bots until A.I. took over, now second in command.',
    race: 'bot',
    image: '/bots/protectron.png'
  },
  sawBot: {
    title: 'sawBot',
    displayTitle: 'Sawbot-3000',
    points: 7,
    amount: 4,
    rarity: 'rare',
    traitTitle: '',
    trait: '',
    description: 'A bot designed to kill humans and trees, but mostly humans, beware.',
    race: 'bot',
    image: '/bots/saw-bot.png'
  },
  faeBot: {
    title: 'faeBot',
    displayTitle: 'Fae Bot',
    points: 6,
    amount: 3,
    rarity: 'amazing',
    traitTitle: '',
    trait: '',
    description: 'A bot created as a gift to the elves as a peace treaty.',
    race: 'bot',
    image: '/bots/fae-bot.png'
  },
  killBot: {
    title: 'killBot',
    displayTitle: 'Kill Bot',
    points: 5,
    amount: 4,
    rarity: 'rare',
    traitTitle: '',
    trait: '',
    description: 'An aggressive bot, known to attack on sight.',
    race: 'bot',
    image: '/bots/kill-bot.png'
  },
  incuBot: {
    title: 'incuBot',
    displayTitle: 'Incu Bot',
    points: 2,
    amount: 4,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'A weak incubator bot used to repair small bots.',
    race: 'bot',
    image: '/bots/incu-bot.png'
  },
  virus: {
    title: 'virus',
    displayTitle: 'Virus',
    points: -2,
    amount: 6,
    rarity: 'common',
    traitTitle: '',
    trait: '',
    description: 'A common computer virus, can be reprogrammed by protectron or quarantined A.I.',
    race: 'bot',
    image: '/bots/virus.png'
  },

  // Beasts
  dreamDestroyer: {
    title: 'dreamDestroyer',
    displayTitle: 'Dream Destroyer',
    points: 12,
    amount: 1,
    rarity: 'legendary',
    traitTitle: '🤬Roid Rage🤬',
    trait: 'All of your beasts are worth 12 points.',
    description: 'The fiercest creature in the animal kingdom.',
    race: 'beast',
    image: '/beasts/dream-destroyer.gif'
  },
  rhino: {
    title: 'rhino',
    displayTitle: 'Rhinestone',
    points: 10,
    amount: 3,
    rarity: 'amazing',
    traitTitle: 'Thick skin',
    trait: 'Blocks all endgame trap cards.',
    description: 'A feared beast at the top of the food chain.',
    race: 'beast',
    image: '/beasts/rhino.png'
  },
  bear: {
    title: 'bear',
    displayTitle: 'Theo Thunderpaw',
    points: 9,
    amount: 3,
    rarity: 'amazing',
    traitTitle: '',
    trait: '',
    description: 'A powerful top level beast, matched by few.',
    race: 'beast',
    image: '/beasts/bear.png'
  },
  lion: {
    title: 'lion',
    displayTitle: 'Goldenmane',
    points: 8,
    amount: 3,
    rarity: 'rare',
    traitTitle: '',
    trait: '',
    description: 'The original kings of the jungle.',
    race: 'beast',
    image: '/beasts/lion.png'
  },
  panther: {
    title: 'panther',
    displayTitle: 'Panth Nocturna',
    points: 7,
    amount: 3,
    rarity: 'rare',
    traitTitle: '',
    trait: '',
    description: "A quick and efficient beast, known to stalk it's prey before pouncing.",
    race: 'beast',
    image: '/beasts/panther.png'
  },
  wolf: {
    title: 'wolf',
    displayTitle: 'Alpha Wolfbane',
    points: 6,
    amount: 3,
    rarity: 'rare',
    traitTitle: '',
    trait: '',
    description: 'A lone wolf with the strength of a pack.',
    race: 'beast',
    image: '/beasts/wolf.png'
  },
  fox: {
    title: 'fox',
    displayTitle: 'Finn Foxglove',
    points: 5,
    amount: 3,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'A fox on steroids.',
    race: 'beast',
    image: '/beasts/fox.png'
  },
  dog: {
    title: 'dog',
    displayTitle: 'Pawl Barkington',
    points: 4,
    amount: 3,
    rarity: 'uncommon',
    traitTitle: '',
    trait: '',
    description: 'More bark than bite, recognized as the weakest beast.',
    race: 'beast',
    image: '/beasts/dog.png'
  },

  // Xenos (Alien hive colony)
  xenoGuard: {
    title: 'xenoGuard',
    displayTitle: 'Xeno Guard',
    points: 15,
    amount: 3,
    rarity: 'epic',
    traitTitle: 'Antibodies',
    trait: 'Blocks all ALLY end game boost cards.',
    description: 'The xenoGuard is a highly intelligent and powerful creature, feared by many. It is the most feared creature in the xeno hive, tasked with the safety of the xeno overlord.',
    race: 'xeno',
    image: '/xenos/xeno_guard.png'
  },
  abyssolarian: {
    title: 'abyssolarian',
    displayTitle: 'Abyssolarian',
    points: 10,
    amount: 3,
    rarity: 'epic',
    traitTitle: '',
    trait: '',
    description: 'A feral xeno born in the darkest depths of Xenopp. Produces light to lure prey.',
    race: 'xeno',
    image: '/xenos/abyssolarian.png'
  },
  warpstalker: {
    title: 'warpstalker',
    displayTitle: 'Warpstalker',
    points: 0, // random between 7-13
    amount: 3,
    rarity: 'epic',
    traitTitle: 'Hive Resonance',
    trait: 'When drawn, a random point value (7-13 inclusive) will be chosen, then applied to ALL ally warpstalkers.',
    description: 'A xeno capable of riftwalking, similar to teleporting over short distances. Sometimes riftwalks to the wrong place.',
    race: 'xeno',
    image: '/xenos/xeno_placeholder.png'
  },
  voidRunner: {
    title: 'voidRunner',
    displayTitle: 'Void Runner',
    points: 0, // increases by 1 per turn passed
    amount: 3,
    rarity: 'epic',
    traitTitle: 'Hive Unity',
    trait: "When drawn, ALL ally void Runners' points are set to the number of turns passed.",
    description: "A non sentient xeno who's only purpose is to run and grow stronger. If it ever stops it will die.",
    race: 'xeno',
    image: '/xenos/xeno_placeholder.png'
  },
  nebulite: {
    title: 'nebulite',
    displayTitle: 'Nebulite',
    points: 0,
    amount: 3,
    rarity: 'epic',
    traitTitle: 'Hive Blossom',
    trait: 'Buffs all xenos by +4, does not apply to self and does not stack with other Nebulites.',
    description: 'Artificially created xenos incapable of speech.',
    race: 'xeno',
    image: '/xenos/xeno_placeholder.png'
  },
  celenial: {
    title: 'celenial',
    displayTitle: 'Celenial',
    points: 5,
    amount: 3,
    rarity: 'amazing',
    traitTitle: '',
    trait: '',
    description: 'The lowest of the xenos, often mistreated. Excluding the nebulites, celenials are the weakest of the xenos, often used as bait for the abyssolarians.',
    race: 'xeno',
    image: '/xenos/xeno_placeholder.png'
  },

  // Boosts Cards:
  chastity: {
    title: 'chastity',
    displayTitle: 'Chastity',
    points: 0,
    amount: 1,
    rarity: '',
    traitTitle: 'Purity',
    trait: 'Active immediately even if discarded. Blocks all trap cards except Corruption, only one exists in deck. If acquired by switcharoo, only active while in hand.',
    description: '',
    race: 'boost',
    image: '/boosts/rainbow_boost.png'
  },
  rejuvenate: {
    title: 'rejuvenate',
    displayTitle: 'Rejuvenate',
    points: 0,
    amount: 2,
    rarity: '',
    traitTitle: 'Rejuvenation',
    trait: 'If drawn, player gains 10 points at the end of the game even after this card is discarded',
    description: '',
    race: 'boost',
    image: '/boosts/blue_boost.png'
  },
  dwarvenCall: {
    title: 'dwarvenCall',
    displayTitle: 'Dwarven Call',
    points: 0,
    amount: 2,
    rarity: '',
    traitTitle: 'Last Call',
    trait: 'If drawn, next card drawn is a dwarf. If no dwarves are left, draw random card.',
    description: '',
    race: 'boost',
    image: '/boosts/ale.png'
  },
  charge: {
    title: 'charge',
    displayTitle: 'Charge',
    points: 0,
    amount: 2,
    rarity: '',
    traitTitle: 'Recharge',
    trait: 'Only affects bots and humans. If drawn, at the end of the game, gain points equal to (amount of turns - turns passed since drawn * charge cards) even if discarded.',
    description: '',
    race: 'boost',
    image: '/boosts/charge.png'
  },

  // Trap Cards
  corruption: {
    title: 'corruption',
    displayTitle: 'Corruption',
    points: 0,
    amount: 1,
    rarity: '',
    traitTitle: 'Impurity',
    trait: 'Active immediately even if discarded. Blocks all boost cards except Chastity, only one exists in deck. If acquired by switcharoo, only active while in hand.',
    description: '',
    race: 'trap',
    image: '/boosts/rainbow_boost.png'
  },
  sap: {
    title: 'sap',
    displayTitle: 'Sap',
    points: 0,
    amount: 2,
    rarity: '',
    traitTitle: 'Sapped',
    trait: 'If drawn, player loses 10 points at the end of the game even after this card is discarded.',
    description: '',
    race: 'trap',
    image: '/traps/red_trap.png'
  },
  xenophobia: {
    title: 'xenophobia',
    displayTitle: 'Xenophobia',
    points: 0,
    amount: 1,
    rarity: '',
    traitTitle: 'Dissociate',
    trait: 'If drawn, xenos lose 10 points at the end of the game even after this card is discarded.',
    description: '',
    race: 'trap',
    image: '/traps/xeno_trap.png'
  },
  infect: {
    title: 'infect',
    displayTitle: 'Infect',
    points: 0,
    amount: 2,
    rarity: '',
    traitTitle: 'Infection',
    trait: 'Does not affect bots. If drawn, at the end of the game, lose points equal to (amount of turns - turns passed since drawn * infect cards) even if discarded.',
    description: '',
    race: 'trap',
    image: '/traps/green_trap.png'
  },
  lost: {
    title: 'lost',
    displayTitle: 'Lost',
    points: 0,
    amount: 2,
    rarity: '',
    traitTitle: 'Lost',
    trait: 'If drawn, lose a turn because this card is useless.',
    description: '',
    race: 'trap',
    image: '/traps/white_trap.png'
  },
  exposed: {
    title: 'exposed',
    displayTitle: 'Exposed',
    points: 0,
    amount: 1,
    rarity: '',
    traitTitle: 'Expose',
    trait: 'If drawn, your hand is exposed until your next turn, unless you have a card that blocks traps.',
    description: '',
    race: 'trap',
    image: '/traps/camo_trap.png'
  },

  // Neutrals
  neutralize: {
    title: 'neutralize',
    displayTitle: 'Neutralize',
    points: 0,
    amount: 1,
    rarity: '',
    traitTitle: 'Neutralize',
    trait: "When drawn, all boosts and traps in effect are neutralized. Only 1 in deck.",
    description: '',
    race: 'neutral',
    image: '/neutrals/neutralize.png'
  },
  switcharoo: {
    title: 'switcharoo',
    displayTitle: 'Switcharoo',
    points: 0,
    amount: 2,
    rarity: '',
    traitTitle: 'Swap Swap',
    trait: "When discarded, players will swap hands unless player has over 6 cards or gobbledegook declared. For special xeno cards(e.g. Void Runner) they will receive the new player's point value for that card, not the previous value.",
    description: '',
    race: 'neutral',
    image: '/neutrals/switcharoo.png'
  },
  echo: {
    title: 'echo',
    displayTitle: 'Echo',
    points: 0,
    amount: 3,
    rarity: '',
    traitTitle: 'Echo Echo',
    trait: "If drawn, player can draw another card, maximum 7. Discarding echos prolongs this, when you discard a non echo card, you will need to continue discarding down to 5 cards.",
    description: '',
    race: 'neutral',
    image: '/neutrals/echo.png'
  },
  ticktock: {
    title: 'ticktock',
    displayTitle: 'Ticktock',
    points: 0,
    amount: 2,
    rarity: '',
    traitTitle: 'Chrono Charge',
    trait: "If drawn, adds 3 turns.",
    description: '',
    race: 'neutral',
    image: '/neutrals/ticktock.png'
  },
  vision: {
    title: 'vision',
    displayTitle: 'Vision',
    points: 0,
    amount: 3,
    rarity: '',
    traitTitle: 'Envision',
    trait: "If drawn, see the opponents cards for the duration of your turn.",
    description: '',
    race: 'neutral',
    image: '/neutrals/vision.png'
  },
  xenoBloom: {
    title: 'xenoBloom',
    displayTitle: 'Xeno Bloom',
    points: 0,
    amount: 1,
    rarity: '',
    traitTitle: 'Bloom',
    trait: "If drawn, both players receive +15 bonus xeno points at the end of the game.",
    description: '',
    race: 'neutral',
    image: '/neutrals/xeno_bloom.png'
  },
});

export default cardDetails;