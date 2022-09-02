//Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from '@sweetalert/with-react';

//Libraries
import { useNavigate } from 'react-router';

const Searcher = () => {

  //Search functionality
  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    
    if ( keyword.length === 0) {
      swal(<h3>You must type something first</h3>);
    } else if (keyword.length < 4) {
      swal(<h3>Please type a key word</h3>);
    } else {
      e.currentTarget.keyword.value=null;
      navigate(`/results?keyword=${keyword}`);
    }
  };

  return (
    <Form className="d-flex" onSubmit={submitHandler}>
      <Form.Control
        type="search"
        placeholder="Search Movie"
        className="me-2"
        aria-label="Search"
        name="keyword"
      />
      <Button variant="outline-success" type='submit'>Search</Button>
    </Form>
  );
};

export default Searcher;