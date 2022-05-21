import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		const client = await MongoClient.connect(uri);
		const db = client.db();

		const moviesCollection = db.collection('Movies');

		const result = await moviesCollection.insertOne(data);

		client.close();

		res.status(201).json({ message: 'Movie inserted!' });
}

// import { connectToDatabase } from '../../lib/mongodb';

// export default async (req, res) => {
// 	const { db } = await connectToDatabase();

// 	const movies = await db

// 		.collection('movies')
// 		.find({})
// 		.sort({ metacritic: -1 })
// 		.limit(20)
// 		.toArray();

// 	res.json(movies);
// };
