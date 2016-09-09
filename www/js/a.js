function setStatusText(text) {
  document.getElementById('status-text').innerHTML = text;
}

function createAndRetrieve() {
  var db = window.sqlitePlugin.openDatabase({ name: 'db.db', location: 2});
  setStatusText('Creating tables and retrieving value ...');
  db.executeSql('DROP TABLE IF EXISTS A;');
  db.executeSql('CREATE TABLE A(A INT);');
  db.executeSql('INSERT INTO A (A) VALUES (42);');
  db.executeSql(
    'SELECT * FROM A;',
    [],
    function (res) {
      setStatusText('Everything is ok. A is ' + JSON.stringify(res.rows.item(0)));
    },
    function (error) {
      console.log(error);
      setStatusText('Retrieving values is not ok. Check the console for details.');
    }
  )
}

function navigate() {
  window.location.href = window.location.href.replace('index.html', 'b.html');
}

document.addEventListener('deviceready', function() {
  setStatusText('ready');
  document.getElementById('db-button').addEventListener('click', createAndRetrieve);
  document.getElementById('navigate-button').addEventListener('click', navigate);
});
