// import Form from './form/Form';
// import { Header } from './header/Header';
// import ContactList from './contactList/ContactList';
// import Filter from './filter/Filter';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'services/getContacts';
// import { useEffect } from 'react';

// export default function App() {

//   const dispatch = useDispatch()

//   useEffect(()=> {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <Header title={'Phonebook'} />
//       <Form />
//       <Header title={'Contacts'} />
//       <Filter />
//       <ContactList />
//     </>
//   );
// }

// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';

 const App = () => {
<Routes>
  <Route path="/" element={<Layout />}>
  <Route index element = {<Home/>}/>
  <Route path='contacts' element = {<Contacts/>}/>
  </Route>
</Routes>
}


export default App