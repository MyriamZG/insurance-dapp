import web3 from './web3';
import ParametricInsurance from './ParametricInsurance.json';


const address = '0xB1EFAfF9D463efAdcD5F0d7a25164aa63640BF9A'; // Adresse déployée du contrat
const instance = new web3.eth.Contract(ParametricInsurance.abi, address);

export default instance;
