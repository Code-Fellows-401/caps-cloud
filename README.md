# serverless-api

serverless-api is a JavaScript library handling AWS Lambda REST API functions for a Dynamo DataBase.

## Installation

use the following dependencies.

```
 "dependencies": {
    "aws-sdk": "^2.1027.0",
    "sqs-consumer": "^5.6.0"
  }
```

Then run the following Node Package Manager Command

```
npm install
```

## UML

![UML](/lib/images/vendor.png)

## Usage

Vandor.js connects to an external AWS SNS `Topic` which is subscribed to a FIFO SQS `Queue`.  
Utilizes:

```
sqs.sendMessage({})
```

Image Payload ex.

![UML](/lib/images/uml.png)

Sends a Message object to the receiving Method.

```
sqs.receiveMessage({})
```

This gatheres all messges in the message queue using the FIFO Method.

From there it is sent back to the requesting client.

## Contributors

Jacob Gregor - Author  
GITHUB REPO - "https://github.com/Code-Fellows-401/caps-cloud"

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Sources

Fanout to Amazon SQS queues:  
https://docs.aws.amazon.com/sns/latest/dg/sns-sqs-as-subscriber.html

Subscribing a function to a topic:  
https://docs.aws.amazon.com/sns/latest/dg/lambda-console.html

onfiguring a queue to trigger an AWS Lambda function (console):  
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-lambda-function-trigger.html

Message delivery for FIFO topics:  
https://docs.aws.amazon.com/sns/latest/dg/fifo-message-delivery.html

New for AWS Lambda – SQS FIFO as an event source:  
https://aws.amazon.com/blogs/compute/new-for-aws-lambda-sqs-fifo-as-an-event-source/

sqs-consumer:  
https://www.npmjs.com/package/sqs-consumer

ReceiveMessage:  
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html

Class: AWS.SQS:  
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#receiveMessage-property
