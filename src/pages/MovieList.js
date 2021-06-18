import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import MovieService from "../services/movieService";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let movieService = new MovieService();
    movieService.getMovies().then((result) => setMovies(result.data.data));
  });

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Film Adı</Table.HeaderCell>
            <Table.HeaderCell>Yönetmen</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {}
        <Table.Body>
          {movies.map((movie) => (
            <Table.Row key={movie._id}>
              <Table.Cell>{movie.movieName}</Table.Cell>
              <Table.Cell>{movie.movieDirector.directorName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
