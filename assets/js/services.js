document.addEventListener("DOMContentLoaded", function () {
    var catLinkImg = document.getElementById('CatLinkImg');
    var catLinkText = document.getElementById('CatLinkText');
    var catLinkArray = document.getElementById('CatLinkArray');
    
    var dogLinkImg = document.getElementById('DogLinkImg');
    var dogLinkText = document.getElementById('DogLinkText');
    var dogLinkArray = document.getElementById('DogLinkArray');
    
    function AnimalMeaning(idMeaning, animalMeaning){
        idMeaning.onclick = function(){
            localStorage.setItem('animal', animalMeaning);
        }
    }
    
    
    AnimalMeaning(catLinkImg, 'cat');
    AnimalMeaning(catLinkText, 'cat');
    AnimalMeaning(catLinkArray, 'cat');
    
    AnimalMeaning(dogLinkImg, 'dog');
    AnimalMeaning(dogLinkText, 'dog');
    AnimalMeaning(dogLinkArray, 'dog');
});