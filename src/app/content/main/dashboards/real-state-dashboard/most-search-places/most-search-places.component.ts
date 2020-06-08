import {Component, Input} from '@angular/core';
import {MouseEvent} from '@agm/core';

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-most-search-places',
  templateUrl: './most-search-places.component.html',
  styleUrls: ['./most-search-places.component.scss']
})
export class MostSearchPlacesComponent {
  categories = [
    {name: 'City', slug: 'city'},
    {name: 'State', slug: 'state'},
    {name: 'Area', slug: 'area'}
  ];

  locationTitle: string = 'City';
  currentCat: any;
  visibleItems: any[];
  private _data: any[];

  // google maps zoom level
  zoom: number = 3;

  // initial center position for the map
  lat: number = 28.673858;
  lng: number = 77.815982;

  markers: Marker[] = [
    {
      lat: 29.673858,
      lng: 78.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 31.673858,
      lng: 74.815982,
      label: 'B',
      draggable: false
    },
    {
      lat: 41.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ];

  constructor() {

  }

  @Input()
  set data(data: any[]) {
    this._data = data;
    this.onChangeCategory(this.categories[0]);
  }

  onChangeCategory(category?) {
    if (category) {
      this.currentCat = category.slug;
      this.locationTitle = category.name;
      this.visibleItems = this._data.filter((item) => {
        return item.category === this.currentCat;
      });
    } else {
      this.currentCat = null;
      this.locationTitle = 'City';
      this.visibleItems = this._data;
    }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}
