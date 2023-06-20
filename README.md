# Random-Quote-Generator

This is a simple web application that generates random quotes and allows users to read them aloud using text-to-speech functionality. The application displays a random quote each time the "New Quote" button is clicked. Additionally, users can click the "🔉" button to have the displayed quote read aloud.

## How to Use

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Click the "New Quote" button to generate a random quote.
4. Optionally, click the "🔉" button to have the displayed quote read aloud using text-to-speech.

## Technologies Used

- HTML
- CSS
- JavaScript

## Code Explanation

- The list of quotes is stored in the `quotes` array in the JavaScript code.
- The `generateQuote()` function selects a random quote from the array and updates the HTML elements to display the quote text and author.
- The `readQuote()` function retrieves the quote text from the HTML and uses the browser's text-to-speech functionality to read it aloud.
- Event listeners are added to the buttons to trigger the quote generation and text-to-speech functionalities.

## Customization

- To customize the quotes, update the `quotes` array in the JavaScript code with your desired quotes and authors.
- You can also modify the CSS styles in the `styles.css` file to change the appearance of the quote generator.
