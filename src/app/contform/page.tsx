// components/ContactForm.js
import React from 'react';

const ContactForm = () => {
    return (
        <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-gradient-to-r from-pink-400 to-rose-500 rounded-3xl py-4 shadow-xl shadow-black">
            <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                <div>
                    <h1 className="text-4xl font-serif text-rose-900">Get in Touch</h1>
                    <br />
                    <p className="text-sm text-rose-900 font-serif mt-4 leading-relaxed">
                        Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
                    </p>

                    <ul className="mt-12 space-y-8">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 479.058 479.058">
                                <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                            </svg>
                            <a href="mailto:saadq77109@gmail.com" className="text-rose-900 font-serif text-sm ml-4">
                                muhammadali32078@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 482.6 482.6">
                                <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z" />
                            </svg>
                            <a href="tel:+923200276011" className="text-rose-900 font-serif text-sm ml-4">
                                0317-1642514
                            </a>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 368.16 368.16">
                                <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 74.992 61.008 136 136 136 74.992 0 136-61.008 136-136 0-74.992-61.008-136-136-136zm0 20.736c63.36 0 115.264 51.904 115.264 115.264 0 63.36-51.904 115.264-115.264 115.264-63.36 0-115.264-51.904-115.264-115.264 0-63.36 51.904-115.264 115.264-115.264zm0 0" />
                                <path d="M184.08 40.32c-79.904 0-144 64.096-144 144 0 79.904 64.096 144 144 144 79.904 0 144-64.096 144-144 0-79.904-64.096-144-144-144zm0 0" />
                                <path d="M207.104 184.08c0 11.136-9.024 20.16-20.016 20.16-10.992 0-20.016-9.024-20.016-20.16 0-10.992 9.024-20.016 20.016-20.016 10.992 0 20.016 9.024 20.016 20.016zm0 0" />
                                <path d="M188.48 66.384c0 10.56-9.344 19.488-20.064 19.488-10.688 0-19.488-9.024-19.488-19.488 0-10.688 9.344-19.488 19.488-19.488 10.72 0 20.064 8.8 20.064 19.488zm0 0" />
                                <path d="M179.664 303.072c10.688 0 19.488 9.024 19.488 19.488 0 10.688-8.8 19.488-19.488 19.488-10.688 0-19.488-8.8-19.488-19.488 0-10.464 8.8-19.488 19.488-19.488zm0 0" />
                                <path d="M295.072 123.92c11.344 0 20.064 9.344 20.064 20.064 0 10.688-8.72 19.488-20.064 19.488-10.688 0-19.488-8.8-19.488-19.488 0-10.72 8.8-20.064 19.488-20.064zm0 0" />
                                <path d="M295.072 123.92c11.344 0 20.064 9.344 20.064 20.064 0 10.688-8.72 19.488-20.064 19.488-10.688 0-19.488-8.8-19.488-19.488 0-10.72 8.8-20.064 19.488-20.064zm0 0" />
                            </svg>
                        </li>
                    </ul>
                </div>

                <form className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-md" required />
                    <br />
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md" required />
                    <br />
                    <textarea placeholder="Message" className="w-full h-32 px-4 py-2 rounded-md" required></textarea>
                    <br />
                    <br />
                    <button type="submit" className="bg-gradient-to-r from-rose-900 to-pink-400 shadow-2xl shadow-black text-pink-100 font-normal py-2 px-4 rounded-md hover:bg-red-900 hover:text-pink-200 duration-200">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;