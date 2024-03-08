function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  var spooky = changeMode(9, 'bold', 'uppercase', "pink", 'green');
  var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  var paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  var spookybutton = document.createElement('button');
  spookybutton.textContent = "Spooky";
  spookybutton.addEventListener('click', spooky);
  document.body.appendChild(spookybutton);

  var darkModebutton = document.createElement('button');
  darkModebutton.textContent = "Dark mode";
  darkModebutton.addEventListener('click', darkMode);
  document.body.appendChild(darkModebutton);

  var screamModebutton = document.createElement('button');
  screamModebutton.textContent = "Scream mode";
  screamModebutton.addEventListener('click', screamMode);
  document.body.appendChild(screamModebutton);
}

main();
