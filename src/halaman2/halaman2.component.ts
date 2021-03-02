import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataglobalService } from "../dataglobal.service";

@Component({
  selector: "app-halaman2",
  templateUrl: "./halaman2.component.html",
  styleUrls: ["./halaman2.component.css"]
})
export class Halaman2Component implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public variableglobal: DataglobalService
  ) {
    this.datadariglob = this.variableglobal.getData();
  }
  datadariglob: any;

  fav(pid) {
    this.datadariglob[pid].id = "1";
    this.variableglobal.updateData(this.datadariglob);
    this.datadariglob = this.variableglobal.getData();
  }

  ngOnInit() {
    this.datadariglob = this.variableglobal.getData();
  }
}
