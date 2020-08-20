import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})

export class MenuComponent implements OnInit {

  constructor(private dishService: DishService, @Inject('BaseURL') private BaseURL) { }

  dishes: Dish[];
  errMess: string;

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

}
