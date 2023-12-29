import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [CardLabelComponent, CardPricingComponent, CommonModule]
})
export class CardComponent {

    @Input()
    gameImage: string = "assets/bt-5.jpg"

    @Input()
    gameLabel:string = "";
  
    @Input()
    gameType: string = "Digital PS4" 
    @Input()   
    gamePrice: string = "R$ 139,99"

}
