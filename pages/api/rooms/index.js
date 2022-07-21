import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import {  newRoom,allRooms } from '../../../controllers/roomControllers'

//const handler = nc({ onError });
const handler = nc()

dbConnect();

handler.get(allRooms)

handler
   // .use(isAuthenticatedUser, authorizeRoles('admin'))
    .post(newRoom)

export default handler;