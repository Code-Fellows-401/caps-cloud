'use strict';
const uuid = require('uuid').v4;
const faker = require('faker');

const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' }); // Put your region here
const sns = new AWS.SNS();
const sqs = new AWS.SQS();
const queueArn = 'arn:aws:sqs:us-west-2:443681309443:packages.fifo';
const topic = 'arn:aws:sns:us-west-2:443681309443:pickup.fifo';

const send = async (groupId, payload) => {
	return await sqs
		.sendMessage({
			MessageGroupId: `group-${groupId}`,
			MessageDeduplicationId: `m-${groupId}-${faker.datatype.uuid()}`,
			MessageBody: `${payload}`,
			QueueUrl:
				'https://sqs.us-west-2.amazonaws.com/443681309443/packages.fifo', //--------- Must put your sqsUrl Arn Here!!
		})
		.promise();
};

const main = async (payload) => {
	try {
		console.log('hello!');
		let data = await send('A', payload);
		console.log(payload);
		return data;
	} catch (err) {
		console.log(err);
	}
};

setInterval(() => {
	const payload = {
		orderID: uuid(),
		customer: faker.name.findName(),
		vendorID: queueArn,
		Message: faker.lorem.sentences(),
		TopicArn: topic,
	};
	main(payload);
}, 5000);

// faker.random.alphaNumeric()
