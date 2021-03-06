$(document).ready(function() {

  $('.ajax-enable-update .edit_banner_box').live("click", function(e) {
    $(this).submit();
  });

	$('.destroy_banner_style').live("click", function(e) {
		e.preventDefault();
		$(this).parent().remove();
	});

	$('.destroy_new_banner_styles').live("click", function(e) {
		e.preventDefault();
		$(this).closest('.new_banner_styles').remove();
	});

  // Handle adding new styles
  var styles_hash_index = 1;
  $('.add_new_banner_style').live("click", function(e) {
    e.preventDefault();
    $('#new-banner-styles').append(generate_html_for_hash("new_banner_styles", styles_hash_index));
  });

  // Generates html for new paperclip styles form fields
  generate_html_for_hash = function(hash_name, index) {
     var html = '<div class="' + hash_name + ' row"><div class="field">';
	    html += '<div class="five columns">';
	    html += '<label for="' + hash_name + '_' + index + '_name">';
	    html += Spree.translations.name + '</label>';
	    html += '<input id="' + hash_name + '_' + index + '_name" name="' + hash_name + '[' + index + '][name]" type="text" class="fullwidth"><br>';
	    html += '</div><div class="five columns">'
	    html += '<label for="' + hash_name + '_' + index + '_value">';
	    html += Spree.translations.value + '</label>';
	    html += '<input id="' + hash_name + '_' + index + '_value" name="' + hash_name + '[' + index + '][value]" type="text" class="fullwidth">';
	    html += '</div><div class="two columns">'
	    html += '<a href="#" title="' + Spree.translations.destroy + '" class="destroy_' + hash_name + ' with-tip button" style="margin-top: 19px;"><i class="icon-trash"></i> &nbsp; ' + Spree.translations.destroy + '</a>';
	    html += '</div></div></div>';

	    index += 1;
	    return html;
  };



});
