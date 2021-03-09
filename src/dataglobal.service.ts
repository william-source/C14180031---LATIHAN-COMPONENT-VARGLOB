import { Injectable } from "@angular/core";

@Injectable()
export class DataglobalService {
  constructor() {}
  noid = 1;
  datatambah: any;

  private DATA = [
    {
      id: 0,
      tanggal: "10/10/10",
      judul: "data_dummy",
      isi: "first_note",
      fav: "0"
    }
  ];

  public getData() {
    return this.DATA;
  }

  public addData(pjudul: String, pisi: String, ptanggal: String) {
    this.datatambah = {
      id: this.noid,
      tanggal: ptanggal,
      judul: pjudul,
      isi: pisi,
      fav: "0"
    };
    this.noid++;
    this.DATA.push(this.datatambah);
  }

  public updateData(dataupdate) {
    this.DATA = dataupdate;
  }
}
