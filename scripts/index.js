const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');


function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

function closeModal(popup){
    popup.classList.remove('popup_is-opened');
}

const profilePopupButtonOpen = document.querySelector('.profile__edit-button');
profilePopupButtonOpen.addEventListener('click', function() {
    openModal(profilePopup);
    const profileInputTitle = document.querySelector('.popup__input_type_name');
    const profileInputDescription = document.querySelector('.popup__input_type_description');
    profileInputTitle.value = document.querySelector('.profile__title').textContent;
    profileInputDescription.value = document.querySelector('.profile__description').textContent;
});

function handleProfileFormSubmit(evt) {
    //console.log('функция начала работу')
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');
    //console.log('элементы выбраны')
    profileTitle.textContent = document.querySelector('.popup__input_type_name').value;
    profileDescription.textContent = document.querySelector('.popup__input_type_description').value;
    closeModal(profilePopup); 
    //console.log('элементы вставлены')
}

const profileFormElement = profilePopup.querySelector('.popup__button');
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener('click', handleProfileFormSubmit); 

const profilePopupButtonClose = profilePopup.querySelector('.popup__close');
profilePopupButtonClose.addEventListener('click', function() {
    closeModal(profilePopup);
    //console.log('closeModal');
});


const cardPopupButtonOpen =document.querySelector('.profile__add-button');
cardPopupButtonOpen.addEventListener('click', function() {
    openModal(cardPopup);
    const cardNameInput = document.querySelector('.popup__input_type_card-name');
    const cardLinkInput = document.querySelector('.popup__input_type_url');
})

function handleCardFormSubmit(evt) {
    //console.log('функция начала работу')
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    const cardInputName = document.querySelector('.popup__input_type_card-name');
    const cardInputUrl = document.querySelector('.popup__input_type_url');
    console.log('элементы выбраны')
    cardCont.prepend(createCard(cardInputName.value, cardInputUrl.value));

    closeModal(cardPopup); 
    //console.log('элементы вставлены')
}

const cardFormElement = cardPopup.querySelector('.popup__button');
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
cardFormElement.addEventListener('click', handleCardFormSubmit); 

const cardPopupButtonClose = cardPopup.querySelector('.popup__close');
cardPopupButtonClose.addEventListener('click', function() {
    closeModal(cardPopup);
    //console.log('closeModal');
});

imagePopup.querySelector('.popup__close').addEventListener('click', function(){
    closeModal(imagePopup);
});

// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
