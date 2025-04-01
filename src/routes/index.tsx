import { createBrowserRouter } from 'react-router';
import { NotFound } from '../pages/404';
import { Layout } from '../pages/_layout';
import { Contact } from '../pages/contact';
import { Experience } from '../pages/experience';
import { Profile } from '../pages/profile';
import { Projects } from '../pages/projects';
import { Skills } from '../pages/skills';
import { PATHS } from './paths';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: PATHS.PROFILE,
        element: <Profile />,
      },
      {
        path: PATHS.EXPERIENCE,
        element: <Experience />,
      },
      {
        path: PATHS.PROJECTS,
        element: <Projects />,
      },
      {
        path: PATHS.SKILLS,
        element: <Skills />,
      },
      {
        path: PATHS.CONTACT,
        element: <Contact />,
      },
    ],
  },
]);
