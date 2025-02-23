import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import ensureAuthenticated from '../../middlewares/auth';

const privateRoutes = (server: FastifyInstance, opts: FastifyPluginOptions, done: () => void) => {
  server.addHook('onRequest', ensureAuthenticated);
  //server.addHook('onSend', ensureLog);

  //server.register(%domain%Routes, { prefix: '/%domain%' });

  done();
};

export default privateRoutes;

