import {Component, Input} from '@angular/core';
import {Card} from "../../model/card";
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-card',
  templateUrl: 'card.html'
})
export class CardComponent {
  @Input()
  vCard: Card;
  @Input()
  style: any;

  imgsrc: string = null;

  constructor(private httpService: RestProvider) {
    console.log('Hello CardComponent Component');
  }

  ngOnInit() {
    console.log(this.style);
    if (this.vCard.pictureId != null && this.vCard.pictureId != '') {
      this.httpService.get('pictures/get/' + this.vCard.pictureId).subscribe(data => {
          this.imgsrc = "data:image/png;base64," + data.value;
        }
      )
    }
  }

}
