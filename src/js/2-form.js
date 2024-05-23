const formData = {
    email: '',
    message: '',
  };
  
  const formRefs = {
    form: document.querySelector(`.feedback-form`),
    input: document.querySelector('input[type="email"]'),
    textarea: document.querySelector('textarea'),
  };
  
  const { form, input, textarea } = formRefs;
  
  populateTextArea();
  
  function onFormInput(event) {
    formData.email = input.value;
    formData.message = textarea.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
  
  function onFormSubmit(event) {
    event.preventDefault();
    const email = input.value;
    const message = textarea.value;
    if (!email || !message) {
      alert('Fill please all fields');
      return;
    }
    event.currentTarget.reset();
    localStorage.removeItem(`feedback-form-state`);
  }
  
  function populateTextArea() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const { email, message } = JSON.parse(savedData);
      input.value = email;
      textarea.value = message;
    }
  }
  
  input.addEventListener(`input`, onFormInput);
  textarea.addEventListener(`input`, onFormInput);
  form.addEventListener(`submit`, onFormSubmit);