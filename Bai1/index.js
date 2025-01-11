const $ = document.getElementById.bind(document);
const inputPoint = $("input-point");
const point1 = $("input-point-1");
const point2 = $("input-point-2");
const point3 = $("input-point-3");
const priorityArea = $("priority-area");
const priorityObj = $("priority-obj");

const totalPoints = (area) => (obj) => (point1, point2, point3) => {
  return point1 + point2 + point3 + area + obj;
};

const getAreaPoint = (area) => {
  switch (area) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
};

const getObjPoint = (obj) => {
  switch (obj) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    default:
      return 0;
  }
};

const handleSubmit = () => {
  const calculateTotalPoints = totalPoints(getAreaPoint(priorityArea.value))(
    getObjPoint(priorityObj.value)
  )(
    parseFloat(point1.value),
    parseFloat(point2.value),
    parseFloat(point3.value)
  );

  if (isNaN(calculateTotalPoints)) {
    $("result").innerHTML = `Vui lòng nhập đúng số điểm`;
    return;
  }

  if (calculateTotalPoints >= parseFloat(inputPoint.value)) {
    $("result").innerHTML =
      `Chúc mừng bạn đã đậu với số điểm là ${calculateTotalPoints}`;
  } else {
    $("result").innerHTML =
      `Rất tiếc bạn đã rớt với số điểm là ${calculateTotalPoints}`;
  }
};
$("submit").addEventListener("click", handleSubmit);
