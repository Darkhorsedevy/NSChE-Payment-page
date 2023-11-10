# NSChE-Payment-page
This is a simple NSChE Payment webpage that operates using HTML, JavaScript, CSS, Google Appscript, Google Sheets and finally Autocrat (automated mailng software)

Paystack JavaScript API is used as the frontend payment handler and on successful payment, a paystack event named "charge.success" is fired.

The charge.success event contains multiple handler properties and values which are stored in objects (JSON). Some examples of the handler properties include; email, paystack key, currency, metadata, and callback function.

Google Appscript is used to create a webhook (typically a function placed in a URL) which stringifies the JSON data that comes with the event and parses it. The webhook identifies the event then sends back a "200 0k" value to the Paystack handler which confirms the payment. Actions are then carried out with the eventdata and appended to Google spreadsheet.

The webhook URL is added to the paystack API & webhook settings in the owner's account dashboard before testing the payment process.

html and css are simply used for structuring and styling of the payment page.
