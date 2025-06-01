import mongoose from 'mongoose';

export async function connect_to_mongodb(url) {
  return mongoose.connect(url);
}