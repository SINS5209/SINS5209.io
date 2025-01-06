function toggleSearchButton() {
  const input = document.getElementById("src");
  const button = document.getElementById("searchButton");

  // Aktifkan tombol jika input tidak kosong
  button.disabled = input.value.trim() === "";
}
