import React, { useEffect } from 'react'
import { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import useSubmit from '../../hooks/useSubmit';
import { useAlertContext } from '../../context/AlertContext';
import { useNavigate } from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    VStack,
    Button,
    ButtonGroup,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
  import axios from 'axios';



export default function ReservationForm(props) {

    //STATIC DATA
    const allAvailableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
    const Occasions = ['Birthday', 'Anniversary', 'Business Meet', 'Other'];
    const navigate = useNavigate();
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    //trying the context way
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

    
    //STATE VARIABLES
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState(Occasions[0]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //formik configuration
    const formik = useFormik({
        initialValues: {
          firstName: "",
          email: "",
          date: "",
          time: "17:00",
          guests: "2",
          occasion: "Birthday",
        },
        onSubmit: (values) => {
            console.log("ONSUBMIT PROP CALLED");

            const {date, ...postValues} = values
            
            const postData = {};
            postData.name = postValues['firstName'];
            postData.email = postValues["email"];
            postData.reservation_date = postValues["res-date"];
            postData.reservation_time = postValues["res-time"];
            postData.guest_count = postValues['guests'];
            postData.occasion = postValues['occasion'];

            // submit("https://john.com/contactme", values);
            axios.post("https://k808.pythonanywhere.com/api/create", postData)
            .then((response) => {
                console.log(response)
                if (response.status === 201) {
                    setFormIsSubmitted(true);
                }
            }).catch((err) => {
                console.log(err)
            });

        },
        validationSchema: Yup.object({
          firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
          email: Yup.string().email('Invalid email address').required('Required')
        })
    });

    // useEffect(() => {
    //     if (response) {
    //         onOpen(response.type, response.message);
    //         if (response.type === 'success') {
    //             formik.resetForm();
    //         }
    //     }
    // }, [response])


    // console.log("ReservationForm state variables: ", guests, occasion);
    // console.log("formik values", formik.values);




    return (
    <>
    <div className='reservationFormContainer'>
    
    {
        formIsSubmitted ? 
            <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Reservation submitted!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Thanks for submitting your Reservation, {formik.values.firstName}. You will receive a mail with the receipt soon. You may now <Button variant="ghost" onClick={navigate('/')}>go back to the home page.</Button> 
                </AlertDescription>
            </Alert> 
            :
            <></>
    }


    <VStack 
        color={"darkgreen"}
        backgroundColor={"gold"}
        padding={"50px"}
        borderRadius={"15%"}
        spacing={"20px"}
        opacity={"0.95"}
    >
    <form onSubmit={(e) => { e.preventDefault(); console.log('Submitting form'); formik.handleSubmit(e); }}>

        {/* NAME FIELD */}
        <FormControl isRequired isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
            <FormLabel htmlFor="res-name">Under what name should we book the table?</FormLabel>
            <Input type='text' id="res-name" name='res-name' onChange={(e) => { formik.handleChange(e); setName(e.target.value) }} {...formik.getFieldProps('firstName')}/>
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>
        
        {/* EMAIL FIELD */}
        <FormControl isRequired isInvalid={!!formik.errors.email && formik.touched.email}>
            <FormLabel htmlFor="res-email">Email address:</FormLabel>
            <Input type='email' id="res-email" name="res-email" onChange={(e) => { formik.handleChange(e); setEmail(e.target.value) }} {...formik.getFieldProps('email')} />
            <FormHelperText>We need it to send the boooking confirmation</FormHelperText>
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        {/* DATE FIELD */ }
        <FormControl isRequired>
            <FormLabel htmlFor="res-date">When will you visit us?</FormLabel>
            <Input type='date' id="res-date" onChange={(e) => { formik.handleChange(e); props.setDate(e.target.value) }} value={props.date} />
            <FormHelperText>We have live music on weekends!</FormHelperText>
        </FormControl>

        {/* TIME FIELD */ }
        {props.date ? 
            <div id='timeField'>
                <FormControl isRequired>
                    <FormLabel htmlFor="res-time">Please choose an available slot for the selected date</FormLabel>
                    <Select placeholder='' id='res-time' onChange={(e) => {formik.handleChange(e)}} >
                        {props.availableTimes.map(time => <option key={time}>{time}</option>)}
                    </Select>
                    <FormHelperText>happy hours start from 19:00!</FormHelperText>
                </FormControl>
            </div> :
            <div>
                Please select a date.
            </div>    
    }
        


        {/* GUESTS FIELD */ }
        <FormControl isRequired>
            <FormLabel htmlFor="guests">How many guests should we expect?</FormLabel>
            <Input type='number' id="guests" placeholder="1" min="1" max="10" onChange={ (e) => { formik.handleChange(e); setGuests(e.target.value) }} value={guests}/>
        </FormControl>

        {/* OCCASION FIELD */}
        <FormControl>
            <FormLabel htmlFor="occasion">Do you wish to specify an occasion for the visit?</FormLabel>
            <Select id="occasion" onChange={ (e) => { formik.handleChange(e); setOccasion(e.target.value) }} value={occasion} >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Business Meet</option>
                <option>Casual/Other</option>
            </Select>
            <FormHelperText>so that we may arrange for the best experience!</FormHelperText>
        </FormControl>

        {/* BUTTONS */}
        <ButtonGroup>
            <Button colorScheme='yellow' variant='outline' onClick={() => navigate('/')}>Go back to home page</Button>
            <Button colorScheme='darkgreen' variant='outline' type='submit'>Make your reservation</Button>
        </ButtonGroup>



    </form>
    </VStack>
   </div>
    </>
    )
}
