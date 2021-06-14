//stackoverflow 
// https://stackoverflow.com/questions/65274179/emailjs-and-form-validation-problem-react
const useForm = ( callback, validate ) => {
    const [ values, setValues ] = useState( {
        title: "",
        email: "",
        message: "",
    } );
    const [ errors, setErrors ] = useState( {} );
    const [ send, setSend ] = useState( false );
    const [ isSubmiting, setIsSubmiting ] = useState( false );

    useEffect( () => {
        if ( Object.keys( errors ).length === 0 ) {
            if ( isSubmiting ) {
                setSend( true );
            }
        }
    }, [ errors ] );

    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setValues( {
            ...values,
            [ name ]: value,
        } );
        setErrors( validate( values ) );
        setIsSubmiting( true );
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( send ) {
            console.log( "WYSYŁAM" );
            emailjs
                .sendForm(
                    "service",
                    "template",
                    e.target,
                    "user"
                )
                .then(
                    ( result ) => {
                        console.log( result.text );
                    },
                    ( error ) => {
                        console.log( error.text );
                    }
                );
            e.target.reset();
        }
    };

    return { handleChange, values, handleSubmit, errors };
};
};

export default useForm;