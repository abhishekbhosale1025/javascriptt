var formButton = document.querySelector('.form-button');
var cancleButton = document.querySelector('.cancel-button');
var addButton = document.querySelector('.add-button');
var overlayContainer = document.querySelector('.overlay-container');
var popupConatainer = document.querySelector('.popup-conatainer');
var deleteBtn = document.querySelector('.delete-button');

formButton.addEventListener('click', function(){

    var overlayContainer = document.querySelector('.overlay-container');
    var popupConatainer = document.querySelector('.popup-conatainer');

    overlayContainer.style.display = 'block';
    popupConatainer.style.display = 'block';

})

cancleButton.addEventListener('click', function(event){
    event.preventDefault();
    overlayContainer.style.display = 'none';
    popupConatainer.style.display = 'none';
})



addButton.addEventListener('click', function(event){
    event.preventDefault();
    overlayContainer.style.display = 'none';
    popupConatainer.style.display = 'none';

    var bookName = document.getElementById('book-name').value;
    var authorName = document.getElementById('author-name').value;
    var description = document.getElementById('description').value;

    var container = document.createElement('div');
    container.setAttribute('class','container');

    container.innerHTML = `<h2>${bookName}</h2>
    <h3>${authorName}</h3>
    <p>${description}</p>
    <button onclick="deleteBook(event)">Delete</button>
    `;

    var mainContainer = document.querySelector('.main-container');
    mainContainer.appendChild(container);


})
function deleteBook(event){
    event.target.parentElement.remove()
}   