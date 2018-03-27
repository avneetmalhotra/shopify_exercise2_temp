$(function(){
  
  var discount_input_element = "<div>{% if customer and customer.metafields.global.advance_discount_code %}<input class='js-form-discount' type='hidden' name='discount' value='{{ customer.metafields.global.advance_discount_code }}' >{% endif %}</div>"
  $("form[action='/cart'][method='post']").prepend(discount_input_element);
  
});
