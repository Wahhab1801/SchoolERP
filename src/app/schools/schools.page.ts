import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MenuController,NavController} from '@ionic/angular';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.page.html',
  styleUrls: ['./schools.page.scss'],
})
export class SchoolsPage implements OnInit {
  page =0;
  resultsCount = 10;
  totalPages=10;

  data =[];
  bulkEdit= false;
  sortKey = null;
  sortDirection = 0;
  edit = {};

  constructor(
    private http: HttpClient,
    private menuCtrl: MenuController,
    public navCtrl: NavController
    ) 
    { 
    this.loadData();
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
   createSchool(){
    this.navCtrl.navigateRoot('/createSchool');

   }
  loadData(){
    this.http.get(`https://randomuser.me/api/?page=${this.page}&results=${this.resultsCount}`).subscribe(res => {
      console.log('res__', res);
      this.data = res['results'];
      this.sort();
    })
   
  }
  sortBy(key){
    this.sortKey = key;
    this.sortDirection++;
    this.sort();
  }
  sort(){
    if (this.sortDirection ==1){
      this.data = this.data.sort((a, b)=>{
        const valA = a[this.sortKey];
        const valB = b[this.sortKey];
        return valA.localeCompare(valB);
      });

    } else if (this.sortDirection ==2){
      this.data = this.data.sort((a, b)=>{
        const valA = a[this.sortKey];
        const valB = b[this.sortKey];
        return valB.localeCompare(valA);
      });
    }
    else{
      this.sortDirection = 0;
      this.sortKey = null;
    }
  }
  toggleBulkEdit(){
    this.bulkEdit = !this.bulkEdit;
    this.edit = {};
  }
  bulkDelete(){
    console.log('this.edit: ', this.edit)
    let toDelete = Object.keys(this.edit);
    console.log(toDelete);
    const reallyDelete = toDelete.filter(index => this.edit[index]).map(key => +key);
    console.log(reallyDelete);
    while(reallyDelete.length){
      this.data.splice(reallyDelete.pop(), 1);
    }
    this.toggleBulkEdit();
  }
  removeRow(index){
    this.data.splice(index,1);
  }
  nextPage(){
    this.page ++;
    this.loadData();
  }
  prevPage(){
    this.page--;
    this.loadData();
  }
  goFirst(){
    this.page = 0;
    this.loadData();
  }
  goLast(){
    this.page = this.totalPages-1;
    this.loadData();
  }
}
