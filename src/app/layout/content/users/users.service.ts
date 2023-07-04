import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: Users[] = [
    {
      id: 1,
      name: "dcaughan0",
      email: "flewsy0@census.gov",
      creation_date: "2008-09-27",
      is_active: true
    },
    {
      id: 2,
      name: "mswanton1",
      email: "kolyhane1@theguardian.com",
      creation_date: "2015-09-14",
      is_active: true
    },
    {
      id: 3,
      name: "wmannion2",
      email: "jisacoff2@archive.org",
      creation_date: "2022-09-27",
      is_active: false
    },
    {
      id: 4,
      name: "cwilacot3",
      email: "bhadwin3@nhs.uk",
      creation_date: "2009-06-22",
      is_active: true
    },
    {
      id: 5,
      name: "mdulson4",
      email: "wsherred4@ameblo.jp",
      creation_date: "2000-09-27",
      is_active: true
    }
  ];
  constructor() { }
  getUserList(){
    return this.users
  }
  getUser(index: number): Users | undefined {
    return this.users.find((user: Users) => user.id === index);
  }
  addNewItemDetails(nameNew : string, emailNew : string, creationDateNew : string, isActiveNew : boolean ){
    this.users.push({
      id: this.users.length + 1,
      name: nameNew,
      email: emailNew,
      creation_date: creationDateNew,
      is_active: isActiveNew,
    })
  }
  removeItem(i: Users) {
    let userId = i.id
    const index = this.users.findIndex(item => item.id === userId);
    if (this.users.length < 2) {
      alert("You cannot delete the last user.");
    }else{
      this.users.splice(index, 1);
    }
  }
  
  editItem(item : Users, nameIn : string, emailIn : string, creationDateIn : string, isActiveIn : boolean){
    const i = item.id - 1
    this.users[i] = {
      id: i + 1,
      name: nameIn,
      email: emailIn,
      creation_date: creationDateIn,
      is_active: isActiveIn,
    }
  }
}
