import { Component, OnInit } from '@angular/core';
import { CountryI } from 'src/app/country.interface';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: CountryI[] = [];

  constructor(private CountrySvr: CountryServiceService) { }

  ngOnInit(): void {
    this.CountrySvr.getAllCities().subscribe(data => this.countries = data)
  }

}
