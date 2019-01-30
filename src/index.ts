import { Sdk, Module } from 'ezgames-launcher-sdk';

export default class ModuleTemplate implements Module  {
    moduleInfos: any = require('../package.json')
    type: string = 'game';
    requireVersion: string = '0.0.1';
    showOnStart: boolean = true;

    constructor(private sdk: Sdk) {
        console.log('Construtor');
    }

    public init() {
        console.log('MODULE INIT');
        console.log('module version of ' + this.moduleInfos.name + ' - ' + this.moduleInfos.version);
    }

    start() {
        console.log(this.sdk.getGamePath('arma3', 'test.exe'));
        console.log('MODULE STARTED');
    }
}
