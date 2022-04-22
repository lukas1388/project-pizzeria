import { templates, select } from '../settings.js';
import AmountWidget from './AmountWidget.js';

class Booking{
  constructor(element){
    const thisBooking = this;

    thisBooking.element = element;
    thisBooking.render(thisBooking.element);
    thisBooking.initWidgets();
  }

  render(element){
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    thisBooking.dom.wrapper.peopleAmount = document.querySelector(select.widgets.booking.peopleAmount);
    thisBooking.dom.wrapper.hoursAmount = document.querySelector(select.widgets.booking.hoursAmount);
  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.wrapper.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.wrapper.hoursAmount);

    thisBooking.dom.wrapper.peopleAmount.addEventListener('', function(event){
      event.preventDefault();
    });

    thisBooking.dom.wrapper.hoursAmount.addEventListener('', function(event){
      event.preventDefault();
    });
  }
}

export default Booking;