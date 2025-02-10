import Evento from '../models/evento.js';

class EventosController {
  static grantEventoAcess = () => process.env.EVENTO_FLAG === 'true';

  static getEventos = async (_, res) => {
    if (this.grantEventoAcess()) {
      try {
        const resultado = await Evento.getEventos();
        return res.status(200).json(resultado);
      } catch (err) {
        return res.status(500).json(err.message);
      }
    } else {
      return res.status(404).send();
    }
  };
}

export default EventosController;
