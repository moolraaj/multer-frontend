import React, { useState } from 'react';

const ImageUpload = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        profileImage: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            profileImage: file,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, profileImage } = formData;

        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('profile', profileImage);

        try {
            const response = await fetch('http://localhost:4500/upload', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Upload successful:', responseData);
                // Handle success, e.g., show a success message
            } else {
                console.error('Error uploading:', response.statusText);
                // Handle errors, e.g., show an error message
            }
        } catch (error) {
            console.error('Error uploading:', error);
            // Handle errors, e.g., show an error message
        }
    };

    return (
        <div>
            <h2>Upload Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="profileImage">Profile Image:</label>
                    <input
                        type="file"
                        id="profileImage"
                        name="profileImage"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default ImageUpload;
