const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/momcare.db');

db.serialize(() => {
  // Tabela para dados do pré-natal
  db.run(`
    CREATE TABLE IF NOT EXISTS pre_natal (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_name TEXT NOT NULL,
      gestational_age INTEGER,
      blood_pressure TEXT,
      notes TEXT
    )
  `);

  // Tabela para dados do parto
  db.run(`
    CREATE TABLE IF NOT EXISTS birth_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_name TEXT NOT NULL,
      delivery_date TEXT,
      delivery_type TEXT,
      complications TEXT
    )
  `);

  // Tabela para dados do bebê
  db.run(`
    CREATE TABLE IF NOT EXISTS baby_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_name TEXT NOT NULL,
      birth_weight REAL,
      birth_height REAL,
      health_status TEXT
    )
  `);

  // Tabela para consultas e observações
  db.run(`
    CREATE TABLE IF NOT EXISTS consultations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_name TEXT NOT NULL,
      consultation_date TEXT,
      nurse_analysis TEXT,
      therapy TEXT
    )
  `);

  // Tabela para registro de plantões
  db.run(`
    CREATE TABLE IF NOT EXISTS shifts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nurse_name TEXT NOT NULL,
      shift_date TEXT,
      notes TEXT
    )
  `);

  // Tabela para organização das visitas
  db.run(`
    CREATE TABLE IF NOT EXISTS visits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_name TEXT NOT NULL,
      visit_date TEXT,
      notes TEXT
    )
  `);
});

module.exports = db;