import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pra19dynamicrouter',
  imports: [RouterLink],
  templateUrl: './pra19dynamicrouter.html',
  styleUrl: './pra19dynamicrouter.css',
})
export class Pra19dynamicrouter {
  constructor(private route: ActivatedRoute) {}
  name: String | null = '';
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const name = params['name'];
      console.log('Profile ID:', name);
      this.name = name;
    });
  }
}
