import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { NavbarDefault } from '../components/NavbarDefault';
import ContactsForm from '../components/ContactsForm';

export default function Contact() {
    return (
        <div>
            <BackgroundImage />
            <NavbarDefault />
            {/* <h1 className="text-3xl absolute top-[20rem] left-[40rem]"> CONTENUTO CONTACT</h1> */}
            <ContactsForm  />
        </div>
    );
}
