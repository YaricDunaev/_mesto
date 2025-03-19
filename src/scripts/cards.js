import { openModal } from "./index";

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  }
];



export const cardCont = document.querySelector('.places__list');

export const imagePopup = document.querySelector('.popup_type_image');
export const imageLink = imagePopup.querySelector('.popup__image');
export const captionText = imagePopup.querySelector('.popup__caption');

export function createCard(card_name, card_link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = card_link;
  cardElement.querySelector('.card__title').textContent = card_name;

  cardElement.querySelector('.card__like-button').addEventListener('click', function(event){
    console.log(event.target);
    event.target.classList.toggle('card__like-button_is-active');
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', function(event){
    event.target.closest('.card').remove();

  });

  cardElement.querySelector('.card__image').addEventListener('click', function(event){
    openModal(imagePopup);
    imageLink.src = card_link;
    captionText.textContent = card_name;
  })

  return cardElement;
}

export function initialCardsCreate () {
  initialCards.forEach(function (card) {
  cardCont.append(createCard(card.name, card.link));
  })
}
initialCardsCreate();