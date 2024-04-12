"use client"

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  initialValues?: any;
  onSubmit: (formValues: any) => void;
}

function FormProduct(props: Props) {
  const [categories, setCategories] = useState([]);

  const router = useRouter();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await fetch(`http://localhost:3000/v1/categories`);

      if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }


      const fetchedCategories =  await response.json();
      setCategories(fetchedCategories);
    } catch (err) {
      console.log("Error getting categories", err);
    }
  }

  const {
    initialValues = { name: '', description: '', price: 0, category: '' },
    onSubmit
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors: any = {};
        if (!values.name) {
          errors.name = 'El nombre es requerido';
        } else if (values.name.length < 5 || values.name.length > 50) {
          errors.name = 'El nombre debe tener un tamaño entre 5 y 50 caracteres';
        }
        if (!values.description) {
          errors.description = 'La descripcion es requerida';
        } else if (values.description.length < 5 || values.description.length > 200) {
          errors.description = 'La descripcion debe tener un tamaño entre 5 y 200 caracteres';
        }
        if (!values.price) {
          errors.price = 'El precio es requerido';
        } else if (isNaN(values.price) || Number(values.price) < 0 || Number(values.price) > 9999) {
          errors.price = 'El precio debe estar entre 0 y 9999';
        }
        if (!values.category) {
          errors.category = 'La categoria es requerida';
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log("SEND")
        onSubmit(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <Field className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Descripcion
            </label>
            <Field className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" as="textarea" id="description" name="description" placeholder="Description" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Precio
            </label>
            <Field className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="price" name="price" placeholder="Price" />
            <ErrorMessage name="price" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Categoria
            </label>
            <Field className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" as="select" id="category" name="category">
              <option value="" disabled>Selecciona una categoria</option>

              {
                categories?.map((category: any) => (
                  <option key={category?.objectId} value={category?.objectId}>{ category?.name }</option>
                ))
              }
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => router?.back()}
            >
              Cancelar
            </button>

            <button
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              Guardar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormProduct;