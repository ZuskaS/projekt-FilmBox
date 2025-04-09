const hamburgerMenuElement = document.querySelector('#menu-tlacitko');

//to do: až klikne, tak se rozbalí a zabalí menu
//to do: až klikne, tak se nahoře objeví křížek a pak zase zpět 3čárky

const polozkyMenuElement = document.querySelector('#menu-polozky');

const TriCarkyNavElement = document.querySelector('#menu-tlacitko i.fa-bars');
const KrizekNavElement = document.querySelector('#menu-tlacitko i.fa-xmark');

hamburgerMenuElement.addEventListener('click', function () {
  polozkyMenuElement.classList.toggle('show');
  hamburgerMenuElement.classList.toggle('aktivni');
  TriCarkyNavElement.classList.toggle('hidden');
  KrizekNavElement.classList.toggle('hidden');
});
