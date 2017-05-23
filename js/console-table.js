var contacts = {
  "London": {
    "Tel": "+44 (0)207 946 0128",
    "Country": "UK"
  },
  "Sydney": {
    "Tel": "+6 (0)2 7010 1212",
    "Country": "Australia"
  },
  "New York": {
    "Tel": "+1 (0) 555 2104",
    "Country": "USA"
  }
};

console.table(contacts);

var city, contactDetails;
contactDetails = '';

$.each(contacts, function(city, contacts) {
  contactDetails += city + ': ' + contacts.Tel + '<br />';
});
$('h2').after('<p>' + contactDetails + '</p>');