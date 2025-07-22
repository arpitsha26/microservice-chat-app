import ampq from "amqplib";
let channel;
export const connectRabbitMQ = async () => {
    try {
        const connection = await ampq.connect({
            protocol: "amqp",
            hostname: process.env.Rabbitmq_Host,
            port: 5672,
            username: process.env.Rabbitmq_Username,
            password: process.env.Rabbitmq_Password,
        });
        channel = await connection.createChannel();
        console.log("✅Rabbitmq connected successfully");
    }
    catch (error) {
        console.log("Failed to connect to RabbitMQ", error);
    }
};
export const publishToQueue = async (queueName, message) => {
    if (!channel) { }
};
