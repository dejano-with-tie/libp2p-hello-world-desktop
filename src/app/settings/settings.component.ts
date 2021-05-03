import {Component, OnInit} from '@angular/core';
import {RestApiService} from "../rest-api.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public config: any[] = [];

  constructor(private restApi: RestApiService) {
  }

  ngOnInit(): void {
    this.restApi.config().subscribe((config: any) => {
      this.config.push({label: 'ID', value: config.libp2p.peerId.id});
      this.config.push({label: 'TIMEOUT', value: config.libp2p.dialer.dialTimeout});
      this.config.push({label: 'NAT.UPnP', value: config.libp2p.config.nat.enabled});
      this.config.push({label: 'NAT.PMP', value: config.libp2p.config.nat.pmp.enabled});
      // this.config.push({label: 'RELAY', value: config.libp2p.config.relay.hop.enabled});
      this.config.push({label: 'DISCOVERY', value: Object.keys(config.libp2p.config.peerDiscovery).join(', ')});
      this.config.push({label: 'BOOTSTRAP', value: config.libp2p.config.peerDiscovery.bootstrap.list.join(', ')});
      this.config.push({label: 'HTTP_PORT', value: config.file.gateway.port});
      this.config.push({label: 'P2P_PORT', value: config.file.network.port});
      this.config.push({label: 'DOWNLOAD_DIR', value: config.file.downloadDirPath});
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      this.config.push({
        label: 'SHARED_DIRS',
        value: config.file.shareDirs.map((dir: any) => `${dir.path} (${dir.advertisedPath})`).join(', ')
      });
    });
  }

}
