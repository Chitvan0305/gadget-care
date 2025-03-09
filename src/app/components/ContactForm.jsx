'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^[0-9]+$/, 'Phone number must be numeric').required('Phone number is required'),
  message: yup.string().required('Message is required'),
});

export default function ContactForm({ open, setOpen }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();

      console.log({result})

      if (result.success) {
        toast.success("Email sent successfully!");
        setOpen(false);
      } else {
        toast.error("Email not sent!");
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center p-2 sm:p-4">
        <DialogPanel className={`relative bg-white rounded-lg shadow-xl w-full max-w-lg sm:max-w-3xl flex flex-col sm:flex-row overflow-hidden`}>
          {/* Hide image on mobile */}
          <div className="w-full p-4 sm:p-6">
            <DialogTitle className="text-lg font-semibold text-gray-900 mb-4 text-center sm:text-left">Connect with Us!</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input {...register('firstName')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="text-red-500 text-xs mt-1">{errors.firstName?.message}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input {...register('lastName')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="text-red-500 text-xs mt-1">{errors.lastName?.message}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input {...register('email')} type="email" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
                <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input {...register('phone')} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
                <p className="text-red-500 text-xs mt-1">{errors.phone?.message}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                <button type="button" onClick={() => setOpen(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md w-full sm:w-auto cursor-pointer">
                  Cancel
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-slate-700 w-full sm:w-auto cursor-pointer">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
