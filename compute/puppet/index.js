const puppeteer = require('puppeteer')
const storage = require('@google-cloud/storage')()

// visit a website and take a screenshot
async function visit (url) {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  await page.goto(url)
  await page.screenshot({
    path: process.env.FILENAME || 'snaphot.png'
  })
  await browser.close()
  return true
}

// upload screenshot file to google storage
async function uploadFile (filename) {
  // Uploads a local file to the bucket
  await storage
    .bucket(process.env.BUCKET_NAME || 'gcp-storage.vikramtiwari.com')
    .upload(filename)
    .then(() => {
      console.log(`${filename} uploaded`)
      return true
    })
    .catch((err) => {
      console.error('ERROR:', err)
      return false
    })
}

// take a screenshot and upload to google storage every 1000ms * 60 * 60
setInterval(async() => {
  visit(process.env.URL || 'https://happydemogods.vikramtiwari.com')
    .then(() => uploadFile(process.env.FILENAME || 'snaphot.png')
      .then(() => {
        console.log('All done!')
      })
      .catch((err) => {
        console.error('ERROR:', err)
      }))
}, 1000 * 60 * 10)
