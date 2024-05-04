import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SelectGamePage } from './pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SelectGamePage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
