export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
  BUCKET: 'kerem-bucket'
  },
  apiGateway: {
    URL: 'https://cv0m56evo9.execute-api.us-east-1.amazonaws.com/prod/',
  },
  cognito: {
    USER_POOL_ID : 'us-east-2_93RI4qz0R',
    APP_CLIENT_ID : '382cel3tbn6mpg2kk3mmhaib0b',
    REGION: 'us-east-2',
    IDENTITY_POOL_ID: 'us-east-2:898511cc-dac4-4e72-9956-ac24955722d3',
  }
};