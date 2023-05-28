import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Container,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Car } from "../interfaces/Car";

interface CarFormProps {
  onSubmit: (car: Car) => void;
  initialBrand?: string;
  initialModel?: string;
  onCancel?: () => void;
}

const CarFormPage: React.FC<CarFormProps> = ({
  onSubmit,
  initialBrand,
  initialModel,
  onCancel,
}) => {
  const [brand, setBrand] = useState<string>(initialBrand || "");
  const [model, setModel] = useState<string>(initialModel || "");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const car: Car = {
      id: uuidv4(),
      brand,
      model,
    };

    onSubmit(car);
    navigate("/");
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      navigate("/");
    }
  };

  return (
    <Container maxW="xl" centerContent>
      <Box mt={8}>
        <VStack mt={8} spacing={4}>
          <FormControl id="brand">
            <FormLabel>Brand</FormLabel>
            <Input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </FormControl>
          <FormControl id="model">
            <FormLabel>Model</FormLabel>
            <Input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Save
          </Button>
          <Button colorScheme="gray" onClick={handleCancel}>
            Cancel
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default CarFormPage;
