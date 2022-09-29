import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private formbuilder: FormBuilder, private http: HttpClient) {}
  profileForm = this.formbuilder.group({
    firstName: '',
    lastName: [''],
    address: [''],
    dob: [''],
    gender: [''],
  });

  ngOnInit(): void {}
  saveForm() {
    console.log('form data is:' + ' ' + this.profileForm.value);
  }
  getData() {
    this.http.get('http://localhost:3000/books').subscribe(
      (res: any) => {
        console.log('response:-', res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onPostData() {
    const data = {
      name: 'abc',
      surname: 'zxcvb',
    };
    this.http.post('http://localhost:3000/books', data).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onPutData() {
    const data = {
      name: 'mayur',
      surname: 'Bhesaniya',
    };
    this.http.put('http://localhost:3000/books/2hpOmqi', data).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onDeleteData() {
    this.http.delete('http://localhost:3000/books/N9_5g6m').subscribe(
      (res: any) => {
        console.log('response:-', res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
