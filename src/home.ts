export default function searchImagemByName(req:any, res:any) {
  let nome = req.query.palavraChave || 'Abelha';

  const GoogleImages = require('google-images');
    console.log("id eh "+process.env.CSE_ID)
  const client = new GoogleImages(
    process.env.CSE_ID,
    process.env.GPROJECT_API_KEY,
  );

  client.search(nome).then((images: any) => {
    res.json({ thumb: images[1].thumbnail.url, big: images[1].url });
  });
}