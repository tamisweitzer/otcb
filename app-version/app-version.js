


  /* Shows current version number on index page */

  let appVersionNumber = document.querySelector('#appVersionNumber');
  appVersionNumber.innerHTML = appVersionLog[0].version;

  // Prints out the logfile of the versions and related changes

  function printAppVersionLogs() {
    //let appVersionList = document.getElementById('appVersionList');
    let appVersionModalBody = document.querySelector('#appVersionModalBody');
    appVersionModalBody.innerHTML = "";
    let arr;

    if (arguments[0] == 'full') {
      arr = appVersionLog;
    } else {
      arr = appVersionLog.slice(0, 4);
    }

    arr.forEach(function(value, key) {
       appVersionModalBody.innerHTML += `
        <div class="version-log-row pb-2">
          <div class="version-log-key">${arr[key].version}</div>
          <div class="version-log-value">${arr[key].notes}</div>
        <div>
        `;
    })
  }
  printAppVersionLogs();
