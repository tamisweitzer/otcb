var hasInlineNote = document.getElementsByClassName("has-inline-note");
var inlineNote = document.getElementsByClassName("inline-note");

/***** Toggles the inline note *****/
// The inline note must be a sibling of the div marked 'has-inline-note' for this to work

$(hasInlineNote).on("click", function () {
  $(this).nextAll(inlineNote).eq(0).slideToggle("hide");
});

$(inlineNote).on("click", function () {
  $(this).slideToggle("hide");
});
