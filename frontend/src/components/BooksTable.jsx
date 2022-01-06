import React from "react";
import Table from "react-bootstrap/Table";

const BooksTable = () => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Rating</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>5</td>
          <td>romance</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>4.5</td>
          <td>blue</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>5</td>
          <td>yes</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BooksTable;
