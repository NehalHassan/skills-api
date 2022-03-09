import express from 'express';
import cors from 'cors';

import { data } from './data';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/jobs', (req, res) => {
  const cursor = Number(req.query.cursor) || 0;
  const limit = Number(req.query.limit) || 12;

  if (isNaN(cursor) || isNaN(limit)) {
    return res.status(400).json({ message: 'invalid pagination values' });
  }

  const start = cursor;
  const end = cursor + limit;

  const jobs = data.jobs.slice(start, end);
  const count = data.jobs.length;
  const next = count > end ? { next: end } : {};

  return res.status(200).json({ data: { jobs, meta: { ...next, count } } });
});

app.get('/jobs/search', (req, res) => {
  const { query } = req.query as { query: string };

  if (query) {
    const jobs = data.jobs.filter((x) => x.attributes.title.toLowerCase().includes(query));
    const count = jobs?.length;

    return res.status(200).json({ data: { jobs, meta: { count } } });
  }

  const jobs = data.jobs;
  const count = data.jobs.length;

  return res.status(200).json({ data: { jobs, meta: { count } } });
});

app.get('/job/:id', (req, res) => {
  const { id } = req.params;
  const job = data.jobs.find((job) => job.id === id);

  if (job) return res.status(200).json({ data: { job } });
  return res.status(404).json({ error: { message: 'Not found' } });
});

app.get('/skill/:id', (req, res) => {
  const { id } = req.params;
  const skill = data.skills.find((skill) => skill.id === id);

  if (skill) return res.status(200).json({ data: { skill } });
  return res.status(404).json({ error: { message: 'Not found' } });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
