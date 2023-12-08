import "dotenv/config";
import { connect } from 'mongoose';

async function dbConnection(): Promise<any> {

  const BD_URI = <string>process.env.URI;

  await connect(BD_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

}

export default dbConnection;