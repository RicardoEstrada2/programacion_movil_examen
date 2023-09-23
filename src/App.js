import './App.css';
import {Formik, Form, Field} from "formik";
import Tabla from "./Tabla";

function App() {

    const dataSource = [
        {
            key: '1',
            nombre: 'Mike',
            app: 32,
            apm: '10 Downing Street',
            telefono: '10 Downing Street',
        },
        {
            key: '2',
            nombre: 'Alex',
            app: 32,
            apm: '10 Downing Street',
            telefono: '10 Downing Street',
        },
    ];

  return (
    <div>
      <Formik
          initialValues={{
              key: dataSource.length + 1,
              nombre: '',
              app: '',
              apm: '',
              telefono:''
          }}
          onSubmit={async (values, {resetForm}) => {
            // await new Promise((r) => setTimeout(r, 500));
            // alert(JSON.stringify(values, null, 2));
            //   values.push({"key": dataSource.length + 1})
              dataSource.push(values);
              console.log(dataSource);
              resetForm({values: ''});
          }}
      >
        <Form>

            <label htmlFor="key">First Name</label>
            <Field disabled={true} id="key" name="key" placeholder="Jane" />

          <label htmlFor="nombre">First Name</label>
          <Field id="nombre" name="nombre" placeholder="Jane" />

          <label htmlFor="app">Last Name</label>
          <Field id="app" name="app" placeholder="Doe" />

            <label htmlFor="apm">Last Name</label>
            <Field id="apm" name="apm" placeholder="Doe" />

            <label htmlFor="telefono">Last Name</label>
            <Field id="telefono" name="telefono" placeholder="Doe" />


            <button type="submit">Submit</button>
        </Form>
      </Formik>

        <Tabla data={dataSource}></Tabla>
    </div>
  );
}

export default App;
