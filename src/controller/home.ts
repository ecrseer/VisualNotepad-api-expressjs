import * as homeService from '@/service/home';

import { Request, Response } from 'express';

/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getAppInfo = (req: Request, res: Response) => {
  const result = homeService.getAppInfo();

  res.json(result);
};
export function searchImagemByName(req: Request, res: Response) {
  let nome = req.query.palavraChave || 'Abelha';
  const GoogleImages = require('google-images');

  const client = new GoogleImages(
    process.env.CSE_ID,
    process.env.GPROJECT_API_KEY,
  );

  client.search(nome).then((images: any) => {
    res.json({ thumb: images[1].thumbnail.url, big: images[1].url });
  });
}
