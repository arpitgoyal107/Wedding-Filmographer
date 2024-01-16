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
    <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
        <div className="flex flex-col">
            <label for="name" className="hidden">
                Full Name
            </label>
            <input
                type="name"
                autoComplete='off'
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none"
                required
            />
        </div>

        <div className="flex flex-col mt-2">
            <label for="email" className="hidden">
                Email
            </label>
            <input
                type="email"
                autoComplete='off'
                name="email"
                id="email"
                placeholder="Email"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none"
                required 
            />
        </div>

        <div className="flex flex-col mt-2">
            <label for="tel" className="hidden">
                Number
            </label>
            <input
                type="tel"
                autoComplete='off'
                name="tel"
                id="tel"
                placeholder="Mobile Number"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none"
                required 
            />
        </div>

        <div class="flex flex-col mt-2">
            <label for="eventDetails" className="hidden">
                Event Details
            </label>
            <textarea
                autoComplete='off'
                name="message" 
                rows="10" 
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#112330] focus:outline-none" 
                placeholder='Event Details'
                required 
            />
        </div>

        <button
            type="submit"
            className="md:w-32 bg-[#112330] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#28506a] transition ease-in-out duration-300"
        >
            Submit
        </button>
    </form>
    </>
  )
}

export default FormCard