//import avatar from '../images/avatar.jpg'; // Импорт аватара

// Установка логотипа и аватара
//document.querySelector('.header__logo').src = logo;
//document.querySelector('.profile__image').style.backgroundImage = `url(${avatar})`;

const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
    


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
};

const checkInputValidity = (popup, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(popup, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(popup, inputElement);
    }
};
const buttonSwitch = (popup, isValid) => {
    const popupButton = popup.querySelector(".popup__button");
    popupButton.disabled = !isValid; 
    if (!isValid) {
        popupButton.classList.add('popup__button_inactive');
    }
    else {
        popupButton.classList.remove('popup__button_inactive');
    }
}

const checkPopupValidity = (popup, inputList) => {
    if (inputList.every(input =>input.validity.valid)){
         return true;
    }
    else 
        {return false;}

}

 function validationPopup(popup) {
    const inputList = Array.from(popup.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(popup, inputElement);
            buttonSwitch(popup,checkPopupValidity(popup, inputList));
        });
        
    });
}


function openModal(popup) {      
    popup.classList.add('popup_is-opened');
    validationPopup(popup);
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
    evt.preventDefault(); 
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');
    profileTitle.textContent = document.querySelector('.popup__input_type_name').value;
    profileDescription.textContent = document.querySelector('.popup__input_type_description').value;
    closeModal(profilePopup); 
}

const profileFormElement = profilePopup.querySelector('.popup__button');
profileFormElement.addEventListener('click', handleProfileFormSubmit); 

const profilePopupButtonClose = profilePopup.querySelector('.popup__close');
profilePopupButtonClose.addEventListener('click', function() {
    closeModal(profilePopup);
});




const cardPopupButtonOpen =document.querySelector('.profile__add-button');
cardPopupButtonOpen.addEventListener('click', function() {
    openModal(cardPopup);
    const cardNameInput = document.querySelector('.popup__input_type_card-name');
    const cardLinkInput = document.querySelector('.popup__input_type_url');
    checkInputValidity(cardPopup, cardNameInput);
    checkInputValidity(cardPopup, cardLinkInput);
    buttonSwitch(cardPopup,checkPopupValidity(cardPopup,Array.from(cardPopup.querySelectorAll('.popup__input'))));
})

function handleCardFormSubmit(evt) {
    evt.preventDefault(); 
    const cardInputName = document.querySelector('.popup__input_type_card-name');
    const cardInputUrl = document.querySelector('.popup__input_type_url');
    console.log('элементы выбраны')
    cardCont.prepend(createCard(cardInputName.value, cardInputUrl.value));
    closeModal(cardPopup);
}

const cardFormElement = cardPopup.querySelector('.popup__button');
cardFormElement.addEventListener('click', handleCardFormSubmit); 

const cardPopupButtonClose = cardPopup.querySelector('.popup__close');
cardPopupButtonClose.addEventListener('click', function() {
    closeModal(cardPopup);
});


imagePopup.querySelector('.popup__close').addEventListener('click', function(){
    closeModal(imagePopup);
});


const popupList=Array.from(document.querySelectorAll('.popup'));
popupList.forEach(popup =>{
popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
        closeModal(popup);
    }
})})
document.addEventListener('keydown', evt=>{
    closeByEsc(evt);
})
function closeByEsc(evt) {     
    if (evt.key === "Escape") {       
        const openedPopup = document.querySelector('.popup_is-opened');       
        closeModal(openedPopup);      } }
