import { connectDatabase, insertDocument } from '@/helpers/db-util';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email!', email: email });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'connecting to the database failed' });
      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email: email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'inserting data failed' });
      return;
    }

    res.status(201).json({ message: 'Success!', email: email });
  }
}
