const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

let users = [];
let testimonials = [];

// Inisialisasi data pengguna dari file saat server dimulai
try {
  const userData = fs.readFileSync('./users.json', 'utf-8');
  users = JSON.parse(userData);
} catch (error) {
  console.error('Error reading users data:', error.message);
}

// Inisialisasi data testimonial dari file saat server dimulai
try {
  const testimonialData = fs.readFileSync('./testimonials.json', 'utf-8');
  testimonials = JSON.parse(testimonialData);
} catch (error) {
  console.error('Error reading testimonials data:', error.message);
}

app.get('/users', (req, res) => {
  try {
    const userData = fs.readFileSync('./users.json', 'utf-8');
    const parsedUsers = JSON.parse(userData);
    res.status(200).json(parsedUsers);
  } catch (error) {
    console.error('Error reading users data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { fullName, email, password: hashedPassword };

  users.push(newUser);

  saveData();
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ email }, 'ALPHA_CLOTHES_JWT_SECRET_KEY');
  res.status(200).json({ token });
});

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  console.log('Received token:', token);

  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  jwt.verify(token.split(' ')[1], 'ALPHA_CLOTHES_JWT_SECRET_KEY', (err, user) => {
    if (err) {
      console.error('Token verification error:', err.message);
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

app.get('/user', authenticateToken, (req, res) => {
  const user = users.find((u) => u.email === req.user.email);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({
    email: user.email,
    fullName: user.fullName,
  });
});

app.get('/testimonials', (req, res) => {
  try {
    const testimonialsData = fs.readFileSync('./testimonials.json', 'utf-8');
    const parsedTestimonials = JSON.parse(testimonialsData);
    res.status(200).json(parsedTestimonials);
  } catch (error) {
    console.error('Error reading testimonials data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/testimonial', authenticateToken, (req, res) => {
  const { rating, text } = req.body;
  const user = req.user;

  const userInfo = users.find((u) => u.email === user.email);

  if (!userInfo) {
    return res.status(404).json({ error: 'User not found' });
  }

  console.log(user);
  console.log(userInfo);
  const testimonial = { user: userInfo.fullName, rating, text };
  testimonials.push(testimonial);
  saveData();
  res.status(201).json({ message: 'Testimonial added successfully' });
});

app.delete('/users', (req, res) => {
  users = [];
  saveData();

  res.status(200).json({ message: 'All users deleted successfully' });
});

app.delete('/testimonials', authenticateToken, (req, res) => {
  testimonials = [];
  saveData();

  res.status(200).json({ message: 'All testimonials deleted successfully' });
});

const saveData = () => {
  fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
  fs.writeFileSync('./testimonials.json', JSON.stringify(testimonials, null, 2));
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
