import Evento from '../models/evento.js';

class EventosController {
  static getEventos = async (_, res) => {
    try {
      const resultado = await Evento.getEventos();
      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default EventosController;
