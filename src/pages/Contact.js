import ContactHeader from "../components/Contact/ContactHeader";
import ContactMap from "../components/Contact/ContactMap";
import ContactFeedback from "../components/Contact/ContactFeedback";

const Contact = () => {
    return (
        <div style={
            {
                marginTop: 50
            }
        }>
            <ContactHeader />
            <ContactMap />
            <ContactFeedback />
        </div>
    )
}

export default Contact;