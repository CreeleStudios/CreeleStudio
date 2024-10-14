import FillBackground from '../../assets/images/fill_background_two_with_shadow.jpeg';
import ContactForm from '../ui/ContactForm';
import Image from 'next/image';

export default function ContactC(props: { page?: boolean }) {
    return (
        <section className='section pb-10'>

            <Image
                src={FillBackground}
                alt='Background'
                sizes='100%'
                className='z-0 object-conver object-top absolute h-full w-full inset-0 opacity-70'
            />
            <div className="w-screen">
                <div className={`relative z-10 w-full`}>
                    <ContactForm info={props.page} />
                </div>
            </div>
        </section>
    )
}
