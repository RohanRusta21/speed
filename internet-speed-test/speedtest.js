const speedTest = require('speedtest-net');

// Run the speed test
speedTest({ acceptLicense: true, maxTime: 5000 }, (err, data) => {
  if (err) {
    console.error('An error occurred during the speed test:', err);
    return;
  }

  console.log('Download speed:', data.speeds.download);
  console.log('Upload speed:', data.speeds.upload);
  console.log('Ping:', data.server.ping);
});
