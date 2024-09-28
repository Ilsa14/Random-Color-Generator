const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const generateButton = document.getElementById('generateColor');

generateButton.addEventListener('click', () => {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
  colorCode.textContent = `Color Code: ${randomColor}`;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
