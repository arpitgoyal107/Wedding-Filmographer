import React from 'react'

function FormCard() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            });
            if (response.ok) {
            console.log('Email sent successfully');
            // Optionally, reset the form after successful submission
            e.target.reset();
            } else {
            console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

  return (
    <>
    <form className="p-6 shadow-md px-10" onSubmit={handleSubmit}>
        <img src="../../images/decor/5.png" alt="" className=' h-40 float-right mt-[-80px]' />
        <div className="flex flex-col">
            <label for="name" className="hidden">
                Full Name
            </label>
            <input
                type="name"
                autoComplete='off'
                name="name"
                id="name"
                placeholder="Your Name*"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none"
                required
            />
            <p className='p-2 text-sm text-gray-400'>This field is required. Please input your name.</p>
        </div>

        <div className=' grid grid-cols-2 gap-12'>
            <div className="flex flex-col mt-6">
                <label for="tel" className="hidden">
                    Number
                </label>
                <input
                    type="tel"
                    autoComplete='off'
                    name="tel"
                    id="tel"
                    placeholder="Contact Number*"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none"
                    required 
                />
                <p className='p-2 text-sm text-gray-400'>This field is required. Please input a phone number.</p>
            </div>

            <div className="flex flex-col mt-6">
                <label for="email" className="hidden">
                    Email
                </label>
                <input
                    type="email"
                    autoComplete='off'
                    name="email"
                    id="email"
                    placeholder="Email Address*"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none"
                    required 
                />
                <p className='p-2 text-sm text-gray-400'>This field is required. Please input a valid email address.</p>
            </div>
        </div>

        <div className="flex flex-col mt-6">
            <label for="name" className="hidden">
                Event Details
            </label>
            <input
                type="name"
                autoComplete='off'
                name="name"
                id="name"
                placeholder="Dates & Events *"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none"
                required
            />
            <p className='p-2 text-sm text-gray-400'>This field is required. Please enter text.</p>
        </div>
        
        <div className="flex flex-col mt-6">
            <label for="name" className="hidden">
                Venue
            </label>
            <input
                type="name"
                autoComplete='off'
                name="name"
                id="name"
                placeholder="City/Venue *"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none"
                required
            />
            <p className='p-2 text-sm text-gray-400'>This field is required. Please enter text.</p>
        </div>

        <div className="flex flex-col mt-6">
            <label for="name" className="hidden">
                Guests
            </label>
            <input
                type="name"
                autoComplete='off'
                name="name"
                id="name"
                placeholder="Number of Guests Expected *"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none"
                required
            />
            <p className='p-2 text-sm text-gray-400'>This field is required. Please enter text.</p>
        </div>

        <div class="flex flex-col mt-6">
            <label for="eventDetails" className="hidden">
                Extra Details
            </label>
            <textarea
                autoComplete='off'
                name="message" 
                rows="1" 
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none" 
                placeholder='Event Details'
            />
            <p className='p-2 text-sm text-gray-400'>Any special requirements or anything you want to mention?</p>
        </div>

        <div className="flex flex-col mt-6">
            <label for="name" className="hidden">
                Resource
            </label>
            <input
                type="name"
                autoComplete='off'
                name="name"
                id="name"
                placeholder="How Did You Hear About Us? *"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none"
                required
            />
            <p className='p-2 text-sm text-gray-400'>This field is required. Please enter text.</p>
        </div>

        <button
            type="submit"
            className="md:w-32 bg-white text-[#112330] outline outline-gray-300 outline-2 font-bold py-3 px-6 rounded-sm mt-8 mb-6 hover:bg-[#112330] hover:text-white transition ease-in-out duration-300"
        >
            Send
        </button>
    </form>
    </>
  )
}

export default FormCard