export default function converter(totalMinutes) {
  if(totalMinutes >= 60) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours}ч ${padTo2Digits(minutes)}м`;
  } else {
    return `${totalMinutes} минут`
  }

}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
