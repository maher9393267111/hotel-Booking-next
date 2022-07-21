import Room from '../models/room';
import catchAsyncErrors from '../middlewares/catchAsyncErrors'


// Create new room   =>   /api/rooms
const newRoom1 = //catchAsyncErrors
(async (req, res) => {

 //   const images = req.body.images;

    // let imagesLinks = [];

    // for (let i = 0; i < images.length; i++) {

    //     const result = await cloudinary.v2.uploader.upload(images[i], {
    //         folder: 'bookit/rooms',
    //     });

    //     imagesLinks.push({
    //         public_id: result.public_id,
    //         url: result.secure_url
    //     })

    // }

    // req.body.images = imagesLinks;
    // req.body.user = req.user._id

    const room = await Room.create(req.body);
    console.log('------------->>>>>',room);

    res.status(200).json({
        success: true,
        room
    })
})


const  newRoom  =  async (req, res) => {

    const room = await Room.create(req.body);
    console.log('------------->>>>>',room);

    res.status(200).json({
        success: true,
        room
    })


}



const allRooms = async (req, res) => {

    const rooms = await Room.find();
    console.log('------------->>>>>',rooms);

    res.status(200).json({
        success: true,
        rooms,
        count: rooms.length
    })


}



// Get room details   =>   /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {

    const room = await Room.findById(req.query.id);

    if (!room) {
        return next(new ErrorHandler('Room not found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        room
    })
})



export {
    allRooms,
    newRoom,
     getSingleRoom,
    // updateRoom,
    // deleteRoom,
    // createRoomReview,
    // checkReviewAvailability,
    // allAdminRooms,
    // getRoomReviews,
    // deleteReview
}