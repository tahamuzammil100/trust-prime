import {Component, OnInit} from '@angular/core';
import {MouseEvent} from '@agm/core';

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
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

  ngOnInit() {
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
