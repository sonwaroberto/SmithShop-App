import axios from 'axios';
import {ProductApis} from '../api/product';

/**
 * Product service
 */

export default class ProductServices {
  public async getAllProducts() {
    const response = await axios.get(ProductApis.getProduct);
    return response?.data;
  }
}
