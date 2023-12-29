document.addEventListener('DOMContentLoaded', () => {
  const userPromptInput = document.getElementById('user-prompt');
  const submitFormButton = document.getElementById('submit-form');
  const responseContainer = document.getElementById('response-container');

  submitFormButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const userPrompt = userPromptInput.value;
    if (userPrompt.trim() !== '') {
      // Display user input immediately
      responseContainer.innerHTML += `<p class="user_prompt">User Prompt: ${userPrompt}</p>`;
      
      const mainPromptUrl = 'https://gpt.koogle.sk/api/prompt_route';
      try {
        const response = await fetch(mainPromptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `user_prompt=${encodeURIComponent(userPrompt)}`,
        });
        const responseData = await response.json();
        // Display response data
        updateResponseUI(responseData);
      } catch (error) {
        console.error(error);
      }
    }
  });

  function updateResponseUI(responseData) {
    // Append response to existing content
    responseContainer.innerHTML += `
      <p class="ai_response">AI Response: ${responseData.Answer}</p>`;
  }
});
