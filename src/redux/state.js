import { rerender } from '../index';

let state = {
  color: 'red',

  changeColor() {
    this.color = (this.color === 'red') ? 'green' : 'red';
    rerender();
  }
}

export default state;
