export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
  BUCKET: 'xxxxxx-bucket'
  },
  apiGateway: {
    URL: 'https://XXXXXXXXX.execute-api.us-east-1.amazonaws.com/prod/',
  },
  cognito: {
    USER_POOL_ID : 'YOUR_COGNITO_USER_POOL_ID',
    APP_CLIENT_ID : 'YOUR_COGNITO_APP_CLIENT_ID',
    REGION: 'us-east-2',
    IDENTITY_POOL_ID: 'us-east-2:XXXXXXX-XXX-XXXX-XXXX-XXXXXXXX',
  }
};