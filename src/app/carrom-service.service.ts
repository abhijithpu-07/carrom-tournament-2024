import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormData } from './common/formData';

@Injectable({
  providedIn: 'root',
})
export class CarromServiceService {
  // fd : FormData= {id:'',name:'',team:''}

  constructor(private afs: AngularFirestore) {}
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
            return "exist";
          }
        })

        // catchError((error) => {
        //   return new Error(error);
        // })
      );
  }
  // saveDataIfNotExists(
  //   data: FormData
  // ): Promise<void> {
  //   return this.afs
  //     .doc(`/Predictions/${data.id}`)
  //     .get()
  //     .pipe(
  //        map(
  //         (doc) => {
  //           if (!doc?.exists) {
  //             return this.afs
  //               .collection("/Predictions")
  //               .doc(data.id)
  //               .set(data);
  //           } else {
  //             throw new Error(`Document with ID ${data.id} already exists`);
  //           }
  //         }
  //        )
  //     )

  //     .then();
  // }

  getAllData() {
    this.afs.collection('/Predictions').snapshotChanges();
  }
}
