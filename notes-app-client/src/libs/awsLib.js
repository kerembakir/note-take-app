import AWS from 'aws-sdk';
import config from '../config.js';

export async function invokeApig(
  { path,
    method = 'GET',
    body }, userToken) {

  const url = `${config.apiGateway.URL}${path}`;
  const headers = {
    Authorization: userToken,
  };

  body = (body) ? JSON.stringify(body) : body;

  const results = await fetch(url, {
    method,
    body,
    headers
  });

  if (results.status !== 200) {
    throw new Error(await results.text());
  }

  return results.json();
}

export function getAwsCredentials(userToken) {
  const authenticator = `cognito-idp.${config.cognito.REGION}.amazonaws.com/${config.cognito.USER_POOL_ID}`;

  AWS.config.update({ region: config.cognito.REGION });

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: config.cognito.IDENTITY_POOL_ID,
    Logins: {
      [authenticator]: userToken
    }
  });

  return AWS.config.credentials.getPromise();
}