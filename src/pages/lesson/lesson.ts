import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MnnServiceProvider } from '../../providers/mnn-service/mnn-service';

@IonicPage()
@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
  providers: [ MnnServiceProvider ]
})
export class LessonPage {

  private MinnaData: MnnServiceProvider;
  private patronIdioma: string = "Japones";
  private ejemploIdioma: string = "Japones";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _mnnData: MnnServiceProvider) {
                this.MinnaData = _mnnData;
                this.MinnaData.load();
  }
}
