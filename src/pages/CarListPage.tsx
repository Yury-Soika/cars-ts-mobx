import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { VStack, Heading, Button, Box } from "@chakra-ui/react";
import { Car } from "../interfaces/Car";

interface CarListPageProps {
  cars: Car[];
  onDeleteCar: (car: Car) => void;
}

const CarListPage: React.FC<CarListPageProps> = observer(
  ({ cars, onDeleteCar }) => {
    if (cars.length === 0) {
      return (
        <Heading as="h2" size="lg" mb={4}>
          Cars not found
        </Heading>
      );
    }

    return (
      <VStack mt={8} spacing={4}>
        {cars.map((car) => (
          <Box key={car.id} p={4} borderWidth={1} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              {car.brand} {car.model}
            </Heading>
            <Button as={Link} to={`/car/${car.id}`} colorScheme="blue" mr={2}>
              View
            </Button>
            <Button colorScheme="red" onClick={() => onDeleteCar(car)}>
              Delete
            </Button>
          </Box>
        ))}
      </VStack>
    );
  }
);

export default CarListPage;
