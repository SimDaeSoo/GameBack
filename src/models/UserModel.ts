export interface IInventory {
    data: string;
}

interface IItem {
    id: string
}

interface ICharacter {
    id: number,
    equip: {
        category: string,
        id: string
    },
    level: number
}

interface IQuest {
    created: Date,
    complete: Date,
    id: number
    data: object
}

interface ILocation {
    src: string,
    targe: string
}

interface IUser {
    inventory: IInventory,
    characters: Array<ICharacter>,
    completeQuests: Array<IQuest>,
    acceptedQuests: Array<IQuest>,
    party: Array<number>,
    created: Date,
    playTime: Number,
    location: ILocation,
    gold: number,
    selectableFloor: Array<number>,
    selectedFloor: Array<number>
}