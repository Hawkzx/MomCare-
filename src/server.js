const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/db');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Rotas para pré-natal
app.post('/api/prenatal', (req, res) => {
  const { patient_name, gestational_age, blood_pressure, notes } = req.body;
  db.run(
    'INSERT INTO pre_natal (patient_name, gestational_age, blood_pressure, notes) VALUES (?, ?, ?, ?)',
    [patient_name, gestational_age, blood_pressure, notes],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Dados do pré-natal salvos com sucesso!' });
    }
  );
});

app.get('/api/prenatal', (req, res) => {
  db.all('SELECT * FROM pre_natal', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Rotas para parto
app.post('/api/birth', (req, res) => {
  const { patient_name, delivery_date, delivery_type, complications } = req.body;
  db.run(
    'INSERT INTO birth_data (patient_name, delivery_date, delivery_type, complications) VALUES (?, ?, ?, ?)',
    [patient_name, delivery_date, delivery_type, complications],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Dados do parto salvos com sucesso!' });
    }
  );
});

app.get('/api/birth', (req, res) => {
  db.all('SELECT * FROM birth_data', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Rotas para dados do bebê
app.post('/api/baby', (req, res) => {
  const { patient_name, birth_weight, birth_height, health_status } = req.body;
  db.run(
    'INSERT INTO baby_data (patient_name, birth_weight, birth_height, health_status) VALUES (?, ?, ?, ?)',
    [patient_name, birth_weight, birth_height, health_status],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Dados do bebê salvos com sucesso!' });
    }
  );
});

app.get('/api/baby', (req, res) => {
  db.all('SELECT * FROM baby_data', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Rotas para consultas
app.post('/api/consultations', (req, res) => {
  const { patient_name, consultation_date, nurse_analysis, therapy } = req.body;
  db.run(
    'INSERT INTO consultations (patient_name, consultation_date, nurse_analysis, therapy) VALUES (?, ?, ?, ?)',
    [patient_name, consultation_date, nurse_analysis, therapy],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Consulta salva com sucesso!' });
    }
  );
});

app.get('/api/consultations', (req, res) => {
  db.all('SELECT * FROM consultations', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Rotas para plantões
app.post('/api/shifts', (req, res) => {
  const { nurse_name, shift_date, notes } = req.body;
  db.run(
    'INSERT INTO shifts (nurse_name, shift_date, notes) VALUES (?, ?, ?)',
    [nurse_name, shift_date, notes],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Plantão registrado com sucesso!' });
    }
  );
});

app.get('/api/shifts', (req, res) => {
  db.all('SELECT * FROM shifts', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Rotas para visitas
app.post('/api/visits', (req, res) => {
  const { patient_name, visit_date, notes } = req.body;
  db.run(
    'INSERT INTO visits (patient_name, visit_date, notes) VALUES (?, ?, ?)',
    [patient_name, visit_date, notes],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Visita registrada com sucesso!' });
    }
  );
});

app.get('/api/visits', (req, res) => {
  db.all('SELECT * FROM visits', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});