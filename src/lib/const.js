import packageJson from '../../package.json';

const BASE_ROUTE = packageJson.homepage.split('/').pop();

export { BASE_ROUTE };