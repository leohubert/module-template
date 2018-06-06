export default class  {
    moduleInfos: any = require('../package.json')
    type: string = 'game';
    requireVersion: string = '0.0.1';
    showOnStart: boolean = true;

    constructor() {
        console.log('Construtor');
    }

    public init() {
        console.log('MODULE INIT');
        console.log('module version of ' + this.moduleInfos.name + ' - ' + this.moduleInfos.version);
    }

    start() {
        console.log('MODULE STARTED');
    }
}
