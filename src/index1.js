const refs = {
  daysEl: document.querySelector("[data-value='days']"),
  hoursEl: document.querySelector("[data-value='hours']"),
  minsEl: document.querySelector("[data-value='mins']"),
  secsEl: document.querySelector("[data-value='secs']"),
};

const targetDate = new Date('Jul 17 2023 00:00:00');

startWatch();

function timer() {
  let startDate = new Date();
  let time = Math.floor(targetDate - new Date());

  // console.log(time);

  let days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  let hours = this.pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  let secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.secsEl.textContent = secs;
  refs.minsEl.textContent = mins;
  refs.hoursEl.textContent = hours;
  refs.daysEl.textContent = days;
  console.log(days);
}

function startWatch() {
  setInterval(timer, 1000);
}
