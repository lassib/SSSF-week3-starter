/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: create a controller to send the data of uploaded cat
// to the client
// data to send is described in UploadMessageResponse interface

import UploadMessageResponse from '../../interfaces/UploadMessageResponse';

const catPost = async (req: any, res: any) => {
  try {
    const catData = {
      filename: 'cat.jpg',
      location: res.locals.coords,
    };

    const response: UploadMessageResponse = {
      message: 'Cat uploaded successfully',
      data: catData,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log('Error while uploading cat: ', err);
    res.status(500).json({message: 'Error while uploading cat'});
  }
};

export {catPost};
