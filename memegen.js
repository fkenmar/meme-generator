const topText = document.querySelector('#topText')
const bottomText = document.querySelector('#bottomText')
const file = document.querySelector('#img')
const submit = document.querySelector('#submit')
const result = document.querySelector('#result')

document.body.addEventListener('keypress',getComponents)

function getComponents(e) {
  if(e.key == 'Enter') {
  e.preventDefault();

  let newDiv = document.createElement('div');
  newDiv.style.position = 'relative';

  result.appendChild(newDiv)

  let newDivTopText = document.createElement('div');
  newDivTopText.style.position = 'absolute';
  newDivTopText.style.top = 0;
  let insideNewDivTopText = document.createElement('p');
  insideNewDivTopText.innerText = topText.value;
  insideNewDivTopText.style.marginTop = 0;
  newDivTopText.appendChild(insideNewDivTopText)

  newDiv.appendChild(newDivTopText);

  let newImg = document.createElement('img');
  newImg.src = file.value;
  newDiv.appendChild(newImg)

  let divForBottomText = document.createElement('div');
  divForBottomText.style.position = 'absolute';
  divForBottomText.style.bottom = 0;
  newDiv.appendChild(divForBottomText);
  let bottomP = document.createElement('p');
  bottomP.innerText = bottomText.value;
  bottomP.style.marginBottom = 0;
  divForBottomText.appendChild(bottomP)

  newDiv.addEventListener('click',deleteMeme);

  function deleteMeme(e) {
    newDiv.remove();
  }

}
}