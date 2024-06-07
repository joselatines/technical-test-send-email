## Endpoints

- **POST /api/v1/emails/upload**: Upload a PDF file, extract the specified number of lines from it, and send the extracted text via email.

### Request

- **Headers:**

  - `Content-Type: multipart/form-data`

- **Body:**
  - `file`: The PDF file to be uploaded.
  - `email`: The email address to send the extracted text.
  - `subject` (optional): The subject of the email.
  - `lines` (optional): The number of lines to extract from the PDF. If not specified, defaults to 30 lines.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/joselatines/technical-test-send-email
   ```
2. Navigate to the project directory::
   ```bash
   cd technical-test-send-email
   ```
3. Install the dependencies:

```bash
 npm install
```

Configure your email service and any necessary environment variables.

## Usage

Start the server:

```bash
 npm start
```

Send a POST request to /upload with the required form data to extract lines from a PDF and send it via email.

## Notes

- Ensure that the email service is properly configured to avoid issues with sending emails.
- The API currently extracts text lines directly from the PDF, which may include formatting and layout issues depending on the PDF's structure.
