import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

export default (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'sa',
				mongodb_password: 'NJ2yWkBwOfuLdBXI',
				mongodb_clustername: 'cluster0',
				mongodb_database: 'movies',
			},
		};
	}

	return {
		env: {
			mongodb_username: 'sa',
			mongodb_password: 'NJ2yWkBwOfuLdBXI',
			mongodb_clustername: 'cluster0',
			mongodb_database: 'movies',
		},
	};
};
