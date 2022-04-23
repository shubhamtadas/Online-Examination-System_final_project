import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Rule } from 'src/app/components/admin/components/admin-dashboard/model/rule';
import { RuleService } from 'src/app/components/admin/components/admin-dashboard/services/rule.service';

@Component({
  selector: 'app-rule-page',
  templateUrl: './rule-page.component.html',
  styleUrls: ['./rule-page.component.css']
})
export class RulePageComponent implements OnInit {

  ruleDetail !: FormGroup;
  ruleObj: Rule = new Rule();
  ruleList: Rule[] = [];

  constructor(private formBuilder: FormBuilder, private ruleService: RuleService) { }

  ngOnInit(): void {

    this.getAllRule();

    this.ruleDetail = this.formBuilder.group({
      id: [''],
      name: ['']
    });

  }

  getAllRule() {
    this.ruleService.getAllRule().subscribe(res => {
      this.ruleList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }

}
