
function applyBtn() {
  const selectSeatContainer = document.querySelector(".selectSeatTable");
  selectSeatContainer.appendChild(div);

  const seatCounter = selectSeatContainer.children.length;
  console.log(seatCounter);

  updateTotalPrice(price);
  // Find the Apply button element
  const applyButton = document.querySelector(".btn-accent");
  const selectedSeatCount = convertToIntegerValue("BookingSeatCount");

  if (selectedSeatCount > 3) {
    // Add an event listener to the Apply button
    applyButton.addEventListener("click", function () {
      // Call the updateGrandTotalPrice function
      updateGrandTotalPrice("status");
    });
  }
}
