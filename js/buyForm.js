function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}
  
  document.getElementById('buyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('quantity').value;
    var notes = document.getElementById('notes').value;
  
    // Validate the data
    if (!name || !email || !price || !quantity) {
      alert('Please fill in all the fields');
      return;
    }
  
    // Send the data to your email
    var data = 'Name: ' + name + '\nEmail: ' + email + '\nPrice: ' + price + '\nQuantity: ' + quantity + '\nNotes: ' + notes;
    var mailtoLink = 'mailto:nicolecodegirl@gmail.com?subject=New Order&body=' + encodeURIComponent(data);
    window.location.href = mailtoLink;
  });