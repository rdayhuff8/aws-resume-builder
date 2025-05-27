document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const responseEl = document.getElementById('formResponse');

  try {
    const response = await fetch('https://a22ubnlip6.execute-api.us-east-2.amazonaws.com/prod/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
      responseEl.textContent = '✅ Message sent successfully!';
      form.reset();
    } else {
      responseEl.textContent = `❌ Error: ${result.error || 'Something went wrong'}`;
    }
  } catch (error) {
    responseEl.textContent = `❌ Network error: ${error.message}`;
  }
});
