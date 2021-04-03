var hr1 = $('#time1').text();
var hr2 = $('#time2').text();
var hr3 = $('#time3').text();
var hr4 = $('#time4').text();
var hr5 = $('#time5').text();
var hr6 = $('#time6').text();
var hr7 = $('#time7').text();
var hr8 = $('#time8').text();
var hr9 = $('#time9').text();

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
    var hour1String = JSON.stringify(hr1);
    localStorage.setItem(hr1, $('#text1').val());
});

$('#btn2').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text2');
  }
    var hour2String = JSON.stringify(hr2);
    localStorage.setItem(hr2, $('#text2').val());
});

$('#btn3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }
    var hour3String = JSON.stringify(hr3);
    localStorage.setItem(hr3, $('#text3').val());
});

$('#btn4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('text4');
  }
    var hour4String = JSON.stringify(hr4); 
    localStorage.setItem(hr4, $('#text4').val());
});

$('#btn5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('text5');
  }
    var hour5String = JSON.stringify(hr5);
    localStorage.setItem(hr5, $('#text5').val());
});

$('#btn6').click(function() {
  if($('#text6').val()) {
    localStorage.removeItem('text6');
  }
    var hour6String = JSON.stringify(hr6);
    localStorage.setItem(hr6, $('#text6').val());
});

$('#btn7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }
    var hour7String = JSON.stringify(hr7);
    localStorage.setItem(hr7, $('#text7').val());
});

$('#btn8').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }
    var hour8String = JSON.stringify(hr8);
    localStorage.setItem(hr8, $('#text8').val());
});

$('#btn9').click(function() {
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  } //clear storage to update with string val
    var hour9String = JSON.stringify(hr9);
    localStorage.setItem(hr9, $('#text9').val());
});
//.click functions are only saving the time to local storage. Do not stay on page after refresh
//figure out why...

//still need to link time interval to timeblocks