import mongoose from 'mongoose';

export const dbConnection = () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.log('MONGO_URI is not defined');
    return;
  }

  mongoose
    .connect(uri, {
      dbName: 'MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to database!');
    })
    .catch((err) => {
      console.log('Some error occurred while connecting to database:', err);
    });
};
