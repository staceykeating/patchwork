const raisinAlarm = function(cookie) {
  let alarm = ""
  for (let i = 0; i < cookie.length; i++) {
  //console.log(cookie[i])
    if (cookie[i] === ":grapes:") {
      return 'Raisin Alert!';
      //console.log(alarm + 'testing')
    } else {
      alarm = 'All Good!';
    }
  } 
  return alarm
}
console.log(raisinAlarm([":chocolate_bar:", ":chocolate_bar:", ":grapes:", ":chocolate_bar:"]));
console.log(raisinAlarm([":chocolate_bar:", ":grapes:", ":chocolate_bar:", ":chocolate_bar:", ":grapes:"]));
console.log(raisinAlarm([":chocolate_bar:", ":chocolate_bar:", ":chocolate_bar:"]));