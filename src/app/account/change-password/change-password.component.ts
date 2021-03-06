import {Component, OnInit} from '@angular/core';
import {ChangePassword} from '../../service/account/changePassword';
import {AuthService} from '../../security/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  hide = true;
  hide1 = true;
  changePassword: ChangePassword;
  data: any = {
    newPassword: '',
    confirmPassword: ''
  };
  status = "";
  success:any = {
    message: "yes"
  }
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }
  ngSubmit(form: any) {
    if (this.checkPassword()) {
      this.changePassword = new ChangePassword(this.data.newPassword);
      console.log(this.changePassword);
      this.authService.changePassword(this.changePassword).subscribe(data => {
        if (JSON.stringify(data) == JSON.stringify(this.success)) {
          // @ts-ignore
          this.status = 'Đổi mật khẩu thành công !';
        }
      });
    }

  }

  checkPassword() {
    if (this.data.newPassword == this.data.confirmPassword && this.data.newPassword != '') {
      return true;
    } else if (this.data.newPassword != this.data.confirmPassword && this.data.newPassword != '' && this.data.confirmPassword != '') {
      return false;
    }
  }
}
