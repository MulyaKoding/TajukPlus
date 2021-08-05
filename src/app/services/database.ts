import { HttpClient } from "@angular/common/http";
import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { SQLitePorter } from "@ionic-native/sqlite-porter/ngx";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Platform } from "@ionic/angular";
import { data } from "jquery";
import { BehaviorSubject, Observable } from "rxjs";
import { Citie } from "./citie";
import { Province } from "./province";
import { District } from "./district";
import { Subdistrict } from "./subdistrict";



@Injectable({
    providedIn: 'root'
})

export class Database{
    private storage: SQLiteObject;
    wilayahsList =  new BehaviorSubject([]);
    citiesList = new BehaviorSubject([]);
    provinciesList = new BehaviorSubject([]);
    districtsList = new BehaviorSubject([]);
    subdistrictsList = new BehaviorSubject([]); 
    private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private platform: Platform, 
        private sqlite: SQLite, 
        private httpClient: HttpClient,
        private sqlPorter: SQLitePorter,
      ) {
        this.platform.ready().then(() => {
          this.sqlite.create({
            name: 'database.db',
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


    fetchProvincies(): Observable<Province[]> {
        return this.provinciesList.asObservable();
    }


    fetchCities(): Observable<Citie[]> {
        return this.citiesList.asObservable();
    }


    fetchDistricts(): Observable<District[]> {
        return this.districtsList.asObservable();
    }


    fetchSubdistricts(): Observable<Subdistrict[]> {
        return this.subdistrictsList.asObservable();
    }

    //Render Data
    getData(){
        this.httpClient.get(
            'assets/wilayah.sql',
            {responseType: 'text'}
        ).subscribe(data => {
            this.sqlPorter.importSqlToDb(this.storage,data)
            .then(_=> {
                this.getCities();
                this.getProvincies();
                this.getDistricts();
                this.getSubdistricts();
                this.isDbReady.next(true);
            })
            .catch(error => console.error(error));
        });
    }

    // Get List Cities
    getCities(){
        return this.storage.executeSql('SELECT * FROM cities',[]).then(res =>{
            let items: Citie[] = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) { 
                  items.push({ 
                    city_id: res.rows.item(i).city_id,
                    city_name: res.rows.item(i).city_name,
                   });
                }
            }
            this.citiesList.next(items);
        })
    }

    
    // Get List Cities
    getProvincies(){
        return this.storage.executeSql('SELECT * FROM provincies',[]).then(res =>{
            let items: Province[] = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) { 
                  items.push({ 
                    prov_id: res.rows.item(i).prov_id,
                    prov_name: res.rows.item(i).prov_name,
                    locationid: res.rows.item(i).locationid,
                    status: res.rows.item(i).status
                   });
                }
            }
            this.provinciesList.next(items);
        })
    }

    
    // Get List Cities
    getDistricts(){
        return this.storage.executeSql('SELECT * FROM districts',[]).then(res =>{
            let items: District[] = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) { 
                  items.push({ 
                    dis_id: res.rows.item(i).dis_id,
                    dis_name: res.rows.item(i).dis_name
                   });
                }
            }
            this.districtsList.next(items);
        })
    }

    
    // Get List Cities
    getSubdistricts(){
        return this.storage.executeSql('SELECT * FROM subdistricts',[]).then(res =>{
            let items: Subdistrict[] = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) { 
                  items.push({ 
                    subdis_id: res.rows.item(i).subdis_id,
                    subdis_name:res.rows.item(i).subdis_name
                   });
                }
            }
            this.subdistrictsList.next(items);
        })
    }

}

