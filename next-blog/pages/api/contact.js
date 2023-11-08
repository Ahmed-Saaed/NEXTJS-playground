import {MongoClient} from 'mongodb';

async function handler(req, res) {
  if (req === 'POST') {
    const {email, name, message} = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({message: 'invalid input'});
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.rnjd1ve.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

    try {
      const client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({message: 'couldnt connect to the DB'});
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
      res.status(201).json({message: 'Succesfuly sent', message: newMessage});
      client.close();
    } catch (error) {
      client.close();
      res.status(500).json({message: 'storing message failed'});
      return;
    }
  }
}

export default handler;
