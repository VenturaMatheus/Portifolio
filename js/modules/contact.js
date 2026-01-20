const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEB3FORMS_KEY = '74a9f264-7527-4d7b-96e3-6ef7ac6d5045';

const sendToWeb3Forms = async (payload) => {
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('from_name', payload.name);
    formData.append('email', payload.email);
    formData.append('message', payload.message);
    formData.append('redirect', false);

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
    });

    const result = await response.json();
    if (!result.success) {
        throw new Error(result.message || 'Erro ao enviar formulário. Tente novamente.');
    }
    return result;
};

const setMessage = (el, text, state) => {
    if (!el) return;
    el.textContent = text;
    el.className = `contatos__form-message ${state}`;
};

const setLoading = (button, isLoading) => {
    if (!button) return;
    button.disabled = isLoading;
    button.setAttribute('aria-busy', String(isLoading));
    button.innerHTML = isLoading ? '<i class="fas fa-spinner fa-spin"></i> Enviando...' : '<i class="fas fa-paper-plane"></i> Enviar Mensagem';
};

const validateForm = (form) => {
    const name = form.querySelector('input[name="name"]')?.value.trim();
    const email = form.querySelector('input[name="email"]')?.value.trim();
    const message = form.querySelector('textarea[name="message"]')?.value.trim();

    if (!name || !email || !message) {
        return { valid: false, error: 'Por favor, preencha todos os campos.' };
    }

    if (!emailRegex.test(email)) {
        return { valid: false, error: 'Por favor, insira um email válido.' };
    }

    return { valid: true, data: { name, email, message } };
};

export function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('contact-message');
    const submitButton = form?.querySelector('button[type="submit"]');

    if (!form || !feedback) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const validation = validateForm(form);

        if (!validation.valid) {
            setMessage(feedback, validation.error, 'error');
            return;
        }

        setLoading(submitButton, true);
        setMessage(feedback, 'Enviando sua mensagem...', 'loading');

        try {
            await sendToWeb3Forms(validation.data);
            setMessage(feedback, `Obrigado, ${validation.data.name}! Sua mensagem foi recebida. Em breve entrarei em contato!`, 'success');
            form.reset();
        } catch (error) {
            setMessage(feedback, error.message || 'Não foi possível enviar. Tente novamente.', 'error');
        } finally {
            setLoading(submitButton, false);
            setTimeout(() => setMessage(feedback, '', ''), 4500);
        }
    });
}
