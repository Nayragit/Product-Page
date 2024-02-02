document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const quantityElement = document.getElementById("quantity");
  const decrementButton = document.getElementById("decrement");
  const incrementButton = document.getElementById("increment");
  const addToCartButton = document.querySelector(".add-to-cart");
  const colorBoxes = document.querySelectorAll(".color-box");


  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", function () {
          mainImage.src = this.src;
      });
  });


  let quantity = 1;
  decrementButton.addEventListener("click", function () {
      if (quantity > 1) {
          quantity--;
          quantityElement.textContent = quantity;
      }
  });

  incrementButton.addEventListener("click", function () {
      quantity++;
      quantityElement.textContent = quantity;
  });


  colorBoxes.forEach(colorBox => {
      colorBox.addEventListener("click", function () {
          colorBoxes.forEach(box => {
              box.classList.remove("selected");
          });
          this.classList.add("selected");
      });
  });


  addToCartButton.addEventListener("click", function () {

      addToCart();
  });
});


const sizeOptions = document.querySelectorAll(".size-option");

sizeOptions.forEach(sizeOption => {
    sizeOption.addEventListener("click", function () {
        sizeOptions.forEach(option => {
            option.classList.remove("selected");
        });
        this.classList.add("selected");
    });
});

function addToCart() {
  const selectedColor = document.querySelector(".color-box.selected").id;
  const selectedSize = document.querySelector("input[name='size']:checked").value;
  const productName = document.querySelector(".product-name").textContent;

  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = `${productName} with color ${selectedColor} and size ${selectedSize} added to cart`;
  successMessage.style.display = "block";

  setTimeout(() => {
      successMessage.style.display = "none";
  }, 3000); 
}
