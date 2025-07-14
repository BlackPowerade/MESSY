import './style.css'
import Triangle from './triangle.ts';

const btn = document.getElementById("checkBtn");

function showResult() {
  const ang1Input = document.getElementById("angle1");
  const ang2Input = document.getElementById("angle2");
  const ang3Input = document.getElementById("angle3");
  const resultDiv = document.getElementById("result");
  try {
    const userTri = new Triangle(Number.parseInt(ang1Input.value), Number.parseInt(ang2Input.value), Number.parseInt(ang3Input.value))
    resultDiv!.textContent = `This triangle is ${userTri.type} and ${userTri.subtype}`
  }
  catch (error) {
    resultDiv!.textContent = error.message
  }
}

btn?.addEventListener('click', (ev) => {
  ev.preventDefault()
  showResult()
})
