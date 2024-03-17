import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Step3() {
  // Schema for Yup validation
  const validationSchema = Yup.object().shape({
    addons: Yup.array().required('Please select at least one addon'),
  });

  // Retrieve form values from localStorage for pre-filling
  const initialValues = JSON.parse(localStorage.getItem('step3FormData')) ||{
    addons: [],
  };

  

  // Handle form submission
  const handleSubmit = (values) => {
    // Store form values in localStorage
    localStorage.setItem('step3FormData', JSON.stringify(values));
    
  };

  return (
    <div className="font-ubuntu h-full flex flex-col justify-between">
      <div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Add-ons help enhance your gaming experience</h2>
          {/* Formik form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <Field type="checkbox" name="addons" value="onlineService" />
                    Online Service
                  </label>
                  <span>+ $1/mo</span>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <Field type="checkbox" name="addons" value="largerStorage" />
                    Larger Storage
                  </label>
                  <span>+ $2/mo</span>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <Field type="checkbox" name="addons" value="customizableProfile" />
                    Customizable Profile
                  </label>
                  <span>+ $2/mo</span>
                </div>
                <div className="text-red-500 text-sm">
                  <ErrorMessage name="addons" />
                </div>
                <div className="flex justify-end">
                  <Link to="/step4">
                    <Button >Next Step</Button>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Step3;
