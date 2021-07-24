document.body.addEventListener("keyup", (event) => {
  tocar(event.code.toLowerCase()); // codigo da tecla pressionada e colocar em minusculo pq os ids e os nomes das musicas estao em minusculo
});
document.querySelector(".comp button").addEventListener("click", () => {
  var composicao = document.querySelector("#input").value;
  if (composicao !== "") {
    var arr = composicao.split("");
    tocarComp(arr);
  }
});
function tocar(tecla) {
  var audioElem = document.querySelector(`#s_${tecla}`);
  var teclaElem = document.querySelector(`div[data-key="${tecla}"]`);
  if (audioElem) {
    audioElem.currentTime = 0;
    //se existir o elemento de áudio correspondente
    audioElem.play();
  }
  if (teclaElem) {
    teclaElem.classList.add("active");
    setTimeout(() => {
      teclaElem.classList.remove("active");
    }, 300);
  }
}
function tocarComp(arr) {
  var wait = 0;

  for (let tecla of arr) {
    setTimeout(() => {
      tocar(`key${tecla}`);
    }, wait);
    wait += 250;
    tocar(`key${tecla}`);
  }
}
