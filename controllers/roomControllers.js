import Room from '../models/room';
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import APIFeatures from '../utils/apiFeatures'

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


// Update room details   =>   /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res) => {

    let room = await Room.findById(req.query.id);

    if (!room) {
        return next(new ErrorHandler('Room not found with this ID', 404))
    }

    // if (req.body.images) {

    //     // Delete images associated with the room
    //     for (let i = 0; i < room.images.length; i++) {
    //         await cloudinary.v2.uploader.destroy(room.images[i].public_id)
    //     }

    //     let imagesLinks = []
    //     const images = req.body.images;

    //     for (let i = 0; i < images.length; i++) {

    //         const result = await cloudinary.v2.uploader.upload(images[i], {
    //             folder: 'bookit/rooms',
    //         });

    //         imagesLinks.push({
    //             public_id: result.public_id,
    //             url: result.secure_url
    //         })

    //     }

    //     req.body.images = imagesLinks;

    // }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        room
    })

})


// Delete room   =>   /api/rooms/:id
const deleteRoom = catchAsyncErrors(async (req, res) => {

    const room = await Room.findById(req.query.id);

    if (!room) {
        return next(new ErrorHandler('Room not found with this ID', 404))
    }

    // Delete images associated with the room
    // for (let i = 0; i < room.images.length; i++) {
    //     await cloudinary.v2.uploader.destroy(room.images[i].public_id)
    // }

    await room.remove();

    res.status(200).json({
        success: true,
        message: 'Room is deleted.'
    })

})



// AllRooms with search query   =>   /api/rooms/search


// Create all rooms   =>   /api/rooms
const allRooms3 = catchAsyncErrors(async (req, res) => {

    const resPerPage = 3;

    const roomsCount = await Room.countDocuments();

// seach query searched for  location only --> 
//http://localhost:3000/api/rooms?location=Stafford

    const apiFeatures = new APIFeatures(Room.find(), req.query)
        .search()
      //  .filter()

    let rooms = await apiFeatures.query;
    let filteredRoomsCount = rooms.length;

    apiFeatures.pagination(resPerPage)
    rooms = await apiFeatures.query.clone();

    res.status(200).json({
        success: true,
        roomsCount,
        resPerPage,
        filteredRoomsCount,
        rooms
    })

})
















export {
    allRooms,
    newRoom,
     getSingleRoom,
     updateRoom,
     deleteRoom,
        allRooms3,
    // createRoomReview,
    // checkReviewAvailability,
    // allAdminRooms,
    // getRoomReviews,
    // deleteReview
}