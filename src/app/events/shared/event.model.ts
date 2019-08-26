export interface IEvent{
    id: number,
    name: string,
    date: Date,
    time: String,
    price: number,
    imageUrl: string,
    location?: { // the ? indicates that this field can be null
        address: string
        city: string
        country: string
    },
    onlineUrl?: string,
    sessions: ISession[]
}

export interface ISession{
    id: number
    name: string
    presenter: string
    duration: number
    level: string
    abstract: string
    voters: string[]
}