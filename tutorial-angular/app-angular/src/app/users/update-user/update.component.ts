import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestUpdate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id = "";
  request!: RequestUpdate;

  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ""
      }
    });
  }

  update() {
    if (this.request.name.trim() === "" || this.request.job.trim() === "") {
      alert("Preencha todos os campos")
      return
    } else {
      this.userService.updateUser(this.id, this.request).subscribe(res => {
        alert(`Atualizar: ${res.updatedAt}, Nome: ${res.name} Job: ${res.job}`);
        this._route.navigate(['/users']);
      });
    }
  }
}
