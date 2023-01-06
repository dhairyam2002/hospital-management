
# Hospital Management

Clone the repo run following, make sure your current directory contains package.json

Run following commands
```bash
yarn 
# or
npm i
```

Config file is already included

To start the project

```
yarn start
npm start
```

Database used here is hosted on AWS RDS instance so you won't need to add predefined input fields




# Libraries/Frameworks used

**Node.js**

**express** - A Node.js framework

**sequelize** - ORM for Javascript/Typescript Applications. It also has methods of writing custome queries, and optimizes connection with database instance via  pooling

**mysql2/msql** - Library on top of which sequelize is built

**multer** - Middleware, for uploading files in express. It is used in this project for uploading patient photos

**cloudinary** - Platform to store uploaded images on cloud




## API Reference

#### Register Patient

```http
  POST /api/v1/register/patient
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `patient_name` | `string` | **Required** |
| `patient_email` | `string` | **Required Unique** valid email |
| `patient_phone` | `string` | **Required Unique** valid phone number |
| `patient_address` | `string` | **Required**|
| `patient_password` | `string` | **Required** 8 to 15 characters, atleast one lowercase, 1 uppercase, 1 digit and 1 special character |
| `psych_id` | `int` | **Required** psychiatrist registering patient |
| `patient_photo` | `file(jpg, jpeg, png)` | **Required** valid file type |


#### Get item

```http
  GET /api/v1/details/psychiatrist?hospitalId={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Postman collection link

https://www.postman.com/solar-star-63648/workspace/hospital-management/collection/25028259-a52c3dba-37e9-48a7-a9cd-bb1d7bc7e8b6?action=share&creator=25028259

