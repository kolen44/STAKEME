import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  async getTransactionByHash(hash: string): Promise<any> {
    const jsonRpcUrl = this.configService.get('JSON_RPC_URL');
    const data = {
      jsonrpc: '2.0',
      method: 'eth_getTransactionByHash',
      params: [hash],
      id: 1,
    };
    const response: any = await axios.post(jsonRpcUrl, data);
    const editedResponse = response.data.result;
    const editedData = {
      hash: editedResponse.blockHash,
      to: editedResponse.to,
      from: editedResponse.from,
      value: editedResponse.value,
      input: editedResponse.input,
      maxFeePerGas: editedResponse.maxFeePerGas,
      maxPriotityFeePerGas: editedResponse.maxPriotityFeePerGas,
      gasPrice: editedResponse.gasPrice,
    };
    return editedData;
  }

  async getInfoAboutBlock(height: number): Promise<any> {
    const jsonRpcUrl = this.configService.get('JSON_RPC_URL');
    const hexHeight = `0x${height.toString(16)}`;
    const data = {
      jsonrpc: '2.0',
      method: 'eth_getBlockByNumber',
      params: [hexHeight, true],
      id: 1,
    };
    const response: any = await axios.post(jsonRpcUrl, data);
    const editedResponse = response.data.result;
    const editedData = {
      height,
      hash: editedResponse.hash,
      gasLimit: editedResponse.gasLimit,
      gasUsed: editedResponse.gasUsed,
      size: editedResponse.size,
    };
    return editedData;
  }
}
