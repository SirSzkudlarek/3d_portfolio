import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';

import VerticalLine from '../components/VerticalLine';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';
import Orc from '../models/Orc';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const adjustOrcForScreenSize = () => {
    let OrcScale = null;
    let OrcPosition = null;

    if (window.innerWidth < 768) {
      OrcScale = [4.5, 4.5, 4.5];
      OrcPosition = [0, -3, 0];
    } else {
      OrcScale = [3.5, 3.5, 3.5];
      OrcPosition = [0, -1.5, 0];
    }
    return [OrcScale, OrcPosition];
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('attack');

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Damian',
          from_email: form.email,
          to_email: 'damian.szkudlarek1237@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ show: true, text: 'Wiadomość została wysłana!', type: 'success' });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation('idle');
          setForm({ name: '', email: '', message: '' });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('idle');
        console.log(error);
        showAlert({ show: true, text: 'Nie otrzymałem twojej wiadomości', type: 'danger' });
      });
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  const [OrcScale, OrcPosition] = adjustOrcForScreenSize();

  return (
    <section className="relative min-h-[100vh] w-full">
      <div className="flex lg:flex-row flex-col max-container gap-8">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Napisz do mnie!</h1>

          <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
            <label className="text-black-500 font-semibold">
              Imię
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Jan"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="jan@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Wiadomość
              <textarea
                name="message"
                rows={4}
                className="textarea"
                placeholder="Napisz wiadomość..."
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button type="submit" className="btn" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>
              {isLoading ? 'Wysyłam...' : 'Wyślij wiadomość'}
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Orc
                currentAnimation={currentAnimation}
                position={OrcPosition}
                rotation={[12.6, -0.6, 0]}
                scale={OrcScale}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <VerticalLine position_x={'left-[10%]'} />
      <VerticalLine position_x={'right-[10%]'} />
    </section>
  );
};

export default Contact;
