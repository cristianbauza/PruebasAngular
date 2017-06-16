import { Component } from '@angular/core';

import {MdButtonModule, MdToolbarModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
