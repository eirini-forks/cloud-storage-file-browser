export default {
  APIEndpoint: JSON.parse(process.env.REACT_APP_VCAP_SERVICES).storage[0].credentials.apiEndpoint,
  BucketUrl: JSON.parse(process.env.REACT_APP_VCAP_SERVICES).storage[0].credentials.bucketUrl,
  appName: 'Bucket File Manager', // The name that appears at the top of the app menu.
}

