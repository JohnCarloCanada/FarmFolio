# FarmFolio

Enhance your farming experience with our all-inclusive farming catalog, designed to cater to your every need. Explore a wide range of essential information, meticulously compiled to provide you with comprehensive insights into crops, pests, and effective pest control procedures. Additionally, stay one step ahead with our integrated weather forecast feature, ensuring you are well-prepared for any climatic conditions that may impact your farming activities. Whether you're seeking crop-specific guidance, pest management strategies, or accurate weather predictions, our catalog is your go-to resource for maximizing your farming potential.

## Tech Stack

**Client:** React, Vite, TailwindCSS, Framer Motion

**Server:** Node, Express, MongoDB

## API Reference

#### Get all items

```http
  GET /api/crops
```

## Run Locally

Clone the project

```bash/cmd
  gh repo clone JohnCarloCanada/FarmFolio or git clone JohnCarloCanada/FarmFolio

  or

  use Github Desktop and then go to file tab and then clone copy paste this https://github.com/JohnCarloCanada/FarmFolio.git
```

Go to the project directory

```bash/cmd
  cd FarmFolio
```

Install dependencies

```bash/cmd
-Frontend
  cd Frontend
  npm install
  code .

-Backend
  cd Backend
  npm install
  code .
```

Start the server

```bash/cmd
-Frontend
  npm run dev
-Backend
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Notes: in Backend create an .env file in the root directory or in Backend/ directory and then add or copy paste this:

```
port=3000

CONNECTIONSTRING=mongodb+srv://farmFolio:zi08McBmLv66QRgJ@farmfolio.zkupmoo.mongodb.net/FarmFolio?retryWrites=true&w=majority

NODE_VERSION=14.20.1
```

Notes: in Frontend create an .env file in the root directory or in Frontend/ directory and then add or copy paste this:

```
VITE_API_KEY=438e079696f2c7bdbe94ee8181d570b7
```

## Authors

- [@JohnCarloCanada](https://github.com/JohnCarloCanada)
- [ToBeAdded](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
