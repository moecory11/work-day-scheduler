var hour1 = $('#time1').text();
var hour2 = $('#time2').text();
var hour3 = $('#time3').text();
var hour4 = $('#time4').text();
var hour5 = $('#time5').text();
var hour6 = $('#time6').text();
var hour7 = $('#time7').text();
var hour8 = $('#time8').text();
var hour9 = $('#time9').text();

var datetime = null,
    date = null;
var time = function() {
  date = moment(new Date())
  datetime.html(date.format('dddd, MMMM Do YYYY h:mm:ss a'));
};
$(document).ready(function() {
  datetime = $('#datetime')
  time();
  setInterval(time, 1000);
});

$('#btn1').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text1');
  }
    var hour1String = JSON.stringify(hour1);
    localStorage.setItem(hour1, $('#text1').val());
});

$('#btn2').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text2');
  }
    var hour2String = JSON.stringify(hour2);
    localStorage.setItem(hour2String, $('#text2').val());
});

$('#btn3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }
    var hour3String = JSON.stringify(hour3);
    localStorage.setItem(hour3String, $('#text3').val());
});

$('#btn4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('text4');
  }
    var hour4String = JSON.stringify(hour4); 
    localStorage.setItem(hour4String, $('#text4').val());
});

$('#btn5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('text5');
  }
    var hour5String = JSON.stringify(hour5);
    localStorage.setItem(hour5String, $('#text5').val());
});

$('#btn6').click(function() {
  if($('#text6').val()) {
    localStorage.removeItem('text6');
  }
    var hour6String = JSON.stringify(hour6);
    localStorage.setItem(hour6String, $('#text6').val());
});

$('#btn7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }
    var hour7String = JSON.stringify(hour7);
    localStorage.setItem(hour7String, $('#text7').val());
});

$('#btn8').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }
    var hour8String = JSON.stringify(hour8);
    localStorage.setItem(hour8String, $('#text8').val());
});
$('#btn9').click(function() {
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  } //clear storage to update with string val
    var hour9String = JSON.stringify(hour9);
    localStorage.setItem(hour9String, $('#text9').val());
});
//.click functions are only saving the time to local storage.
//figure out why...

//still need to link time interval to timeblocks