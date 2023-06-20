function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = quote.text;
    document.getElementById("quote-author").textContent = "- " + quote.author;
  }
  document.getElementById("new-quote-btn").addEventListener("click", generateQuote);
  function readQuote() {
    const quoteText = document.getElementById("quote-text").textContent;
    const speech = new SpeechSynthesisUtterance(quoteText);
    window.speechSynthesis.speak(speech);
  }
  document.getElementById("read-quote-btn").addEventListener("click", readQuote);