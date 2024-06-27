```mermaid
sequenceDiagram
  participant browser
  participant server

  Note right of browser: User enters text e.g. "New note" and clicks the "Save" button

  Note right of browser: The browser redraws the notes list and then sends the new note to the server

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa [{ "content": "New note", "date": "2024-06-27T12:23:09115Z" }]
  activate server
  server-->>browser: Respond with 201 [{ "message": "note created"}]
  deactivate server