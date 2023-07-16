window.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('');
  const orderForm = document.getElementById('order-form');

  // Menampilkan jenis elektronik
  const menunya = ['paket 1', 'paket 2', 'paket 3', 'paket 4', 'paket 5'];

  menunya.forEach((pesanan) => {
    const menuItem = document.createElement('div');
    menuItem.textContent = pesanan;
    menuList.appendChild(menuItem);
  });

  // Mengirim pesanan
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const selectedmenu = document.getElementById('pesanan').value;

    // Mengirim data pesanan ke server melalui AJAX atau Fetch API
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'warung.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert('Pesanan berhasil dikirim');
      }
    };
    xhr.send(`name=${name}&electronic=${selectedmenu}`);
  });
});