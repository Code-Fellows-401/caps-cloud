'use strict';

const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' }); // Put your region here

const sqs = new AWS.SQS();

const queueUrl =
	'https://sqs.us-west-2.amazonaws.com/443681309443/packages.fifo';

// var params = {
// 	QueueUrl: queueUrl /* required */,
// 	AttributeNames: [
// 		'All',
// 		// 	All |
// 		// 		Policy |
// 		// 		VisibilityTimeout |
// 		// 		MaximumMessageSize |
// 		// 		MessageRetentionPeriod |
// 		// 		ApproximateNumberOfMessages |
// 		// 		ApproximateNumberOfMessagesNotVisible |
// 		// 		CreatedTimestamp |
// 		// 		LastModifiedTimestamp |
// 		// 		QueueArn |
// 		// 		ApproximateNumberOfMessagesDelayed |
// 		// 		DelaySeconds |
// 		// 		ReceiveMessageWaitTimeSeconds |
// 		// 		RedrivePolicy |
// 		// 		FifoQueue |
// 		// 		ContentBasedDeduplication |
// 		// 		KmsMasterKeyId |
// 		// 		KmsDataKeyReusePeriodSeconds |
// 		// 		DeduplicationScope |
// 		// 		FifoThroughputLimit |
// 		// 		RedriveAllowPolicy,
// 		// 	/* more items */
// 		// ],
// 		// MaxNumberOfMessages: 'NUMBER_VALUE',
// 		// MessageAttributeNames: [
// 		//   'STRING_VALUE',
// 		//   /* more items */
// 	],
// 	// ReceiveRequestAttemptId: 'STRING_VALUE',
// 	// VisibilityTimeout: 'NUMBER_VALUE',
// 	// WaitTimeSeconds: 'NUMBER_VALUE'
// };
// const send = async (params) => {
// 	try {
// 		let data = await sqs.receiveMessage(params);
// 		console.log(data);
// 		// return JSON.stringify(data);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
const app = Consumer.create({
	queueUrl: queueUrl,
	handleMessage: async (message) => {
		let data = await sqs.receiveMessage(message);
		console.log(JSON.stringify(data.params.Body));
		return JSON.stringify(data.params.Body);
	},
});

// app.on('error', (err) => {
// 	console.log(err);
// });
app.start();
// send(params);
