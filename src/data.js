export const Player = [
    {
        id: 0,
        playername: 'Player 1',
        border: 'default',
    }
]

export const BetaArsenal = [
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
        number: 5,
		name: "rasputin",
        description: "O pairador de águas profundas",
		class: ["Water"],
        stats: {hp: 157, atk: 100, def: 168, spe: 100},
    },
    {
        id: 2,
        number: 7,
		name: "marry",
        description: "A drúida ancestral",
		class: ["Witch"],
        stats: {hp: 200, atk: 106, def: 100, spe: 119},
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
        base: 90
    },
    {
        id: 1,
        name: 'Punho Sinistro',
        base: 95
    },
    {
        id: 2,
        name: 'Barreira Pungente',
        base: 120
    },
    {
        id: 3,
        name: 'Devoção Cáustica',
        base: 40
    },
    {
        id: 4,
        name: 'Lâmina Astral',
        base: 80
    },
    {
        id: 5,
        name: 'Inferno',
        base: 60
    },
    {
        id: 6,
        name: 'Doce Beberico',
        base: 70
    }
]

export default BetaArsenal;