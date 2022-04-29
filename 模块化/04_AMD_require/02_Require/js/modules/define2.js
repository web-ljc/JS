

define(['defineFn', 'jquery'], function(defineFn, $) {
  let msg = 'defineMsg'
  function showMsg() {
    console.info(msg, defineFn.getName())
    console.info($('#btn'))
  }
  return { showMsg }
})