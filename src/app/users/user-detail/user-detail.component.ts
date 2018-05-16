import { Component, OnInit, HostBinding } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';

import { slideInDownAnimation }   from '../../animations';

import { User, UserService } from '../user.service';
import { DialogService } from "../../dialog.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  animations: [ slideInDownAnimation ]
})


export class UserDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  user$/*: Observable<User>*/;
  editLogin: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modelService: UserService,
    private dialogService: DialogService


  ) { }

  ngOnInit() {
    /*this.route.data
      .subscribe((data: { user: User }) => {
        console.log("data");
        console.log(data);

        debugger;

        this.editLogin = data.user.login;
        this.user$ = data.user;
      });*/

    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.modelService.getUser(params.get('id')))
    );
    this.editLogin = this.user$.login;
  }

  cancel() {
    this.gotoUsers();
  }

  save() {
    this.user$.login = this.editLogin;
    this.gotoUsers();
  }

  gotoUsers() {
    let userId = this.user$ ? this.user$.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: userId, foo: 'foo' }], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.user$ || this.user$.login === this.editLogin ) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    // return this.dialogService.confirm('Discard changes?');
  }

}
