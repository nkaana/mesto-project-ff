// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

const cardTemplate = document.querySelector('#card-template').content;

function createCard(name, link, altDescription, deleteCard) {

  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = altDescription;

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
  const placesList = document.querySelector('.places__list');
  const card = createCard(element.name, element.link, element.altDescription, deleteCard);
  placesList.append(card);
});