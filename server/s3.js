const aws = require("aws-sdk")
const crypto = require("crypto")
const { promisify } = require("util")

const randomBytes = promisify(crypto.randomBytes)


const region = "ap-southeast-1"
const bucketName = "cloudcompfinals"
const accessKeyId = "AKIATUXNIDH4GZ2GH3GU"
const secretAccessKey = "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"
const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})

async function generateUploadURL() {
  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString('hex')

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  })
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}

module.exports = { generateUploadURL }