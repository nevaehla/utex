
const {EthosClient} = require('@google-cloud/ethos');
const client = new EthosClient();

async function callExecuteTransactionBlock() {
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  // const location = 'YOUR_PROJECT_LOCATION';
  // const deviceId = 'YOUR_DEVICE_ID';
  // const transactions = 'YOUR_TRANSACTIONS';
  // const wallet = 'YOUR_WALLET';
  // const gasPrice = 1234;
  // const gasLimit = 5678;
  // const nonce = 9012;
  const request = {
    projectId,
    location,
    deviceId,
    transactions,
    wallet,
    gasPrice,
    gasLimit,
    nonce,
  };

  const [operation] = await client.executeTransactionBlock(request);
  const [response] = await operation.promise();
  console.log(response);
}

callExecuteTransactionBlock();


