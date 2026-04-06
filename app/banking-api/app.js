const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// إعدادات قاعدة البيانات من الـ ConfigMap والـ Secret
const pool = new Pool({
  host: process.env.DB_HOST || 'postgres-db',
  user: process.env.DB_USER || 'bankuser',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'bankingdb',
  port: 5432,
});

// 1. Liveness Probe: للتأكد أن العملية تعمل
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

// 2. Readiness Probe: للتأكد من جاهزية الاتصال بقاعدة البيانات
app.get('/ready', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).send('Ready to handle traffic');
  } catch (err) {
    res.status(503).send('Database connection failed');
  }
});

// 3. API Stats
app.get('/api/stats', (req, res) => {
  res.json({ total_transactions: 1500, active_users: 45 });
});

// 4. List Accounts
app.get('/api/accounts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM accounts ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Transfer Money (Post)
app.post('/api/transactions', async (req, res) => {
  const { from, to, amount } = req.body;
  // هنا نضع منطق التحويل البسيط
  res.status(201).json({ message: `Transferred $${amount} from ${from} to ${to}` });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Banking API started on port ${PORT}`));