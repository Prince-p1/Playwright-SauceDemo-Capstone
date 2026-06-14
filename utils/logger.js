function log(message) {

  console.log(
    `[INFO] ${new Date().toISOString()} - ${message}`
  );

}

module.exports = { log };