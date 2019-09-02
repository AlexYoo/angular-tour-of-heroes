import { Component, OnInit } from '@angular/core';
import { HotplaceService } from '../hotplace.service'
import { Store } from '../store'
import { Location } from '@angular/common'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  storeName='';
  regId='';
  store: Store;

  constructor(private hotplaceService: HotplaceService,
    private location: Location
    ) { }

  ngOnInit() {
    // this.save();
  }

  save() {
    // this.inputStore.setName(this.storeName);
    // this.inputStore.setRegId(this.regId);

    const store: Store = {
      name: this.storeName,
      regId: this.regId
    };

    console.dir(this.storeName + ' ' + this.regId + ' save');

    this.hotplaceService.insertStore(store).subscribe((result) => {
      console.dir('okay' + result);
      // this.location.back();
    });
  }

}
