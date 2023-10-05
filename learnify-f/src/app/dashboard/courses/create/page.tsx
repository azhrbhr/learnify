"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import axiosInstance from '@/axios';
import { useRouter } from 'next/navigation'
import InputField from '@/components/InputField';
import TextareaField from '@/components/TextareaField';
import CheckboxField from '@/components/CheckboxField';

export default function Page() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter()



    const [course, setCourse] = useState({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        is_published: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCourse((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const addCourse = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosInstance.post('/courses/', course);

            if (response.status === 201) {
                console.log(response.data);
                setLoading(false);
                router.push('/dashboard/courses/');
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            setError(error.message);
            console.error('Failed to add course:', error);
        } finally {
            setLoading(false);
        }
    };







    useEffect(() => {
    }, []);

    return (
        <div className="container mx-auto">
            <div className="mb-4 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Create Course</h1>
                    <p className="text-gray-600">Manage your courses and enrollments.</p>
                </div>
                <div>
                    <Link href="/dashboard/courses/">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-sm">
                            Back to Courses
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-4">
                <form onSubmit={addCourse} className="bg-white p-6 rounded-lg shadow-md">

                    <InputField
                        label="Title"
                        name="title"
                        type="text"
                        id="title"
                        value={course.title}
                        onChange={handleChange}
                    />

                    <TextareaField
                        label="Description"
                        id="description"
                        name="description"
                        value={course.description}
                        onChange={handleChange}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            label="Start Date"
                            name="start_date"
                            type="date"
                            id="start_date"
                            value={course.start_date}
                            onChange={handleChange}
                        />

                        <InputField
                            label="End Date"
                            name="end_date"
                            type="date"
                            id="end_date"
                            value={course.end_date}
                            onChange={handleChange}
                        />
                    </div>

                    <CheckboxField
                        label="Publish this course"
                        id="is_published"
                        name="is_published"
                        checked={course.is_published}
                        onChange={handleChange}

                    />

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-pink-600 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Please wait...' : 'Add Course'}
                        </button>
                    </div>


                </form>
            </div>
        </div >
    );
};