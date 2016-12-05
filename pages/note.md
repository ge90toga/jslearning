### asynchronous, callback
- asynchronous: more than one job at a time.
- javascript runs **synchronously**.
- asynchronous happens in terms of multiple browser components (outside of js), (javascript engine/ http request / rendering engine)
- what is happening inside js engine is synchronous!

### Event queue
- when the function call (execution) stack is **empty**, js engine periodically checks the 
Event queue to see if there is new notifications (click, http response) and execute callbacks. 