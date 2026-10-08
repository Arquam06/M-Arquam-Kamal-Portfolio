/**
 * Helper to dispatch a robust email compose event.
 * Opens Gmail in a browser tab first, and falls back to mailto if blocked.
 * 
 * @param {string} toEmail - Recipient email
 * @param {string} subject - Subject line
 * @param {string} body - Body message content
 * @param {function} [onStatusUpdate] - Optional callback to receive status updates
 */
export const openRobustEmailCompose = (toEmail, subject, body, onStatusUpdate) => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${encodedSubject}&body=${encodedBody}`;
  const mailtoUrl = `mailto:${toEmail}?subject=${encodedSubject}&body=${encodedBody}`;

  if (onStatusUpdate) {
    onStatusUpdate("Opening your email client...");
  }

  // Attempt to open Gmail compose tab
  const newWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");

  // Fallback to mailto if browser popups are blocked or not supported
  if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
    window.location.href = mailtoUrl;
    if (onStatusUpdate) {
      onStatusUpdate("Opening default mail application (Gmail popup blocked)...");
    }
  } else if (onStatusUpdate) {
    onStatusUpdate("Gmail compose window opened. Complete and send the message.");
  }
};
