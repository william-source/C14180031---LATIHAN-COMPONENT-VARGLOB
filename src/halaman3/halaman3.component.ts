import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataglobalService } from "../dataglobal.service";

@Component({
  selector: "app-halaman3",
  templateUrl: "./halaman3.component.html",
  styleUrls: ["./halaman3.component.css"]
})
export class Halaman3Component implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public variableglobal: DataglobalService
  ) {
    this.datadariglob = this.variableglobal.getData();
  }
  datadariglob: any;

  ngOnInit() {
    this.datadariglob = this.variableglobal.getData();
  }
}
