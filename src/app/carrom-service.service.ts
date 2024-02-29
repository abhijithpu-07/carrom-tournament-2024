import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, throwError } from 'rxjs';
import { FormData } from './common/formData';
import { Points } from './common/Points';
// import { AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class CarromServiceService {
  private dbpath = '/Points/'
  // pointsData: Points ={
  //   TeamId: "",
  //   knockOff:0,
  //   QuarterFinal:0

  // } 
 pointsData:any
 

  constructor(private afs: AngularFirestore
    // private db:AngularFireDatabase
    ) 
    {}
  //adding data to firebase
  // addData(fd: FormData) {
  //   // fd.id=this.afs.createId();
  //   this.afs.collection('/Predictions').doc(fd.id).set(fd);
  //   //  this.getAllData();
  //   return;
  // }
  saveDataIfNotExists(data: FormData): Observable<any> {
    const {id, ...details} = data;
    return this.afs
      .doc(`/Predictions/${id}`)
      .get()
      .pipe(
        map((doc) => {
          if (!doc?.exists) {
            return this.afs.collection('/Predictions').doc(id).set(details);
          } else {
            this.getall()
            return "exist";
          }
        })

        // catchError((error) => {
        //   return new Error(error);
        // })
      );
  }
 

  // getall()
  // {
  //   this.afs.collection(this.dbpath).snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map((c: { payload: { key: any; val: () => any; }; })=>
  //         ({key: c.payload.key , value : c.payload.val() })
  //         )
  //         )
  //       ).subscribe((d: any) =>{
  //           this.pointsData=d;
  //           console.log(this.pointsData)
  //         });;
    
  // }

  // getAll() {
  //   this.afs.collection(this.dbpath).snapshotChanges().subscribe(changes => {
  //     this.pointsData = changes.map(change => {
  //       const data = change.payload.doc.data();
  //       const id = change.payload.doc.id;
  //       console.log(change.payload.doc.data)
  //       return { id, data };
  //     });
  //     console.log(this.pointsData);
  //   });
  // }

  getall()
  {
    // console.log("hi")
    return this.afs.collection(this.dbpath).snapshotChanges();
  }

  

}
