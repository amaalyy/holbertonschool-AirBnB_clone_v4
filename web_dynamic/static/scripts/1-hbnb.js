$(document).ready(() => {
  const amenities = {};

  $('input[type="checkbox"]').change(function () {
    if ($(this).prop('checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    let text = '';
    for (const amenity in amenities) {
      text += `${amenities[amenity]}, `;
    }
    text = text.slice(0, -2);
    $('div.amenities h4').text(text);
  });
});
