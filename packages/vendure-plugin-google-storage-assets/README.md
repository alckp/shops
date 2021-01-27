# Vendure Google Asset Storage plugin
Stores assets in a Google Cloud Storage Bucket. 
In the Shop-api it returns the absolute public url to the storage bucket, thus not going through the asset server.
In the admin api, it returns the relative url, because the Admin UI needs resizing functionality of the asset server.

1. `yarn add vendure-plugin-webhook`
1. Create a bucket which is publicly available in Google Cloud.
1. Add to your `vendure-config.ts` 
```js
        AssetServerPlugin.init({
            storageStrategyFactory: () => new GoogleStorageStrategy('your-bucket-name'),
            route: 'assets',
            assetUploadDir: '/tmp/vendure/assets',
            port: 3001,
        })
```

For local development, use `gcloud auth application-default login` to authorize for your Gcloud project.   
Internally this plugin uses `new Storage();` to instantiate the Storage client, which uses ENV variables to authenticate:
```
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
```
https://cloud.google.com/compute/docs/tutorials/nodejs-guide
