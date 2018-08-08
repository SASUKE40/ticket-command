const Section = require('./section');
const Seat = require('./seat');

const MIN_SEAT = 50;
const MAX_SEAT = 100;
const STEP = 2;
const LINE = (MAX_SEAT - MIN_SEAT) / STEP;
const RANDOM_RATE = 0.3;
module.exports.generateSeat = function() {
  let sections = [];
  for (let i = 0; i < 5; i++) {
    let section = new Section(i);
    for (let j = 0; j < LINE; j++) {
      let currentMaxSeat = STEP * j + MIN_SEAT;
      for (var k = 0; k < currentMaxSeat; k++) {
        let seat = new Seat(j, k);
        seat.selected = Math.random() > RANDOM_RATE;
        section.seats.push(seat);
      }
    }
    sections.push(section);
  }
  return sections;
};
