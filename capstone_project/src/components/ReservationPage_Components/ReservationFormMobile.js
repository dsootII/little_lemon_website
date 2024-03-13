import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { 
    VStack, 
    FormControl,
    FormHelperText, 
    FormLabel, 
    Input, 
    Select, 
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, 
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useSubmit from '../../hooks/useSubmit';
import { useAlertContext } from '../../context/AlertContext';

export default function ReservationFormMobile(props) {


    //STATIC DATA
    const allAvailableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
    const Occasions = ['Birthday', 'Anniversary', 'Business Meet', 'Other'];
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    //trying the context way
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

    
    //STATE VARIABLES
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState(Occasions[0]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            date: "",
            time: "17:00",
            guests: "2",
            occasion: "Birthday",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required')
        }),
        onSubmit: (values) => {
            // Handle form submission here
            console.log("ONSUBMIT PROP CALLED");

            const {date, ...postValues} = values
            
            console.log("postValues", postValues, "date", date);

            const postData = {};
            postData.name = postValues['firstName'];
            postData.email = postValues["email"];
            postData.reservation_date = date;
            postData.reservation_time = postValues["time"];
            postData.guest_count = postValues['guests'];
            postData.occasion = postValues['occasion'];

            console.log("postData", postData);

            // submit("https://john.com/contactme", values);
            axios.post("https://k808.pythonanywhere.com/api/create", postData)
            .then((response) => {
                console.log("Logging response from Axios post", response)
                if (response.status === 201) {
                    console.log('form submitted successfully!');
                    setFormIsSubmitted(true);
                }
            }).catch((err) => {
                console.log(err)
            });
            console.log("Form submitted", values);
        }
    });

    return (
    <>
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
                        Thanks for submitting your Reservation, {formik.values.firstName}. You will receive a mail with the receipt soon. You may now <Button variant="ghost" onClick={() => navigate('/')}>go back to the home page.</Button> 
                    </AlertDescription>
                </Alert> 
                :
                <></>
        }



        <VStack padding={4} spacing={4}>
            <FormControl isRequired isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input id="firstName" name="firstName" type="text" {...formik.getFieldProps('firstName')} />
            </FormControl>

            <FormControl isRequired isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" name="email" type="email" {...formik.getFieldProps('email')} />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input id="date" name="date" type="date" onChange={(e) => { formik.handleChange(e); props.setDate(e.target.value) }} value={props.date} />
            </FormControl>

            { props.date ? 
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

            <FormControl isRequired>
                <FormLabel htmlFor="guests">Guests</FormLabel>
                <Input id="guests" name="guests" type="number" min={1} max={10} {...formik.getFieldProps('guests')} />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" name="occasion" {...formik.getFieldProps('occasion')}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    {/* Add more occasion options as needed */}
                </Select>
            </FormControl>

            <Button colorScheme="teal" type="submit" onClick={formik.handleSubmit}>Submit</Button>
            <Button colorScheme="gray" onClick={() => navigate('/')}>Go back to Home Page</Button>
        </VStack>

    </>
    );
}
