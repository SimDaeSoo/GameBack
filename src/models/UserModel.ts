export interface IInventory {
    data: Array<{
        id: string,
        count: number
    }>;
}

interface ICharacter {
    id: number,
    equips: {
        accessory: string,
        armor: string,
        weapon: string
    },
    level: number,
    exp: number
}

interface IQuest {
    created: Date,
    complete: Date,
    id: number
    data: object
}

interface ILocation {
    src: string,
    target: string
}

interface ISetting {
    sound : ISoundSetting
}

interface ISoundSetting {
    master: number,
    bgm: number,
    default: number
}

interface IUser {
    inventory: IInventory,

    characters: Array<ICharacter>,

    completeQuests: Array<IQuest>,
    acceptedQuests: Array<IQuest>,

    selectableFloor: Array<number>,
    selectedFloor: Array<number>,

    setting: ISetting,

    party: Array<number>,

    location: ILocation,

    tags: Array<string>,

    cutscene: string,
    controlCharacter: number,
    created: Date,
    playTime: number,
    gold: number,
    version: number
}