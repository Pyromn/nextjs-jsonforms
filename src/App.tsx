import './App.css';
import { Header } from './components/Header';
import { JsonFormsPrismaDemo } from './components/JsonFormsPrismaDemo';


// import { Prisma, PrismaClient } from '@prisma/client'
// import type * as Prisma from '@prisma/client';
// import type { User } from '@prisma/client'

// Org is a model in this example
//const Test = Prisma.User; // works

// const prisma = new PrismaClient()



//console.log(prisma.user.fields)
console.log('GetServerSideProps - finish');

const App = () => {
  return (
    <>
      <Header />
      <JsonFormsPrismaDemo />
    </>
  );
};

export default App;
