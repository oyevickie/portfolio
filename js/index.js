// Elements
const titleEl = document.querySelector('.js-hero-title');
const jobEl = document.querySelector('.js-hero-job');
const jobLineEl = document.querySelector('.js-hero-job-line');
const labelEl = document.querySelector('.js-hero-label');

// Label
const labelText = labelEl.textContent.trim();
const labelTextLen = labelText.length;
let labelTextTick = 0;

// Timing
const LABEL_TICK_INTERVAL = 100;
const LABEL_TICKER_DURATION = (labelTextLen + 1) * LABEL_TICK_INTERVAL;
const JOB_SWITCH_SPEED = 4000;
const JOB_TRANSITION_DURATION = 1000;

// Get a list of jobs
const jobs = titleEl.getAttribute('data-job-rotate').split(',');

let currentJob = jobs[0];
let currentJobNr = 0;

/**
                       * Set the job line wrapping element width
                       */
function setJobLineWidth() {
  jobEl.style.width = 'auto';
  jobLineEl.style.width = jobEl.offsetWidth + 'px';
  jobEl.style.width = 0;
}

/**
   * Output the job title to the DOM
   * @param {String} name Name of the job title
   * @return {Void}
   */
function outputJob(name) {
  jobEl.innerHTML = `<span>${name}</span>`;
}

/**
   * Get the next job title
   * @return {Void}
   */
function getNextJob() {
  currentJobNr += 1;

  if (currentJobNr >= jobs.length) {
    currentJobNr = 0;
  }

  currentJob = jobs[currentJobNr];
}

/**
   * Go to the next job in the list
   * @return {Void}
   */
function goToNextJob() {
  getNextJob();

  // Transition to origin (collapsed)
  jobEl.style.width = 0;
  jobEl.style.opacity = 0;

  // Wait for the transition to finish, and after we set the next job title
  setTimeout(() => {
    // Output the job title to the DOM
    outputJob(currentJob);

    // Calculate the width
    jobEl.style.width = 'auto';
    const jobElWidth = jobEl.offsetWidth;
    jobEl.style.width = 0;

    // Wait a little while and set the new styles
    setTimeout(() => {
      jobLineEl.style.width = jobElWidth + 'px';
      jobEl.style.width = jobElWidth + 'px';
      jobEl.style.opacity = 1;
    }, 100);
  }, JOB_TRANSITION_DURATION);
}

// Remove the label initially
labelEl.innerHTML = '';

// Output the first job title
outputJob(currentJob);

// Hide the job title initially
jobEl.style.opacity = 0;

// Set the width for the job title
setJobLineWidth();

// 'Type' each letter
const labelTicker = setInterval(() => {
  labelTextTick += 1;

  // Output the string
  labelEl.textContent = labelText.substring(0, labelTextTick);

  // Stop the interval when all letters are outputted
  if (labelTextTick >= labelTextLen) {
    clearInterval(labelTicker);
  }
}, LABEL_TICK_INTERVAL);

// Show the first job title
setTimeout(() => {
  // Fade in, this will hide the padding transition a little
  jobEl.style.opacity = 1;

  // Set to full width, CSS will transition to it
  jobEl.style.width = jobLineEl.offsetWidth + 'px';

  // Create a loop where the job title switches on every iteration
  setInterval(() => {
    goToNextJob();
  }, JOB_SWITCH_SPEED);
}, LABEL_TICKER_DURATION);