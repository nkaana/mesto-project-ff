// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(name, link, altDescription, deleteCard) {

  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = name;
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = link;
  cardImage.alt = altDescription;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);

  return cardElement;
};

// @todo: Функция удаления карточки

function deleteCard(evt) {
  const cardToDelete = evt.target.closest('.places__item');
  cardToDelete.remove();
};

// @todo: Вывести карточки на страницу

initialCards.forEach((element) => {
  const card = createCard(element.name, element.link, element.altDescription, deleteCard);
  placesList.append(card);
});