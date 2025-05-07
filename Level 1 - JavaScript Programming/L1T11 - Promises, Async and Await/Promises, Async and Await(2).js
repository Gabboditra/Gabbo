// Declare an async function
async function fetchCatGif() {
  try {
    // Fetch data from the API
    const response = await fetch(
      "http://thecatapi.com/api/images/get?format=src&type=gif"
    );

    // Extract GIF URL from the response
    const gifUrl = response.url;

    // Log GIF URL to the console
    console.log(gifUrl);
  } catch (error) {
    // Handle and output any errors to the console
    console.error("Error fetching cat GIF:", error);
  }
}

// Call the function to fetch and display a cat GIF URL
fetchCatGif();
