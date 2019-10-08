import 'bootstrap';
import '../styles/main.scss';
import grid from './components/grid/grid';
import paintbrush from './components/paintbrush/paintbrush';

const init = () => {
  grid.makeGrid();
  paintbrush.printColorPicker();
  paintbrush.attachEvents();
};

init();
