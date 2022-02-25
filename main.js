const scriptURL = 'https://script.google.com/macros/s/AKfycbzsKTEIeKmbZ9Cl7ty5vw8VsIKb2i-ncMXYDQNAwInta-gE5tRtgmJBfY3JuuzaucNm_w/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    alert("form submitted");
})