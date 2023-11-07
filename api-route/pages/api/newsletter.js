import {MongoClient} from 'mongodb';
import {connectDatabase, insertDocument} from '../../helpers/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({message: 'invalid email address '});
      return;
    }

    let client;

    try {
      client = connectDatabase();
    } catch (error) {
      res.status(500).json({message: 'connecting faild '});
      return;
    }

    try {
      await insertDocument(client, 'newsletter', {email: userEmail});
      client.close();
    } catch (error) {
      res.status(500).json({message: 'inserting faild '});
      return;
    }

    res.status(201).json({message: 'Signed UP!'});
  }
}

export default handler;
