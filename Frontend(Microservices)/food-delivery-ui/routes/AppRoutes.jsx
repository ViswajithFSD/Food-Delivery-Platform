import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <MainLayout>

                <Routes>

                    {/* Public Routes */}

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/register"
                        element={<Register />}
                    />

                    {/* Protected Routes */}

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>

                                <Dashboard />

                            </ProtectedRoute>
                        }
                    />

                </Routes>

            </MainLayout>

        </BrowserRouter>
    );
}