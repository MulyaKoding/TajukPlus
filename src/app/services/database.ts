import { HttpClient } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { SQLitePorter } from "@ionic-native/sqlite-porter/ngx";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Platform } from "@ionic/angular";
import { data } from "jquery";
import { BehaviorSubject, Observable } from "rxjs";
import { Wilayah } from "./wilayah";


@Injectable({
    providedIn: 'root'
})

export class database{
    private storage: SQLiteObject;
    wilayahsList =  new BehaviorSubject([]);
    private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private platform: Platform,
        private sqlite: SQLite,
        private httpClient: HttpClient,
        private sqlPorter: SQLitePorter,
    ){
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'wilayah_db.db',
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

    fetchWilayahs(): Observable<Wilayah[]> {
        return this.wilayahsList.asObservable();
    }

    //Render Data
    getData(){
        this.httpClient.get(
            'assets/wilayah.sql',
            {responseType: 'text'}
        ).subscribe(data => {
            this.sqlPorter.importSqlToDb(this.storage,data)
            .then(_=> {
                this.getWilayahs();
                this.isDbReady.next(true);
            })
            .catch(error => console.error(error));
        });
    }

    // Get List 
    getWilayahs(){
        return this.storage.executeSql('SELECT * from wilayahtable', []).then(res =>{
            let items: Wilayah[] = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) { 
                  items.push({ 
                    prov_id: res.rows.item(i).prov_id,
                    city_id: res.rows.item(i).city_id,
                    dis_id: res.rows.item(i).dis_id,
                    subdis_id: res.rows.item(i).subdis_id,
                    prov_name: res.rows.item(i).prov_name,
                    city_name: res.rows.item(i).city_name,
                    dis_name: res.rows.item(i).dis_name,
                    subdis_name: res.rows.item(i).subdis_name, 
                   });
                }
            }
            this.wilayahsList.next(items);
        })
    }

}

