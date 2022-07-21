import Room from '../models/room';



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





export {
    allRooms,
    newRoom,
    // getSingleRoom,
    // updateRoom,
    // deleteRoom,
    // createRoomReview,
    // checkReviewAvailability,
    // allAdminRooms,
    // getRoomReviews,
    // deleteReview
}