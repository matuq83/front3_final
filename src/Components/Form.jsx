import React, { useState } from "react";


const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,[name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {name, email} = formData;

    // Validación del nombre (debe tener al menos 5 caracteres)
    if (name.length < 5) {
      setError( "El nombre debe tener al menos 5 caracteres.");
      setSuccess(false);
      return;
    }

    // Validación del email (formato correcto)
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError("El formato del correo electrónico es incorrecto.");
      setSuccess(false);
      return;
    }

     // Si todas las validaciones pasan, muestra el mensaje de éxito
      setError(null);
      setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre Completo:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}/>
      </div>
      <button type="submit">Enviar</button>
      {error && <p className="error">{error}</p>}
      {success && (
        <p className="success">
          Gracias {formData.name}, te contactaremos pronto.
        </p>
      )}
    </form>
  );
};

export default Form;
