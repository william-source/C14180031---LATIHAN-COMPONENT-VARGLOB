import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataglobalService } from "../dataglobal.service";

@Component({
  selector: "app-halaman1",
  templateUrl: "./halaman1.component.html",
  styleUrls: ["./halaman1.component.css"]
})
export class Halaman1Component implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public variableglobal: DataglobalService
  ) {}

  output = "";
  inputjudul = "";
  inputisi = "";
  inputtanggal: Date;

  ADD() {
    if (this.inputjudul != "" && this.inputisi != "" && !this.inputtanggal) {
      this.variableglobal.addData(
        this.inputjudul,
        this.inputisi,
        this.inputtanggal
      );
      this.Clear();
      this.output = " success to add the data";
    } else {
      this.output = " input error";
    }
  }
  Clear() {
    this.inputjudul = "";
    this.inputisi = "";
  }

  ngOnInit() {}
}
