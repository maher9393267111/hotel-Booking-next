import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'
import onError from '../../../middlewares/errors'
import {  newRoom,allRooms,allRooms3 } from '../../../controllers/roomControllers'

const handler = nc({ onError });


dbConnect();

handler.get(allRooms3)

handler
   // .use(isAuthenticatedUser, authorizeRoles('admin'))
    .post(newRoom)

export default handler;