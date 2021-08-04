import { Injectable } from "@angular/core";
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Platform } from "@ionic/angular";
import { Interface } from "readline";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { data } from "jquery";
import { error } from "@angular/compiler/src/util";
import { Wilayah } from "./wilayah";

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private storage: SQLiteObject;
  wilayahList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject <boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private  sqlPorter: SQLitePorter,
  ){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'wilayah.db'
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.storage = db;
        this.getData();
      });
    });
  }

  dbState(){
    return this.isDbReady.asObservable();
  }

  fetchSongs(): Observable<Song[]> {
    return this.wilayahList.asObservable();
  }

    //Render data
    getdata(){
      this.httpClient.get(
        'assets/wilayah.sql',
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getWilayah();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
      });
    }


    // Get List
      getWilayah(){
        return this.storage.executeSql('SELECT * FROM wilayahtable', []).then(res => {
          let items: Song[] = [];
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) { 
              items.push({ 
                id: res.rows.item(i).id,
                provinces_name: res.rows.item(i).provinces_name,  
                cities_name: res.rows.item(i).cities_name,
                districts_name: res.rows.item(i).cities_name,
                subdistricts: res.rows.item(i).cities_name
               });
            }
          }
          this.wilayahList.next(items);
        });
        
        }
        
      }