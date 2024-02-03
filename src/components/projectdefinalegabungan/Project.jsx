export default class Project {
  foto = "";
  sekolah = "";
  tingkatan = "";
  alamat = "";

  constructor(initializer) {
    this.id = initializer.id;
    this.foto = initializer.foto;
    this.sekolah = initializer.sekolah;
    this.tingkatan = initializer.tingkatan;
    this.alamat = initializer.alamat;
  }
}
