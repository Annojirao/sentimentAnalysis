import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import processdata from '../lib/naturalprocessor'
export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.post('/', (req, res) => {
		
		var resultant = processdata(req.body.input);
		res.json(resultant);
		
	});

	return api;
}
