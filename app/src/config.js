export default {
  APIEndpoint: (await getConfig()).apiEndpoint,
  BucketUrl: (await getConfig()).bucketUrl,
  appName: 'File Browser', // The name that appears at the top of the app menu.
}

async function getConfig() {
  const response = await fetch("/api/config");
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();
  return result
}
