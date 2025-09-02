export default {
  APIEndpoint: (await getConfig()).apiEndpoint,
  BucketUrl: (await getConfig()).bucketUrl,
  appName: 'File Browser', // The name that appears at the top of the app menu.
}

async function getConfig() {
  const url = "https://file-browser-backend.cfday.korifi.cf-app.com/api/config";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result
}
