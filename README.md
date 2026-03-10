# Paige Curtis Photography

A responsive, phone-compatible photography site with homepage, portfolio, services, about, book a session, and contact pages.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Tagline, gallery, Meet Paige, What to Expect, Spreading God's love, Contact |
| Portfolio | `portfolio.html` | Categories (Couples, Families, Maternity, Surf) with horizontal scroll galleries |
| About Me | `about.html` | Photo + bio text |
| Book a Session | `book.html` | **Services at top** (hero “SERVICES”, packages with images), then Choose your session cards, The Process, carousel, FAQ. `services.html` redirects here. |
| Contact | `contact.html` | Intro, image, form (First/Last name, Email, Message), Send button |

All pages share the same header (with hamburger nav on mobile), purple accent bar, footer, and chat FAB.

## Add your photos

Place images in the `images/` folder. Missing images show a neutral placeholder.

- **Home:** `gallery-1.jpg` … `gallery-6.jpg`
- **About:** `about-paige.jpg`
- **Home (Spreading God's love):** `spreading-love.jpg`
- **Book a Session (services at top):** `services-hero.jpg`, `service-45.jpg`, `service-1hr.jpg`, `service-2hr.jpg`, `process-1.jpg` … `process-3.jpg`
- **Portfolio:** `port-couples-1.jpg` … `port-surf-4.jpg` (per category)
- **Book:** `process-1.jpg`, `process-2.jpg`, `process-3.jpg`
- **Contact:** `contact-hero.jpg`

See `images/README.md` for more detail.

## Run locally

1. Open `index.html` in a browser, or  
2. From the `website` folder: `python -m http.server 8080` then open http://localhost:8080

## Inquiry form – receiving submissions by email

The **Inquiry** page (`inquiry.html`) has a form. Fields marked with **\*** are required (Email, session type, date, and “Tell me a little bit about yourself”). The form is set up to use **Formspree** so you get each submission by email:

1. Go to [formspree.io](https://formspree.io) and sign up (free).
2. Create a new form and set the notification email to **pagecurtisart@gmail.com** (or any email you want).
3. Formspree will give you a form ID (e.g. `xjvggnqz`). In `inquiry.html`, find the form’s `action` attribute and replace `YOUR_FORM_ID` with that ID:
   - From: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - To:   `action="https://formspree.io/f/xjvggnqz"` (your actual ID).

After that, when someone clicks **Send**, you’ll get an email with their answers. The contact form on the homepage can be wired the same way if you want.

## Next steps

- Connect the contact form (homepage) to Formspree or another service if you want those by email too.
- Add a real hero background image for the Services page (e.g. via CSS or `images/services-hero.jpg`).
- Replace placeholder images with your own.
