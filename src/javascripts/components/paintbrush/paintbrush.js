import $ from 'jquery';
import utilities from '../../helpers/utilities';


const colors = ['green', 'darkorchid', 'lightblue', 'white', 'red', 'black'];

const printColorPicker = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    domString += `
     <div class="custom-control custom-radio custom-control-inline">
        <input name="color" class="form-check-input color-choice" type="radio" id="${color}" value="${color}">
        <label class="form-check-label" for="${color}">${color}</label>
    </div>
    `;
  }
  utilities.printToDom('colors', domString);
};

const paintPixel = (event) => {
  const pixel = $(event.target);
  const colorChoice = $('.color-choice:checked').val();
  pixel.css('backgroundColor', colorChoice);
};

const attachEvents = () => {
  $(document).on('click', 'td', paintPixel);
};

export default { printColorPicker, attachEvents };
