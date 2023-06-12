# Daily journey REST API Documentation

## API References

List of Endpoints:

- `POST /customerPost`
- `POST /cutomerLogin`
- `POST /cusGoogleLog`
- `GET /cusPost`
- `GET /cusPost/:id`
- `GET /readPagination`
- `GET /renderAllCat`

---

- `POST /userPost`
- `POST /postLogin`
- `POST /logGoogle`
- `GET /post`
- `POST /categoryPost`
- `GET /post/:id`
- `PATCH /post/:id/editStatus`
- `DELETE /post/:id`
- `GET /category`
- `POST /createPost`
- `GET /post/:id`

---

### Post Create Customer

```http
POST / customerPost
```

#### Description

- POST a new Customer

#### Response

_201 - Sucess_

- Body

```json
{
  "statusCode": 201,
  "detail": "customewwwr@gmail.com",
  "message": "Hello Customer, your email has been created. Please login now"
}
```

### Post find Customer

```http
POST /customerLogin
```

#### Description

- POST a Customer

#### Response

_201 - Success_

- Body

```json
{
  "statusCode": 200,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJjdXN0b21lckBnbWFpbC5jb20iLCJyb2xlIjoiQ3VzdG9tZXIiLCJpYXQiOjE2ODM0NjM3Njl9.nHCSNmHadvhb7KLIo7_YA8GqwA09mzIMGIFGunXw4Vs",
  "email": "customer@gmail.com",
  "role": "Customer",
  "message": "Selamat datang, mari buang uangmu"
}
```

### Post customer by google

```http
POST /cusGoogleLog
```

#### Description

-Post find a customer

#### Response

_201 - Success_

- Body

```json
{
  "statusCode": 200,
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJzYWZha2FzaGdhbWluZ0BnbWFpbC5jb20iLCJpYXQiOjE2ODM0NjM4OTV9.P-IwM9okh2Yv5gSg_KWswHU51MlxqyQvbqTJkUzeZgw",
  "email": "safakashgaming@gmail.com",
  "role": "Staff"
}
```

### Get All Post customer

```http
GET /cusPost
```

#### Description

-GET all post

#### Response

_201 - Success_

- Body

```json
{
  "statusCode": 200,
  "post": [
    {
      "id": 1,
      "title": "Paradoxurus hermaphroditus",
      "content": "Laceration with foreign body of left lesser toe(s) without damage to nail",
      "imgUrl": "http://dummyimage.com/172x100.png/cc0000/ffffff",
      "categoryId": 1,
      "authorId": 5,
      "status": "Active",
      "createdAt": "2023-05-04T14:36:04.265Z",
      "updatedAt": "2023-05-04T14:36:04.265Z",
      "Category": {
        "id": 1,
        "name": "Apiaceae",
        "createdAt": "2023-05-04T14:36:03.891Z",
        "updatedAt": "2023-05-04T14:36:03.891Z"
      }
    },
    {
      "id": 2,
      "title": "Cynictis penicillata",
      "content": "Traumatic rupture of collateral ligament of left index finger at metacarpophalangeal and interphalangeal joint, subsequent encounter",
      "imgUrl": "http://dummyimage.com/234x100.png/ff4444/ffffff",
      "categoryId": 2,
      "authorId": 5,
      "status": "Active",
      "createdAt": "2023-05-04T14:36:04.265Z",
      "updatedAt": "2023-05-04T14:36:04.265Z",
      "Category": {
        "id": 2,
        "name": "Commelinaceae",
        "createdAt": "2023-05-04T14:36:03.891Z",
        "updatedAt": "2023-05-04T14:36:03.891Z"
      }
    }
  ]
}
```

### Get Post Detail Customer

```http
GET /cusPost/:id
```

#### Description

-GET detail post

#### Response

```json
{
  "statusCode": 200,
  "Post": {
    "id": 1,
    "title": "Paradoxurus hermaphroditus",
    "content": "Laceration with foreign body of left lesser toe(s) without damage to nail",
    "imgUrl": "http://dummyimage.com/172x100.png/cc0000/ffffff",
    "categoryId": 1,
    "authorId": 5,
    "status": "Active",
    "createdAt": "2023-05-04T14:36:04.265Z",
    "updatedAt": "2023-05-04T14:36:04.265Z"
  },
  "qr": "<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n\t\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"100\" height=\"100\" viewBox=\"0 0 2000 2000\" x=\"0\" y=\"0\" shape-rendering=\"crispEdges\"><defs/><rect x=\"0\" y=\"0\" width=\"2000\" height=\"2000\" fill=\"#ffffff\"/><rect x=\"609\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"149\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"425\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"149\" y=\"425\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"241\" width=\"138\" height=\"138\" fill=\"#000000\"/><rect x=\"241\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"149\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"1805\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"1529\" y=\"425\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"241\" width=\"138\" height=\"138\" fill=\"#000000\"/><rect x=\"1621\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1529\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1575\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"425\" y=\"1575\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"149\" y=\"1805\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1621\" width=\"138\" height=\"138\" fill=\"#000000\"/><rect x=\"241\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><svg version=\"1.0\" id=\"Layer_1\" x=\"678\" y=\"678\" viewBox=\"0 0 700 700\" enable-background=\"new 0 0 700 700\" xml:space=\"preserve\" width=\"644\" height=\"644\" shape-rendering=\"auto\">\n<g>\n\t<g>\n\t\t<polygon fill=\"#000000\" points=\"115.7,584.3 115.7,414.3 87.5,414.3 87.5,584.3 87.5,612.5 115.7,612.5 285.7,612.5 285.7,584.3       \"/>\n\t\t<polygon fill=\"#000000\" points=\"115.7,115.7 285.7,115.7 285.7,87.5 115.7,87.5 87.5,87.5 87.5,115.7 87.5,285.7 115.7,285.7       \"/>\n\t\t<polygon fill=\"#000000\" points=\"584.3,115.7 584.3,285.7 612.5,285.7 612.5,115.7 612.5,87.5 584.3,87.5 414.3,87.5 414.3,115.7       \"/>\n\t\t<polygon fill=\"#000000\" points=\"584.3,584.3 414.3,584.3 414.3,612.5 584.3,612.5 612.5,612.5 612.5,584.3 612.5,414.3     584.3,414.3   \"/>\n\t\t<g>\n\t\t\t<path fill=\"#000000\" d=\"M246.1,274c0-3.3-1.2-6-3.6-8.1c-2.4-2-6.5-3.9-12.5-5.7c-10.4-3-18.2-6.5-23.5-10.6     c-5.3-4.1-7.9-9.7-7.9-16.8s3-13,9.1-17.5c6.1-4.5,13.8-6.8,23.3-6.8c9.6,0,17.3,2.5,23.4,7.6c6,5.1,8.9,11.3,8.7,18.8l-0.1,0.4     h-16.9c0-4-1.3-7.3-4-9.8c-2.7-2.5-6.5-3.7-11.3-3.7c-4.7,0-8.3,1-10.8,3.1s-3.8,4.7-3.8,7.9c0,2.9,1.4,5.4,4.1,7.3     c2.7,1.9,7.4,3.9,14.1,6c9.6,2.7,16.9,6.2,21.8,10.6c4.9,4.4,7.4,10.1,7.4,17.3c0,7.4-2.9,13.3-8.8,17.6     c-5.9,4.3-13.6,6.5-23.3,6.5c-9.5,0-17.7-2.4-24.8-7.3c-7.1-4.9-10.5-11.7-10.3-20.5l0.1-0.4h17c0,5.2,1.6,9,4.7,11.4     c3.2,2.4,7.6,3.6,13.2,3.6c4.7,0,8.4-1,10.9-2.9C244.9,279.9,246.1,277.3,246.1,274z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M342.4,267.1l0.1,0.4c0.2,9.4-2.7,16.8-8.6,22.3c-5.9,5.5-14,8.2-24.5,8.2c-10.5,0-19-3.4-25.5-10.1     s-9.8-15.4-9.8-26v-17.3c0-10.6,3.2-19.2,9.6-26c6.4-6.8,14.7-10.2,24.9-10.2c10.8,0,19.2,2.8,25.2,8.3c6.1,5.5,9,13,8.8,22.6     l-0.1,0.4h-17c0-5.7-1.4-10.1-4.1-13.2c-2.7-3.1-7-4.6-12.8-4.6c-5.2,0-9.4,2.1-12.4,6.4c-3.1,4.2-4.6,9.6-4.6,16.2v17.4     c0,6.6,1.6,12.1,4.8,16.3c3.2,4.2,7.6,6.4,13.1,6.4c5.5,0,9.5-1.5,12.1-4.4c2.6-2.9,3.9-7.3,3.9-13.1H342.4z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M401.6,278h-30.5l-5.9,18.8h-17.6l29.9-87h17.9l29.8,87h-17.6L401.6,278z M375.4,264.3h21.9l-10.8-34.2     h-0.4L375.4,264.3z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M503.6,296.7h-17.4l-35.1-59.4l-0.4,0.1v59.4h-17.4v-87h17.4l35.1,59.4l0.4-0.1v-59.3h17.4V296.7z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path fill=\"#000000\" d=\"M224.4,329.3l51.6,131.6h0.7l51.6-131.6h28v162h-21.9v-64.1l2.2-65.9l-0.6-0.1l-52.5,130.1h-14.6     l-52.3-129.8l-0.6,0.1l2.1,65.5v64.1h-21.9v-162H224.4z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M492.7,416.2h-74.2v57.9h85.6v17.2H396.6v-162h106.3v17.2h-84.4V399h74.2V416.2z\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg></svg>\n\n</svg>\n"
}
```

### GET by Pagenation

```http
GET /readPagination
```

#### Description

- GET post by query to show

### Request

(Body)

```json
Query: limit:2, page:1, order:'Content', category
```

#### Response

```json
{
  "statusCode": 200,
  "renderPost": {
    "count": 12,
    "rows": [
      {
        "id": 3,
        "title": "Nesomimus trifasciatus",
        "content": "Legal intervention involving unspecified gas",
        "imgUrl": "http://dummyimage.com/199x100.png/ff4444/ffffff",
        "categoryId": 1,
        "authorId": 2,
        "status": "Active",
        "createdAt": "2023-05-04T14:36:04.265Z",
        "updatedAt": "2023-05-04T14:36:04.265Z",
        "Category": {
          "id": 1,
          "name": "Apiaceae",
          "createdAt": "2023-05-04T14:36:03.891Z",
          "updatedAt": "2023-05-04T14:36:03.891Z"
        }
      },
      {
        "id": 6,
        "title": "Cygnus atratus",
        "content": "Nursemaid's elbow, unspecified elbow, initial encounter",
        "imgUrl": "http://dummyimage.com/175x100.png/5fa2dd/ffffff",
        "categoryId": 10,
        "authorId": 3,
        "status": "Active",
        "createdAt": "2023-05-04T14:36:04.265Z",
        "updatedAt": "2023-05-04T14:36:04.265Z",
        "Category": {
          "id": 10,
          "name": "Boraginaceae",
          "createdAt": "2023-05-04T14:36:03.891Z",
          "updatedAt": "2023-05-04T14:36:03.891Z"
        }
      }
    ]
  },
  "totalPage": 6
}
```

### Get Category

```http
GET /RenderAllCat
```

#### Description

- GET all Category for filter

#### Response

_201 - Success_

- Body

```JSON
{
    "statusCode": 200,
    "categories": [
        {
            "id": 1,
            "name": "Apiaceae",
            "createdAt": "2023-05-04T14:36:03.891Z",
            "updatedAt": "2023-05-04T14:36:03.891Z"
        },
        {
            "id": 2,
            "name": "Commelinaceae",
            "createdAt": "2023-05-04T14:36:03.891Z",
            "updatedAt": "2023-05-04T14:36:03.891Z"
        },
        {
            "id": 3,
            "name": "Grimmiaceae",
            "createdAt": "2023-05-04T14:36:03.891Z",
            "updatedAt": "2023-05-04T14:36:03.891Z"
        },
        {
            "id": 4,
            "name": "Scrophulariaceae",
            "createdAt": "2023-05-04T14:36:03.891Z",
            "updatedAt": "2023-05-04T14:36:03.891Z"
        },
        {
            "id": 5,
            "name": "Cannabaceae",
            "createdAt": "2023-05-04T14:36:03.891Z",
            "updatedAt": "2023-05-04T14:36:03.891Z"
        },
        {
            "id": 6,
            "name": "Asteraceae",
            "createdAt": "2023-05-04T14:36:03.891Z",
            "updatedAt": "2023-05-04T14:36:03.891Z"
        },
        {
            "id": 7,
            "name": "Peltulaceae",
            "createdAt": "2023-05-04T14:36:03.891Z",
            "updatedAt": "2023-05-04T14:36:03.891Z"
        },
        {
            "id": 8,
            "name": "Poaceae",
            "createdAt": "2023-05-04T14:36:03.891Z",
            "updatedAt": "2023-05-04T14:36:03.891Z"
        },
        {
            "id": 9,
            "name": "Rubiaceae",
            "createdAt": "2023-05-04T14:36:03.891Z",
            "updatedAt": "2023-05-04T14:36:03.891Z"
        },
        {
            "id": 10,
            "name": "Boraginaceae",
            "createdAt": "2023-05-04T14:36:03.891Z",
            "updatedAt": "2023-05-04T14:36:03.891Z"
        }
    ]
}
```

## Semua Route di bawah Membutuhkan authz untuk render Favorite per customer

### Request

(Headers)

```json
{
  "access_token": string
}
```

---

### Get All Favorite List

```http
GET /renderFavPost
```

#### Description

- GET list favorite

#### Response

_200 - Success_

- Body

```json
{
  "statusCode": 200,
  "response": [
    {
      "id": 33,
      "customerId": 2,
      "postId": 2,
      "createdAt": "2023-05-07T09:40:37.012Z",
      "updatedAt": "2023-05-07T09:40:37.012Z",
      "Post": {
        "id": 2,
        "title": "Cynictis penicillata",
        "content": "Traumatic rupture of collateral ligament of left index finger at metacarpophalangeal and interphalangeal joint, subsequent encounter",
        "imgUrl": "http://dummyimage.com/234x100.png/ff4444/ffffff",
        "categoryId": 2,
        "authorId": 5,
        "status": "Active",
        "createdAt": "2023-05-04T14:36:04.265Z",
        "updatedAt": "2023-05-04T14:36:04.265Z"
      }
    },
    {
      "id": 30,
      "customerId": 2,
      "postId": 2,
      "createdAt": "2023-05-07T05:47:34.076Z",
      "updatedAt": "2023-05-07T05:47:34.076Z",
      "Post": {
        "id": 2,
        "title": "Cynictis penicillata",
        "content": "Traumatic rupture of collateral ligament of left index finger at metacarpophalangeal and interphalangeal joint, subsequent encounter",
        "imgUrl": "http://dummyimage.com/234x100.png/ff4444/ffffff",
        "categoryId": 2,
        "authorId": 5,
        "status": "Active",
        "createdAt": "2023-05-04T14:36:04.265Z",
        "updatedAt": "2023-05-04T14:36:04.265Z"
      }
    },
    {
      "id": 2,
      "customerId": 2,
      "postId": 2,
      "createdAt": "2023-05-06T18:01:16.782Z",
      "updatedAt": "2023-05-06T18:01:16.782Z",
      "Post": {
        "id": 2,
        "title": "Cynictis penicillata",
        "content": "Traumatic rupture of collateral ligament of left index finger at metacarpophalangeal and interphalangeal joint, subsequent encounter",
        "imgUrl": "http://dummyimage.com/234x100.png/ff4444/ffffff",
        "categoryId": 2,
        "authorId": 5,
        "status": "Active",
        "createdAt": "2023-05-04T14:36:04.265Z",
        "updatedAt": "2023-05-04T14:36:04.265Z"
      }
    },
    {
      "id": 3,
      "customerId": 2,
      "postId": 6,
      "createdAt": "2023-05-06T18:01:21.381Z",
      "updatedAt": "2023-05-06T18:01:21.381Z",
      "Post": {
        "id": 6,
        "title": "Cygnus atratus",
        "content": "Nursemaid's elbow, unspecified elbow, initial encounter",
        "imgUrl": "http://dummyimage.com/175x100.png/5fa2dd/ffffff",
        "categoryId": 10,
        "authorId": 3,
        "status": "Active",
        "createdAt": "2023-05-04T14:36:04.265Z",
        "updatedAt": "2023-05-04T14:36:04.265Z"
      }
    },
    {
      "id": 15,
      "customerId": 2,
      "postId": 8,
      "createdAt": "2023-05-06T18:19:54.948Z",
      "updatedAt": "2023-05-06T18:19:54.948Z",
      "Post": {
        "id": 8,
        "title": "Alopex lagopus",
        "content": "Unspecified complication of internal prosthetic device, implant and graft",
        "imgUrl": "http://dummyimage.com/141x100.png/cc0000/ffffff",
        "categoryId": 3,
        "authorId": 2,
        "status": "Active",
        "createdAt": "2023-05-04T14:36:04.265Z",
        "updatedAt": "2023-05-04T14:36:04.265Z"
      }
    },
    {
      "id": 32,
      "customerId": 2,
      "postId": 12,
      "createdAt": "2023-05-07T09:40:32.942Z",
      "updatedAt": "2023-05-07T09:40:32.942Z",
      "Post": {
        "id": 12,
        "title": "Castor fiber",
        "content": "Complete traumatic amputation at level between knee and ankle, unspecified lower leg, sequela",
        "imgUrl": "http://dummyimage.com/155x100.png/ff4444/ffffff",
        "categoryId": 8,
        "authorId": 3,
        "status": "Active",
        "createdAt": "2023-05-04T14:36:04.265Z",
        "updatedAt": "2023-05-04T14:36:04.265Z"
      }
    },
    {
      "id": 31,
      "customerId": 2,
      "postId": 12,
      "createdAt": "2023-05-07T06:13:35.046Z",
      "updatedAt": "2023-05-07T06:13:35.046Z",
      "Post": {
        "id": 12,
        "title": "Castor fiber",
        "content": "Complete traumatic amputation at level between knee and ankle, unspecified lower leg, sequela",
        "imgUrl": "http://dummyimage.com/155x100.png/ff4444/ffffff",
        "categoryId": 8,
        "authorId": 3,
        "status": "Active",
        "createdAt": "2023-05-04T14:36:04.265Z",
        "updatedAt": "2023-05-04T14:36:04.265Z"
      }
    },
    {
      "id": 1,
      "customerId": 2,
      "postId": 12,
      "createdAt": "2023-05-06T18:00:29.407Z",
      "updatedAt": "2023-05-06T18:00:29.407Z",
      "Post": {
        "id": 12,
        "title": "Castor fiber",
        "content": "Complete traumatic amputation at level between knee and ankle, unspecified lower leg, sequela",
        "imgUrl": "http://dummyimage.com/155x100.png/ff4444/ffffff",
        "categoryId": 8,
        "authorId": 3,
        "status": "Active",
        "createdAt": "2023-05-04T14:36:04.265Z",
        "updatedAt": "2023-05-04T14:36:04.265Z"
      }
    }
  ]
}
```

### Post new Favorite

```http
POST / addFavPost/:id
```

#### Description

- POST a new Fav

#### Reponse

_200 - Success_

- Body

```Json
{
    "statusCode": 200,
    "response": {
        "id": 34,
        "customerId": 2,
        "postId": 3,
        "updatedAt": "2023-05-07T13:05:59.313Z",
        "createdAt": "2023-05-07T13:05:59.313Z"
    },
    "createdBy": "customer@gmail.com"
}
```

### Delete Favorite

```http
DELETE /removeFav/:id
```

#### Description

-DELETE Favorite List item

#### Request

```json
body= postId
```

##### Response

_201 - Success_

- Body

```json

```

### Post Create User

```http
POST /userPost
```

#### Description

- POST a new User

#### Response:

_201 - Success_

- Body

```json
{
  "statusCode": 201,
  "data": {
    "id": 9,
    "email": "untukreadme@gmail.com",
    "password": "$2a$10$xsfW/LxLu8guem51Pvxpsu.tZmKNjN4L5TJqjWOo.utCVtCbi0xR2",
    "role": "admin",
    "username": "stafff",
    "updatedAt": "2023-04-16T01:06:51.158Z",
    "createdAt": "2023-04-16T01:06:51.158Z",
    "phoneNumber": null,
    "address": null
  },
  "message": "id, email has been created"
}
```

### Post Find User

```http
POST /postLogin
```

#### Description

- POST to find a user (login)

#### Response:

_201 - Success_

- Body

```json
{
  "statusCode": 201,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmRyZUBnbWFpbC5jb20iLCJpYXQiOjE2ODE2MDczNzZ9.wxVKPH7fmmcebO3fY-eJpUWVv-vaBbzItPa-p_rvgfY",
  "email": "andre@gmail.com",
  "id": 2,
  "role": "staff",
  "message": "Login, let's roll"
}
```

### Post Find/Create User

```http
POST /logGoogle
```

#### Description

- Post by google login or create using google account

### Request

(Body)

```json
{
  "token_google": string
}
```

#### Response:

_200 - Success_

- Body

```json
{
  "statusCode": 201,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhbmRyZUBnbWFpbC5jb20iLCJpYXQiOjE2ODE2MDczNzZ9.wxVKPH7fmmcebO3fY-eJpUWVv-vaBbzItPa-p_rvgfY",
  "email": "abc@gmail.com",
  "id": 1,
  "role": "Admin",
  "message": "Login, let's roll"
}
```

---

## Semua Route di bawah Membutuhkan Authentication

### Request

(Headers)

```json
{
  "access_token": string
}
```

---

### Get All Post

```http
GET /post
```

#### Description

- Get all post data

#### Response:

_200 - Success_

- Body

```json
{
  "statusCode": 200,
  "post": [
    {
      "id": 1,
      "title": "Paradoxurus hermaphroditus",
      "content": "Laceration with foreign body of left lesser toe(s) without damage to nail",
      "imgUrl": "http://dummyimage.com/172x100.png/cc0000/ffffff",
      "categoryId": 1,
      "authorId": 5,
      "createdAt": "2023-04-10T08:35:04.191Z",
      "updatedAt": "2023-04-10T08:35:04.191Z"
    }
  ]
}
```

### Create New Post

```http
POST /createPost
```

#### Description

-Insert new Post to database

### Request

- Body

```json
    {
      "title": String (Required),
      "content": String (Required),
      "imgUrl": String (Required),
      "categoryId": Integer (Required),
      "authorId": Integer (Required)
    }
```

#### Response:

_201 - Created_

- Body

```json
{
  "statusCode": 201,
  "data": {
    "id": 15,
    "title": "Ikan",
    "content": "qjnwe",
    "imgUrl": "asdklm",
    "categoryId": 1,
    "authorId": 1,
    "updatedAt": "2023-04-10T14:23:14.253Z",
    "createdAt": "2023-04-10T14:23:14.253Z"
  }
}
```

_400 - Bad Request_

-Body

```json
{
  "statusCode": 400,
  "error": ["Title must be filled"]
}
```

### Get Post Detail

```http
GET /post/${id}
```

#### Description

- Get post detail by post Id

| Parameter | Type      | Description                            |
| :-------- | :-------- | :------------------------------------- |
| `id`      | `integer` | **Required**. Id of job to be selected |

#### Response :

_200 - Success_

- Body

```json
{
  "statusCode": 200,
  "Post": {
    "id": 1,
    "title": "Paradoxurus hermaphroditus",
    "content": "Laceration with foreign body of left lesser toe(s) without damage to nail",
    "imgUrl": "http://dummyimage.com/172x100.png/cc0000/ffffff",
    "categoryId": 1,
    "authorId": 5,
    "createdAt": "2023-04-10T08:35:04.191Z",
    "updatedAt": "2023-04-10T08:35:04.191Z"
  }
}
```

_404 - Not Found_

- Body

```json
{
  "statusCode": 400,
  "error": "Error Job Id not found"
}
```

### Edit Post

```http
Put /post/${id}/edit

```

#### Description

- PUT status of Post

#### Response

_204 - Updated_

- Body

```json
{
  "statusCode": 204,
  "data": [
    1,
    [
      {
        "id": 39,
        "title": "cobaEditPostman25Apr",
        "content": "askdmaksmdsada",
        "imgUrl": "wwww",
        "categoryId": 1,
        "authorId": 1,
        "status": "Active",
        "createdAt": "2023-04-24T03:11:35.688Z",
        "updatedAt": "2023-04-28T03:09:24.119Z"
      }
    ]
  ],
  "msg": "Post and log has been updated"
}
```

### Render History

```http
Get /history
```

#### Description

- GET all history log

#### Response

_200 - Success_

- Body

```json
{
  "statusCode": 201,
  "data": [
    {
      "id": 48,
      "title": "Post Edited",
      "description": "cobaEditPostman25Apr has been updated",
      "updatedBy": "andre@gmail.com",
      "createdAt": "2023-04-28T03:09:24.135Z",
      "updatedAt": "2023-04-28T03:09:24.135Z"
    },
    {
      "id": 47,
      "title": "Status Edited",
      "description": "Status of undefined has been updated",
      "updatedBy": "abc@gmail.com",
      "createdAt": "2023-04-28T03:04:35.396Z",
      "updatedAt": "2023-04-28T03:04:35.396Z"
    }
  ],
  "msg": "renderAll"
}
```

### Get All Category

```http
GET /category
```

#### Description

- Get all Category data

#### Response:

_200 - Success_

- Body

```json
{
  "statusCode": 200,
  "categories": [
    {
      "id": 1,
      "name": "Apiaceae",
      "createdAt": "2023-04-10T08:11:49.824Z",
      "updatedAt": "2023-04-10T08:11:49.824Z"
    },
    {
      "id": 2,
      "name": "Commelinaceae",
      "createdAt": "2023-04-10T08:11:49.824Z",
      "updatedAt": "2023-04-10T08:11:49.824Z"
    }
  ]
}
```

### Post Category

```http
POST /categoryPost
```

#### Description

- POST a new Category

#### Response:

_201 - Success_

- Body

```json
{
  "statusCode": 201,
  "data": {
    "id": 25,
    "name": "PercobaanPostmanAddCategory2",
    "updatedAt": "2023-04-16T01:21:41.908Z",
    "createdAt": "2023-04-16T01:21:41.908Z"
  },
  "message": "Category has been created"
}
```

### Delete Category

```http
Delete /category/:id
```

#### Description

- DELETE category by id

### Request

- Params

```json
    {
        "id": Integer
    }
```

#### Response

```json
{
  "statusCode": 200,
  "message": "Category success to delete",
  "detail": 1
}
```

---

## Semua Route di bawah Membutuhkan Role Admin

### Request

(idRole)

```json
{
  "role": string
}
```

### Update Status

```http
Patch /post/${id}

```

#### Description

- PATCH post by id

### Request

- Params

```json
    {
        "id": Integer
    }
```

- Body

```json
    {
      "title": String (Required),
      "status": String (Required)
    }
```

- idRole

```json
{
    "email": String (Required)
}
```

#### Response

_204 - Updated _

- Body

```json
{
  "statusCode": 204,
  "data": [
    1,
    [
      {
        "id": 39,
        "title": "cobaEditbrowser25Apr LAGI",
        "content": "askdmaksmdsada",
        "imgUrl": "wwww",
        "categoryId": 1,
        "authorId": 1,
        "status": "active",
        "createdAt": "2023-04-24T03:11:35.688Z",
        "updatedAt": "2023-04-28T03:04:35.358Z"
      }
    ]
  ],
  "msg": "Status Updated"
}
```

### Delete Post

```http
Delete /post/${id}
```

#### Description

- Delete Post by Post id

| Parameter | Type      | Description                           |
| :-------- | :-------- | :------------------------------------ |
| `id`      | `integer` | **Required**. Id of job to be deleted |

### Request

- Params

```json
    {
        "id": Integer
    }
```

#### Response :

_200 - Success_

- Body

```json
{
  "statusCode": 200,
  "message": "Post success to delete",
  "detail": {
    "id": 8,
    "title": "Alopex lagopus",
    "content": "Unspecified complication of internal prosthetic device, implant and graft",
    "imgUrl": "http://dummyimage.com/141x100.png/cc0000/ffffff",
    "categoryId": 3,
    "authorId": 2,
    "createdAt": "2023-04-10T08:35:04.191Z",
    "updatedAt": "2023-04-10T08:35:04.191Z"
  }
}
```

_404 - Not Found_

- Body

```json
{
  "statusCode": 404,
  "message": "Post not found"
}
```

---

### Global Error

### Response

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": "Internal Server Error"
    }
  }
  ```
