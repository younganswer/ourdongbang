const { S3_BUCKET } = process.env;
const sharp = require("sharp");
const aws = require("aws-sdk");
const s3 = new aws.S3();
const transformationOptions = [
  { dir: "w440", width: 440 },
  { dir: "w680", width: 680 },
];

exports.handler = async (event) => {
  try {
    const key = event.Records[0].s3.object.key.split("/")[1];
    const image = await s3
      .getObject({ Bucket: S3_BUCKET, Key: event.Records[0].s3.object.key })
      .promise();

    await Promise.all(
      transformationOptions.map(async ({ dir, width }) => {
        try {
          const newKey = `${dir}/${key}`;
          const factor =
            dir === "w440"
              ? {
                  width,
                  height: width,
                  fit: "outside",
                }
              : {
                  width,
                };
          const resizedImage = await sharp(image.Body)
            .rotate()
            .resize(factor)
            .toBuffer();
          const params = {
            Bucket: S3_BUCKET,
            Key: newKey,
            Body: resizedImage,
          };

          await s3.putObject(params).promise();
        } catch (err) {
          throw err;
        }
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "success" }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
