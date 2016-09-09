On iOS, navigating to a different page and returning while a database connection is open, leads a hang of all consecutive sql statements. On Android, everything seems to work fine.

To reproduce:

1. `cordova prepare`
2. `cordova emulate ios` (Running on the device leads to the same result)
3. Click call database button -> Everything should be fine
4. Click navigate button, then on the new page again the navigate button
5. Click call database button
-> App hangs and neither success nor error callback will be called.

You can manually fix this behavior by executing the following lines in the safari console after a hang:

```js

var db = window.sqlitePlugin.openDatabase({ name: 'db.db', location: 2});
db.abortAllPendingTransactions();
db.close();
```

Then navigate again and after that call database will work again (until further navigation ...)
