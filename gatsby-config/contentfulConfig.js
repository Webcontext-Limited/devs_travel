const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
  downloadLocal: false,
  environment: process.env.ENVIROMENT,
  // The response payload from contentful should be always under 7MB. If it goes higher, simply reduce the pagelimit.
  pageLimit: 100,
  // Too many concurrent requests can cause stalled downloads. If that happens reduce the number of workers.
  assetDownloadWorkers: 50,
}

module.exports = contentfulConfig
