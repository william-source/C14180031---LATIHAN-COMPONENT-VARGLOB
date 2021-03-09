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
  inputtgl = "";
  inputbln = "";
  inputthn = "";
  date = "";

  ADD() {
    if (
      this.inputjudul != "" &&
      this.inputisi != "" &&
      this.inputtgl != "" &&
      this.inputbln != "" &&
      this.inputthn != ""
    ) {
      this.date = this.inputtgl + "/" + this.inputbln + "/" + this.inputthn;
      this.variableglobal.addData(this.inputjudul, this.inputisi, this.date);
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
