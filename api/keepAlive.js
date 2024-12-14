import axios from 'axios';

const RENDER_SERVICE_URL =  'https://real-estate-full-stack-app.onrender.com/';
const POLLING_INTERVAL = 14 * 60 * 1000; // 14 minutes (Render's free tier sleeps after 15 minutes of inactivity)

function keepServerAlive() {
  try {
    axios.get(RENDER_SERVICE_URL)
      .then(() => {
        console.log('Keep-alive ping sent successfully');
      })
      .catch((error) => {
        console.error('Keep-alive ping failed:', error.message);
      });
  } catch (error) {
    console.error('Error in keep-alive mechanism:', error);
  }
}

// Start the keep-alive polling
function startKeepAlivePoll() {
  console.log('Starting keep-alive polling...');
  setInterval(keepServerAlive, POLLING_INTERVAL);
}

export default startKeepAlivePoll;