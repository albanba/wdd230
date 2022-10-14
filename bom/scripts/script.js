const list = document.getElementById("list");
const input = document.getElementById("favchap");
const button = document.getElementById("button");

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'X';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

 input.focus();
})