$(document).ready(function () {
  const amenities = {};

  $('input[type="checkbox"]').change(function () {
    if ($(this).prop('checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    let text = '';
    for (const amenity in amenities) {
      text += amenities[amenity] + ', ';
    }
    text = text.slice(0, -2);
    $('div.amenities h4').text(text);
  });
});

$(document).ready(function () {
  function updateAPIStatus() {
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
  }

  updateAPIStatus();

  setInterval(updateAPIStatus, 5000);
});
