// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

<SCRIPT LANGUAGE="JavaScript">
// function parameters are: field - the string field, count - the field for remaining characters number and max - the maximum number of characters 
function CountLeft(field, count, max) {
// if the length of the string in the input field is greater than the max value, trim it 
if (field.value.length > max)
field.value = field.value.substring(0, max);
else
// calculate the remaining characters 
count.value = max - field.value.length;
}
</script>

