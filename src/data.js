export const Player = [
    {
        id: 0,
        playername: 'Player 1',
        border: 'bg-frame-default',
    }
]

export const BetaArsenal = [
	{
        id: 0,
        number: 1,
		name: "cebollurl",
        splashart: "bg-cebollurl",
        description: "O bolbo faminto por carne",
		class: ["Flora", "Aqua"],
		stats: {hp: 84, atk: 87, def: 100, spe: 59},
        moves: [ 7, 8 ]
	},
    {
        id: 1,
        number: 5,
		name: "rasputin",
        splashart: "bg-rasputin",
        description: "O pairador de águas profundas",
		class: ["Aqua"],
        stats: {hp: 157, atk: 100, def: 168, spe: 100},
        moves: [ 4, 2 ]
    },
    {
        id: 2,
        number: 7,
		name: "marry",
        splashart: "bg-marry",
        description: "A druida ancestral",
		class: ["Bruja"],
        stats: {hp: 200, atk: 106, def: 100, spe: 119},
        moves: [ 3, 6 ]
    }
]

/*
export const Arsenal = [
	{
        id: 0,
        number: 1,
		name: "cebollurl",
        description: "O bolbo faminto por carne",
		class: ["Flora", "Water"],
		stats: {hp: 84, atk: 87, def: 100, spe: 59},
	},
    {
        id: 1,
        number : 2,
		name: "oniette",
        description: "A bolbo de corte rápido",
		class: ["Flora", "Water"],
		stats: {hp: 60, atk: 127, def: 73, spe: 70},
	},
    {
        id: 2,
        number: 3,
		name: "rei cebollurl",
        description: "O líder da horda de bolbos devoradores",
		class: ["Flora", "King"],
        stats: {hp: 124, atk: 151, def: 143, spe: 107},
    },
    {
        id: 3,
        number: 4,
		name: "rei oniette",
        description: "A líder da horda de bolbos caçadores de larvas",
		class: ["Flora", "King"],
        stats: {hp: 110, atk: 180, def: 100, spe: 160},
    },
    {
        id: 4,
        number: 5,
		name: "rasputin",
        description: "O pairador de águas profundas",
		class: ["Water"],
        stats: {hp: 157, atk: 100, def: 168, spe: 100},
    },
    {
        id: 5,
        number: 6,
		name: "ange",
        description: "A tormenta florestal",
		class: ["Tormented"],
        stats: {hp: 90, atk: 187, def: 100, spe: 148},
    },
    {
        id: 6,
        number: 7,
		name: "marry",
        description: "A drúida ancestral",
		class: ["Witch"],
        stats: {hp: 200, atk: 106, def: 100, spe: 119},
    },
    {
        id: 7,
        number: 8,
		name: "serena",
        description: "A cepa letal",
		class: ["Virus"],
        stats: {hp: 166, atk: 120, def: 92, spe: 147},
    },
    {
        id: 8,
        number: 9,
		name: "northon",
        description: "O dobrador de infernos",
		class: ["Fire", "King"],
        stats: {hp: 105, atk: 135, def: 180, spe: 105},
    },
    {
        id: 9,
        number: 10,
		name: "miguel",
        description: "O espectro primata",
		class: ["Fire", "Flora"],
        stats: {hp: 102, atk: 175, def: 73, spe: 175},
    },
    {
        id: 10,
        number: 11,
		name: "caronte",
        description: "O analista do caos",
		class: ["King", "Water"],
        stats: {hp: 136, atk: 142, def: 93, spe: 154},
    }
]
*/

export const Badges = [
    {
        id: 0,
        code: 'STAFF',
        name: 'Administrador',
        description: 'Equipe Ultrajante.'
    },
    {
        id: 1,
        code: 'BR0001',
        name: 'Beta Tester',
        description: 'Eu participei dos testes beta! 10/2022',
    },
    {
        id: 2,
        code: 'BR0002',
        name: 'Missão Cebollurl',
        description: 'Eu destruí um ninho de Cebollurl! 08/2022',
    }
]

export const Chart = [
    {
        id: 0,
        name: 'fire',
		boost: [ 6, 3, 2, 4 ],
        immune: '',
        resist: [ 6 ],
    },
    {
        id: 1,
        name: 'water',
        boost: [ 0, 3 ],
        immune: '',
        resist: [ 0 ]
    },
    {
        id: 2,
        name: 'king',
        boost: [ 3, 0, 6 ],
        immune: '',
        resist: [ 1, 3 ]
    },
    {
        id: 3,
        name: 'witch',
        boost: [ 3, 5, 4 ],
        immune: [ 4 ],
        resist: [ 6, 5 ]
    },
    {
        id: 4,
        name: 'virus',
        boost: [ 2, 1 ],
        immune: '',
        resist: [ 5, 1 ]
    },
    {
        id: 5,
        name: 'tormented',
        boost: [ 2 ],
        immune: '',
        resist: [ 1, 0, 6, 5 ]
    },
    {
        id: 6,
        name: 'flora',
        boost: [ 1, 4 ],
        immune: '',
        resist: [ 1, 4, 5 ]
    }
]

export const Movepool = [
    {
        id: 0,
        name: 'Garra Desoladora',
        base: 90,
        desc: 'Perfura o alvo causando 90 de dano.'
    },
    {
        id: 1,
        name: 'Punho Sinistro',
        base: 75,
        desc: 'Bloqueia 20% do dano recebido e devolve causando 75 de dano.'
    },
    {
        id: 2,
        name: 'Barreira Pungente',
        base: 120,
        desc: 'Consome 30 de vida própria nesse turno e devolve 120 de dano no oponente.',
        color: 'bg-cyan-600'
    },
    {
        id: 3,
        name: 'Devoção Cáustica',
        base: 40,
        desc: 'Prende o alvo numa corrente de orações causando 40 de dano nesse e no próximo turno.',
        color: 'bg-red-700'
    },
    {
        id: 4,
        name: 'Lâmina Astral',
        base: 80,
        desc: 'Corta a vítima causando 80 de dano.',
        color: 'bg-purple-700'
    },
    {
        id: 5,
        name: 'Inferno',
        base: 60,
        desc: 'Queima o alvo a incríveis temperaturas, purificando-o e causando 60 de dano nos próximos dois turnos.',
        color: 'bg-red-700'
    },
    {
        id: 6,
        name: 'Doce Beberico',
        base: 70,
        desc: 'Poção feita pelos druidas que restaura 60% de vida causando os 40% restantes de dano. Base 70.',
        color: 'bg-purple-700'
    },
    {
        id: 7,
        name: 'Cusparada Ácida',
        base: 40,
        desc: 'Projétil de cuspo que causa 40 de dano.',
        color: 'bg-cyan-600'
    },
    {
        id: 8,
        name: 'Pele de Cebola',
        base: 30,
        desc: 'Descamação instantânea que restaura 30 de vida.',
        color: 'bg-green-700'
    }
]

export const Messages = [
    {
        id: 0,
        name: 'Jogue-me...'
    },
    {
        id: 1,
        name: '⛧ NNNHAAAGW!!? ⛧'
    },
    {
        id: 2,
        name: ' ⛧ RAAAAAAAH! ⛧'
    },
    {
        id: 3,
        name: 'Mergulhe na devoção cáustica!'
    },
    {
        id: 4,
        name: 'H̷͕̙͖͓̍͆̇A̷̧̛̮͉̭̿͑̐̌Ȟ̵͉A̷̲͗͊͊̀͜H̶́̌̐̏͜A̸̛̲̗͈̱͒͒̀̚H̷͕̙͖͓̍͆̇A̷̧̛̮͉̭̿͑̐̌Ȟ̵͉A̷̲͗͊͊̀͜H̶́̌̐̏͜A̸̛̲̗͈̱͒͒̀̚H̷͕̙͖͓̍͆̇A̷̧̛̮͉̭̿͑̐̌Ȟ̵͉A̷̲͗͊͊̀͜H̶́̌̐̏͜A̸̛̲̗͈̱͒͒̀̚H̷͕̙͖͓̍͆̇A̷̧̛̮͉̭̿͑̐̌Ȟ̵͉A̷̲͗͊͊̀͜H̶́̌̐̏͜A̸̛̲̗͈̱͒͒̀̚H̷͕̙͖͓̍͆̇A̷̧̛̮͉̭̿͑̐̌Ȟ̵͉A̷̲͗͊͊̀͜H̶́̌̐̏͜A̸̛̲̗͈̱͒͒̀̚H̷͕̙͖͓̍͆̇A̷̧̛̮͉̭̿͑̐̌Ȟ̵͉A̷̲͗͊͊̀͜H̶́̌̐̏͜A̸̛̲̗͈̱͒͒̀̚!!!'
    },
    {
        id: 5,
        name: 'Beberique o doce...'
    },
    {
        id: 6,
        name: 'ψ H̷͕̙͖͓̍͆̇A̷̧̛̮͉̭̿͑̐̌Ȟ̵͉A̷̲͗͊͊̀͜H̶́̌̐̏͜A̸̛̲̗͈̱͒͒̀̚  ψ'
    },
    {
        id: 7,
        name: 'ψ SINTA O PODER ψ'
    }
]

export default BetaArsenal;