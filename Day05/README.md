# Day 05 - Advanced Forms and Student Event Website

## Summary

On Day 05, we continued practicing HTML forms and built a larger multi-page
student event website for **Tech Fest 2026**. This day introduced a more
realistic website structure with shared navigation, event information, images,
tables, forms, and contact details.

## Topics Covered

- Dropdown menus using `<select>` and `<option>`
- File upload fields using `<input type="file">`
- Telephone fields using `<input type="tel">`
- Grouping related content using `<div>`
- Building a multi-page website
- Reusing navigation links across pages
- Creating event schedules with tables
- Creating registration and contact forms
- Using local images from an assets folder
- Introducing semantic elements such as `<header>`, `<nav>`, `<main>`,
  `<section>`, `<article>`, and `<footer>`
- Creating email and telephone links

## Work Completed

### Form Controls Practice

The root `index.html` practices:

- Car selection dropdowns
- Country calling-code options
- Telephone number input
- Image file upload
- Grouping content with `<div>`

### Tech Fest 2026 Website

The `studenteventwebsite` folder contains a connected event website:

- `index.html` presents the event overview, highlights, competitions, schedule
  preview, participant information, and registration links.
- `about.html` describes the mission, expectations, benefits, highlights, and
  vision of the event.
- `schedule.html` displays the event program in a table.
- `register.html` collects participant registration information.
- `contact.html` provides organizer information and a contact form.
- `assets/` stores event images, country flags, calendar artwork, and other
  visual resources.

## Project Structure

```text
Day05/
|-- README.md
|-- index.html
`-- studenteventwebsite/
    |-- index.html
    |-- about.html
    |-- schedule.html
    |-- register.html
    |-- contact.html
    `-- assets/
        |-- image01.jpg
        |-- calender.png
        |-- Exclamationmark.png
        |-- nep.png
        |-- indo.png
        `-- japan.png
```

## Main Learning Outcome

By the end of Day 05, students can combine individual HTML skills into a
realistic multi-page website and understand how pages, navigation, forms,
tables, and assets work together.

## Practice Ideas

- Make the navigation identical on every event page.
- Add proper `for` and `id` values to every form label and input.
- Remove inline styling and keep the project HTML-only where required.
- Add meaningful page titles and image alternative text.
- Check every internal link from every page.
