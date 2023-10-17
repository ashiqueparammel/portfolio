import './Contact.css';

export const Contact = () => {
    return (
        <section id={'contact'} className={'contact container'}>
            <p className={'header'}>
                Let's craft something <span className={'contact-highlight'}>truly shareworthy</span>
            </p>
            <a href={'mailto:ashiqueparammel558@gmail.com'}><p className={'email'}>ashiqueparammel558@gmail.com</p></a>
        </section>
    );
};