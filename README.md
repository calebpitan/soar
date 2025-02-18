This is a Soar [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First clone the repository using the following command:

```bash
git clone git@github.com:calebpitan/soar.git

cd ./soar
```

The project uses Yarn v4. So if you're not set up on a Yarn v4 environment you can run the following
command

```bash
corepack enable && corepack prepare yarn@4.1.1
```

After installing Yarn 4, you would want to install the dependencies for the project using Yarn. To
install dependencies, do:

```bash
yarn install
```

When all of that is done, you may run the development server with `yarn dev` or do a local build
with `yarn build` and start with `yarn start`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# About

The application implements a dashboard design for a financial technology with detailed analytics.
Although it's not a full app as there are screens absent, such as those not covered in the design.

The two screens implemented are the Dashboard (Overview) page and the Settings (Edit Profile) page.

The implementation of the designs and layout for this application is respnonsive and is guaranteed
to work across all device types and commonly-known screen sizes.

## Technologies and Methods

The application uses [shadcn](https://ui.shadcn.com) and [TailwindCSS](https://tailwindcss.com) for
component design and styling and is written in TypeScript.
[@tanstack/react-query](https://tanstack.com/query/latest/docs/framework/react/overview) was also
used to make mock API calls within the app and a simple asynchronous loading strategy was employed
for data by sleeping for about 3 seconds to simulate a network asynchronous request.

For the settings page of the application, forms are validated but they have no API mocks for
submissions. Although, the password field didn't feel right to have been part of the "Edit Profile"
settings, but rather the "Security" settings, it was kept as is to remain consitent with the design,
while keeping it read-only.

## Deploy on Vercel

This application is deployed on
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js, and the live URL sits at
[https://soar-hazel.vercel.app/](https://soar-hazel.vercel.app/).

## Author

Caleb Adepitan (c) 2025.
