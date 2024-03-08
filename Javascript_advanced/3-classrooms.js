function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    }
  }
  var students = [];

  for (let i = 0; i <= numbersOfStudents; i++) {
    var seatNumber = i + 1;
    students.push(studentSeat(seatNumber));
  }
  return students;
}

var classRoom = createClassRoom(10);
