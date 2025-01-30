const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (your Jekyll site)
app.use(express.static('public'));

// Endpoint to get messages
app.get('/messages', (req, res) => {
  fs.readFile('messages.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading messages');
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to post new messages
app.post('/messages', (req, res) => {
  const newMessage = req.body.message;

  fs.readFile('messages.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading messages');
    }

    const messages = JSON.parse(data);
    messages.push(newMessage);

    fs.writeFile('messages.json', JSON.stringify(messages), (err) => {
      if (err) {
        return res.status(500).send('Error saving message');
      }
      res.status(200).send('Message saved');
    });
  });
});

// Reset messages every 3 hours
cron.schedule('0 */3 * * *', () => {
  fs.writeFile('messages.json', JSON.stringify([]), (err) => {
    if (err) {
      console.log('Error resetting messages');
    } else {
      console.log('Messages reset every 3 hours');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
