import AWS from 'aws-sdk'

const S3_BUCKET ='cloudcompfinals';
const REGION ='ap-southeast-1';


AWS.config.update({
    accessKeyId: 'AKIATUXNIDH4C72FSQWU',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

export default myBucket