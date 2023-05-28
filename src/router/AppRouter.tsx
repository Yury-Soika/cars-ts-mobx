import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { observer } from "mobx-react-lite";
import CarFormPage from "../pages/CarFormPage";
import CarDetailsPage from "../pages/CarDetailsPage";
import CarListPage from "../pages/CarListPage";
import { useCarStore } from "../store/CarStore";
import Header from "../components/Header";

const AppRouter: React.FC = observer(() => {
  const carStore = useCarStore();
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/add-car"
          element={<CarFormPage onSubmit={carStore.addCar} />}
        />
        <Route
          path="/edit-car/:id"
          element={<CarFormPage onSubmit={carStore.updateCar} />}
        />
        <Route
          path="/car/:id"
          element={<CarDetailsPage cars={carStore.cars} />}
        />
        <Route
          path="/"
          element={
            <CarListPage
              cars={carStore.cars}
              onDeleteCar={carStore.deleteCar}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
});
export default AppRouter;
