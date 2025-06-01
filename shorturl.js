import URL from './url.js'; // Mongoose model

async function handle_shorturl(req, res) {
  const shortID = req.params.shortID;

  const entry = await URL.findOne({ shorturl: shortID });

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }


  return res.redirect(entry.url);
}

export default handle_shorturl;