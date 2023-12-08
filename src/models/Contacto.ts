import mongoose, { Schema } from 'mongoose';

const contactoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    apellido: {
      type: String,
      required: true
    },
    telefono: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    fecha_nacimiento: {
      type: Date,
      required: true
    },
    foto: {
      type: String,
    },
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuario"
    }
  },
  {
    timestamps: true,
  }
);


const ContactoModel = mongoose.model('Contacto', contactoSchema);

export default ContactoModel;