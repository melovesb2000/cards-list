// Sample data for the card list
const cardsData = [
  { title: "Card 1", description: "This is card 1." },
  { title: "Card 2", description: "This is card 2." },
  { title: "Card 3", description: "This is card 3." }
];

// Function to create a card element
function createCardElement(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const titleElement = document.createElement("h2");
  titleElement.textContent = card.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = card.description;

  cardElement.appendChild(titleElement);
  cardElement.appendChild(descriptionElement);

  return cardElement;
}

// Function to render the card list
function renderCardList(cardsData) {
  const cardListElement = document.getElementById("cardList");

  // Clear the existing content of the card list
  cardListElement.innerHTML = "";

  // Create and append card elements for each data item
  cardsData.forEach(function (card) {
    const cardElement = createCardElement(card);
    cardListElement.appendChild(cardElement);
  });
}

// Call the renderCardList function with the sample data
renderCardList(cardsData);
