
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import { Carousel } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { clearErrors } from '../../redux/actions/roomActions'



const RoomDetails = () => {


    const [checkInDate, setCheckInDate] = useState()
    const [checkOutDate, setCheckOutDate] = useState()
    const [daysOfStay, setDaysOfStay] = useState()
    const [paymentLoading, setPaymentLoading] = useState(false)

    const dispatch = useDispatch()
    const router = useRouter();

    const { dates } = useSelector(state => state.bookedDates);
    const { user } = useSelector(state => state.loadedUser);
    const { room, error } = useSelector(state => state.roomDetails);
    const { available, loading: bookingLoading } = useSelector(state => state.checkBooking);

    const excludedDates = []
    dates.forEach(date => {
        excludedDates.push(new Date(date))
    })




    return (
        <div>




        </div>
    );
}

export default RoomDetails;
