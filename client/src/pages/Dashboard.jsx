import React from 'react';
import DashBoardNavbar from '../components/DashBoardNavbar';
import DashboardCard from '../components/DashboardCard';
import { gql, useQuery } from '@apollo/client';

const GET_CLASSES = gql`
  query {
    classes {
      name
    }
  }
`;
function Dashboard() {
  const { data, error, loading } = useQuery(GET_CLASSES);
  if (error) return <div> Something went wrong</div>;

  if (loading) return <div>Loading...</div>;

  const { classes } = data;

  return (
    <div className="top-container flex flex-col items-center justify-center ">
      <DashBoardNavbar />
      <div className="container w-4/5 flex flex-wrap gap-6 mt-5">
        {
          classes.map((clas) => {
            return <DashboardCard name={clas.name} />;
          })

          // console.log(data)
        }
      </div>
    </div>
  );
}

export default Dashboard;
