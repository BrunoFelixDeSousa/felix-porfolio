import type React from 'react';

import { Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: '',
      subject: '',
      message: '',
    };

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
      valid = false;
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Assunto é obrigatório';
      valid = false;
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = 'Mensagem é obrigatória';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simula a chamada da API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="p-6 overflow-y-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-[#b5a265]/30'
            } focus:outline-none focus:ring-2 focus:ring-[#b5a265]/50 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white`}
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="block text-gray-700 dark:text-gray-300 font-medium"
          >
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.subject ? 'border-red-500' : 'border-[#b5a265]/30'
            } focus:outline-none focus:ring-2 focus:ring-[#b5a265]/50 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white`}
            placeholder="Assunto da mensagem"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-300 font-medium"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-500' : 'border-[#b5a265]/30'
            } focus:outline-none focus:ring-2 focus:ring-[#b5a265]/50 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white resize-none`}
            placeholder="Sua mensagem aqui..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-[#b5a265] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#a08c55] transition-colors disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Enviar</span>
              </>
            )}
          </button>
        </div>

        {submitSuccess && (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
            Mensagem enviada com sucesso! Entraremos em contato em breve.
          </div>
        )}
      </form>
    </div>
  );
}
