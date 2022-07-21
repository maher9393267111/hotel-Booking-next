import nc from 'next-connect'
 import dbConnect from '../../../config/dbConnect'

import {  getSingleRoom,updateRoom  } from '../../../controllers/roomControllers'

//import onError from '../../../middlewares/errors'
//import { isAuthenticatedUser, authorizeRoles } from '../../../middlewares/auth'

//const handler = nc({ onError });

const handler = nc()

dbConnect();

handler.get(getSingleRoom)
handler.put(updateRoom)

// handler
//     .use(isAuthenticatedUser, authorizeRoles('admin'))
//     .put(updateRoom)

// handler
//     .use(isAuthenticatedUser, authorizeRoles('admin'))
//     .delete(deleteRoom)


export default handler;


// import nc from 'next-connect';
// import Room from '../../../models/room';


// const handler = nc();

// handler.get(async (req, res) => {
//   await dbConnect();
//   const product = await Room.findById(req.query.id);
//   //await db.disconnect();
//   res.send(product);
// });

// export default handler;