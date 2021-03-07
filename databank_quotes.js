// (author_name) means name of current author of quote. Can't include spaces or special characters.  ----------------------------------------------------------------------------------------------------------------------
// (quote_number) is the quote's ID. ----------------------------------------------------------------------------------------------------------------------
// Lowercase first name and uppercase last name is the standard notation in Javascript for two-word variables. ----------------------------------------------------------------------------------------------------------------------

// On the first line, change the "quoteID000001" to "(author_name)_ID(quote_number)" ----------------------------------------------------------------------------------------------------------------------
// On the third line, change the "Test." text to the content of the quote ----------------------------------------------------------------------------------------------------------------------
QUOTE_SEARCH = document.getElementsByClassName('quoteID000001');
for (var i = 0; i < QUOTE_SEARCH.length|0; i++) {
    QUOTE_SEARCH[i].innerHTML = '<span class="output">Test.</span>'; // Topic(s): 
}

// Separate bodies of code into author-based sections by comments with the author's name ----------------------------------------------------------------------------------------------------------------------
