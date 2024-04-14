const express = require('express');
const { ManagementClient } = require('contentful-management');

const app = express();
app.use(express.json());

const client = new ManagementClient({
  accessToken: 'CFPAT-L-E0Ary1SeZrpf0euDiCMueNMIrwOIG8hyh9RpfR5qQ' // Content Management API token
});

app.post('/submit-form', async (req, res) => {
  try {
    const space = await client.getSpace('9acb47rc8erz');
    const environment = await space.getEnvironment('Itqan'); // or your environment ID

    // Create an entry for a content type with ID 'contactForm'
    const entry = await environment.createEntry('contactForm', {
      fields: {
        name: {
          'en-US': req.body.name
        },
        email: {
          'en-US': req.body.email
        },
        message: {
          'en-US': req.body.message
        }
      }
    });
    await entry.publish();

    res.status(200).send('Form data sent successfully');
  } catch (error) {
    console.error('Error handling form submission:', error);
    res.status(500).send('Failed to send form data');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
