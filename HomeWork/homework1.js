let people = [
  {
    name: "pesho",
    scores: [
      [30, 40],
      [60, 80],
    ],
  },
  {
    name: "pesho1",
    scores: [
      [60, 50],
      [70, 40],
    ],
  },
  {
    name: "pesho2",
    scores: [
      [90, 70],
      [80, 30],
    ],
  },
];

function calculate_scores(students){

  let calculation = students
  .map((x) => x.scores)
  .map((x) => x.map((i) => i.reduce((a, b) => (a + b) / i.length)))
  .map((x) => x.reduce((a, b) => (a + b) / x.length));

  return console.log(calculation);
}

const pesho = calculate_scores(people);