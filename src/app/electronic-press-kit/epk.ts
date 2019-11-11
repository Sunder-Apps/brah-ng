class Image {
    constructor (
        public name:string,
        public image:string,
        public url:string
    ) {}
}

class Icon {
    constructor (
        public name:string,
        public icon:string,
        public url:string
    ) {}
}

export class Epk {
    constructor (
        public bio:string,
        public year2019:string[],
        public bands:string[],
        public festivals:string[],
        public links:Icon[],
        public press:Image[]
    ) {}
}
