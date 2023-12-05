
 const characters  =["a","b","c","d","e","f","g","!" ,"@","$","%","k","l", "m", "n","o","p","2","4","6","7","8","9", "Q", "R", "S","T","U","V","W","X","Y", "Z"]

 const btn = document.getElementById('btn')

 const inputOne = document.getElementById('inputOne')
 
 const inputTwo = document.getElementById('inputTwo')

let genertfunOne = ""
let genertfunTwo = ""

let resultOne = ""
let resultTwo = ""

btn.addEventListener('click', function(){
    resultOne = ""
    resultTwo = ""
    inputOne.textContent = resultOne
    inputTwo.textContent = resultTwo
    for(let i = 0; i< 7; i++){
      genertfunOne = Math.floor(Math.random() * characters.length)
      resultOne += characters[genertfunOne]
      genertfunTwo = Math.floor(Math.random() * characters.length)
      resultTwo += characters[genertfunOne]
    }
    inputOne.textContent = resultOne
    inputTwo.textContent = resultTwo
})