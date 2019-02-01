import { Sdk, Module, ServerStatus, ServerDto } from 'ezgames-launcher-sdk';

export default class ModuleTemplate implements Module {
  type: string = 'game';
  requireVersion: string = '0.0.1';
  showOnStart: boolean = true;

  constructor(private sdk: Sdk) { }

  init() { }

  start(server: ServerDto) {
    this.sdk.getGamePath(107410, ['test.exe']).then((path) => {
      const downloader = this.sdk.createDownloader(server.id);
      downloader.add({
        name: 'test1.zip',
        url: 'http://emodyz.eu/10MB.zip',
        path: path
      });
      downloader.add({
        name: 'test2.zip',
        url: 'http://emodyz.eu/5MB.zip',
        path: path
      });
      downloader.add({
        name: 'test3.zip',
        url: 'http://emodyz.eu/10MB.zip',
        path: path
      });
      downloader.add({
        name: 'test4.zip',
        url: 'http://emodyz.eu/5MB.zip',
        path: path
      });
      downloader.add({
        name: 'test5.zip',
        url: 'http://emodyz.eu/10MB.zip',
        path: path
      });
      downloader.add({
        name: 'test6.zip',
        url: 'http://emodyz.eu/10MB.zip',
        path: path
      });
      downloader.add({
        name: 'test7.zip',
        url: 'http://emodyz.eu/10MB.zip',
        path: path
      });
      downloader.downloadAll();
    });
    console.log('MODULE STARTED');
  }

  getServerStatus() {
    if (Math.random() === 1) {
      return ServerStatus.ONLINE;
    } else {
      return ServerStatus.OFFLINE;
    }
  }
}
