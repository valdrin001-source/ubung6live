import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
let db = null;
let isConnected = false;

async function ensureConnection() {
  if (!isConnected) {
    try {
      await client.connect();
      db = client.db("MusicDB_FS26");
      isConnected = true;
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error.message);
      throw error;
    }
  }
  return db;
}

//////////////////////////////////////////
// Artists
//////////////////////////////////////////

// Get all artists
async function getArtists() {
  let artists = [];
  try {
    const database = await ensureConnection();
    const collection = database.collection("artists");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    artists = await collection.find(query).toArray();
    artists.forEach((artist) => {
      artist._id = artist._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.error("Error getting artists:", error.message);
  }
  return artists;
}

// Get artist by id
async function getArtist(id) {
  let artist = null;
  try {
    const database = await ensureConnection();
    const collection = database.collection("artists");
    const query = { _id: new ObjectId(id) }; // filter by id
    artist = await collection.findOne(query);

    if (!artist) {
      console.log("No artist with id " + id);
      // TODO: errorhandling
    } else {
      artist._id = artist._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return artist;
}

// create an artist
async function createArtist(artist) {
  try {
    const database = await ensureConnection();
    const collection = database.collection("artists");
    const result = await collection.insertOne(artist);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update artist
// returns: id of the updated artist or null, if artist could not be updated
async function updateArtist(artist) {
  try {
    let id = artist._id;
    delete artist._id; // delete the _id from the object, because the _id cannot be updated
    const database = await ensureConnection();
    const collection = database.collection("artists");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: artist });

    if (result.matchedCount === 0) {
      console.log("No artist with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Artist with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}
// delete artist by id
// returns: id of the deleted artist or null, if artist could not be deleted
async function deleteArtist(id) {
  try {
    const database = await ensureConnection();
    const collection = database.collection("artists");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No object with id " + id);
    } else {
      console.log("Object with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// Albums
//////////////////////////////////////////

// Get all albums
async function getAlbums() {
  let albums = [];
  try {
    const database = await ensureConnection();
    const collection = database.collection("albums");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    albums = await collection.find(query).toArray();
    albums.forEach((albums) => {
      albums._id = albums._id.toString(); // convert ObjectId to String
    });
    //console.log(albums)
  } catch (error) {
    console.error("Error getting albums:", error.message);
  }
  return albums;
}

// export all functions so that they can be used in other files
export default {
  getArtists,
  getArtist,
  createArtist,
  updateArtist,
  deleteArtist,
  getAlbums,
};
