import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="text-center bg-light">
  <hr>
  <p>Contact Manager App built in Training in 2018</p>
  <app-nav>
  <li class="nav-item">
    <a class="nav-link" href="#">GoTo Top</a>
  </li>
  </app-nav>
  <p>Copyright &copy; 2018</p>
</footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
