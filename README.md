# Skills API

## Base URL

https://skills-api.vercel.app/api

## Endpoints

### GET `/jobs`

#### Example

https://skills-api.vercel.app/api/jobs?cursor=0&limit=12

#### Parameters

- `cursor`

  - Type: `number`
  - Optional: `true`
  - Default value: `0`

- `limit`

  - Type: `number`
  - Optional: `true`
  - Default value: `12`

### GET `/jobs/search`

#### Example

https://skills-api.vercel.app/api/jobs/search?query=frontend

#### Parameters

- `query`

  - Type: `string`
  - Optional: `true`
  - Default value: `''`

### GET `/job/:id`

#### Example

https://skills-api.vercel.app/api/job/9b92abe6-3bf3-4cc6-8744-4de0c8af0630

### GET `/skill/:id`

#### Example

https://skills-api.vercel.app/api/skill/f4a6f053-2cac-44fc-a87a-5368d7ca46ed