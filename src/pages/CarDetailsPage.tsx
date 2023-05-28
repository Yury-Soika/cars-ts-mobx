import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { VStack, Heading } from "@chakra-ui/react";
import { Car } from "../interfaces/Car";

interface CarDetailsPageProps {
  cars: Car[];
}

const CarDetailsPage: React.FC<CarDetailsPageProps> = observer(({ cars }) => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <Heading as="h2" size="lg" mb={4}>
        Car not found
      </Heading>
    );
  }

  return (
    <VStack spacing={4} align="start">
      <Heading as="h2" size="lg" mb={4}>
        {car.brand} {car.model}
      </Heading>
    </VStack>
  );
});

export default CarDetailsPage;
