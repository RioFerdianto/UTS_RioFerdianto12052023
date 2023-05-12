function RegistrasiAkun() {
  if (document.FormAkun.nama.value == "") {
    alert("Kolom nama tidak boleh kosong");
    return false;
  }
  if (document.FormAkun.usia.value == "") {
    alert("Kolom nama tidak boleh kosong");
    return false;
  }

  if (document.FormAkun.alamat.value == "") {
    alert("Kolom Alamat tidak boleh kosong");
    return false;
  }

  if (document.FormAkun.email.value == "") {
    alert("Kolom Email tidak boleh kosong");
    return false;
  }
}
