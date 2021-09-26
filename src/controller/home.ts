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
export function lolita(req: Request, res: Response) {
  res.json({ oi: 'ola' });
  const GoogleImages = require('google-images');

  const client = new GoogleImages(
  );

  client.search('Abelha').then((images:any) => {
    console.log(images);
  });
}
