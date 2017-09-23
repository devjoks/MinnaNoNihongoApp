import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { Subject }    from 'rxjs/Subject';

import { MinnanoNihongo } from '../../interfaces/lesson_patron';

@Injectable()
export class MnnServiceProvider {

  _mnnData: MinnanoNihongo[] = [];
  _patron: any[] = [];
  _kanji: any[] = [];

  private _load: boolean;

  constructor(public http: Http) {
    this._load = false;
  }

  load(){

    if(this._load){
      return Promise.resolve(this._load);
    }
    return new Promise( resolve => {
      this.http.get("../../assets/json/leccion1.json")
      .map(data => data.json())
      .subscribe(data =>{
        this._mnnData = data;
        this. getPatron();
        resolve(this._load);
      });
    })
  }

  getPatron(){
    this._patron = this._mnnData["patron_oracion"];
    this._kanji = this._mnnData["patron_oracion"].kanjis;
    this.setFurigana();
  }
  

  setFurigana(){
    for (let oracion of this._patron["oraciones"]){
      for (let kanji of this._kanji["kanji"]){
        var KanFur = "<ruby> " + kanji.kanji + " <rt> "+ kanji.furigana +" </rt> </ruby>";
        oracion["patron"] = oracion["patron"].replace(kanji.kanji,KanFur, 'gi');
      }
    }
  }

}
