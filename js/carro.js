


const btnArtbtn=document.querySelectorAll('.btnArt');
btnArtbtn.forEach((addBtnEven) => {
    addBtnEven.addEventListener('click', addBtnCliked);
    
});

const cuerpoCarro= document.querySelector('.itemFila');

function addBtnCliked(event) {
    const button = event.target;
    const item=button.closest('.item')
    
    const itemNombre=item.querySelector('h3').textContent;
    console.log("🚀 ~ file: carro.js:17 ~ addBtnCliked ~ itemNombre:", itemNombre)
    const itemPrecio=item.querySelector('.precio').textContent;
    console.log("🚀 ~ file: carro.js:19 ~ addBtnCliked ~ itemPrecio:", itemPrecio)
    addItemCarro(itemNombre,itemPrecio);


}

function addItemCarro(itemNombre,itemPrecio) {
    const ingresoRepetido = cuerpoCarro.getElementsByClassName('.h3');
    for (let i=0; i< ingresoRepetido; i++){
      if (ingresoRepetido[i].innertText === itemNombre) {
        let eleCanti=ingresoRepetido[i].parentElement.parentElement.querySelector('#cantidad');
        eleCanti.value++;
        return;
      }

    }


    const filaCarro = document.createElement('div');
    const cuerpoCarrofila=`  
       
      <div class="elemento">
      <li items>
      <p >${itemNombre}</p>
      <p class="precio">$${itemPrecio}</p>
      <input type="number" name="cantidad" id="cantidad"  value="1" step="1" min="1" />
      <button class="btn btn-danger buttonDelete" typer="button" >X</button>
      </li>
      </div>
  
    
    `;
    filaCarro.innerHTML=cuerpoCarrofila;
    
    cuerpoCarro.append(filaCarro);
    filaCarro.querySelector('.buttonDelete').addEventListener('click',eliminar);
    filaCarro.querySelector('#cantidad')
    .addEventListener('change',cambiar);
    updateCarroTotal();
   
    
}

function updateCarroTotal(){
  let totalC=0;
  const total=document.querySelector('.total');
  
  
  const cuerpoCarroItems = document.querySelectorAll('.elemento');
  cuerpoCarroItems.forEach((itemFila) => {
  const cuperpoPrecio = itemFila.querySelector('.precio');
  const preci=Number(cuperpoPrecio.textContent.replace('$',''));
   
  const cuperpoCantidad = itemFila.querySelector('#cantidad');
  const canti=Number(cuperpoCantidad.value);
  
  totalC=totalC+ preci * canti;
  

  })
  total.innerHTML=`TOTAL $ ${totalC.toFixed(2)}`;
}
  
  function eliminar(event) {

    const buttonClickEliminar = event.target;
    buttonClickEliminar.closest('.elemento').remove();
    updateCarroTotal();
  }

  function cambiar(event){
    const buttonChange = event.target;
      updateCarroTotal();
  }