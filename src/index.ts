export default class  {

    public version: string = "1.0.0";
    public name: string = 'module-template';

    constructor() {
        console.log('Construtor');
    }

    public init() {
        console.log('MODULE INIT');
        console.log("JE SUIS LA VERSION 2 DU MODULE")
        console.log('module version of ' + this.name + ' - ' + this.version);
    }

    start() {
        console.log('MODULE STARTED')
    }
}
