import { observable, action } from "mobx";
import { Car } from "../interfaces/Car";

export interface CarStoreProps {
  cars: Car[];
  addCar: (car: Car) => void;
  deleteCar: (car: Car) => void;
  updateCar: (car: Car) => void;
}

let store: CarStoreProps | null = null;

export const useCarStore = (): CarStoreProps => {
  if (!store) {
    throw new Error("Car store is not initialized");
  }
  return store;
};

export const initializeCarStore = () => {
  store = observable<CarStoreProps>({
    cars: [],
    addCar: action((car: Car) => {
      store!.cars.push(car);
    }),
    deleteCar: action((car: Car) => {
      store!.cars = store!.cars.filter((c) => c.id !== car.id);
    }),
    updateCar: action((car: Car) => {
      const index = store!.cars.findIndex((c) => c.id === car.id);
      if (index !== -1) {
        store!.cars[index] = car;
      }
    }),
  });
};
