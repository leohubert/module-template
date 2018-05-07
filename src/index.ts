export default class  {

    public version: string = "1.0.0";
    public name: string = 'module-template';

    constructor() {
        console.log('Construtor');
    }

    public init() {
        console.log('MODULE INIT');
    }

    start() {
        console.log('MODULE STARTED')
    }
}

